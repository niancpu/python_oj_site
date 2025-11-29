
import { Problem, JudgeResult, JudgeVerdict } from '../types';

// 声明 Pyodide 全局类型
declare global {
  interface Window {
    loadPyodide: any;
  }
}

let pyodide: any = null;
let pyodideLoadPromise: Promise<any> | null = null;

// 动态加载 Pyodide 脚本
const loadPyodideScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (window.loadPyodide) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Pyodide script'));
    document.head.appendChild(script);
  });
};

// 初始化 Pyodide (非阻塞)
export const initializePyodide = async () => {
  if (pyodide) return pyodide;
  if (pyodideLoadPromise) return pyodideLoadPromise;

  pyodideLoadPromise = (async () => {
    try {
      console.log("正在加载 Pyodide 脚本...");
      await loadPyodideScript();

      console.log("正在初始化 Pyodide...");
      pyodide = await window.loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/"
      });

      console.log("Pyodide 核心环境准备就绪");
      return pyodide;
    } catch (error) {
      console.error("Pyodide initialization failed:", error);
      pyodideLoadPromise = null; // 允许重试
      throw error;
    }
  })();

  return pyodideLoadPromise;
};

// 按需加载 Python 库
const loadRequiredPackages = async (code: string) => {
  if (!pyodide) await initializePyodide();

  const packages: string[] = [];
  if (code.includes('import numpy') || code.includes('from numpy')) packages.push('numpy');
  if (code.includes('import pandas') || code.includes('from pandas')) packages.push('pandas');
  if (code.includes('import pytz') || code.includes('from pytz')) packages.push('pytz');

  if (packages.length > 0) {
    console.log(`正在按需加载库: ${packages.join(', ')}...`);
    await pyodide.loadPackage(packages);
  }
};

// 构建运行代码的 Python 包装器
const buildPythonRunner = (userCode: string, inputData: string) => {
  const safeInput = inputData.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');

  return `
import sys
import io

# 模拟标准输入
class MockStdin(io.TextIOBase):
    def __init__(self, input_str):
        self.inputs = input_str.split('\\n')
        self.index = 0
    
    def readline(self):
        if self.index < len(self.inputs):
            line = self.inputs[self.index]
            self.index += 1
            return line + '\\n'
        return ''

# 重置 stdin 和 stdout
sys.stdin = MockStdin('${safeInput}')
sys.stdout = io.StringIO()

try:
    # 用户代码区域
${userCode.split('\n').map(line => '    ' + line).join('\n')}
    
except SystemExit:
    pass
except Exception as e:
    raise e
`;
};

// 执行评测的主函数
export const judgeCode = async (problem: Problem, userCode: string): Promise<JudgeResult> => {
  try {
    if (!pyodide) {
      await initializePyodide();
    }

    // 按需加载库
    await loadRequiredPackages(userCode);

    let allPassed = true;
    let failedCaseIndex = -1;
    let failedOutput = "";
    let failedExpected = "";
    let errorType: JudgeVerdict = 'Runtime Error';
    let errorMsg = "";

    for (let i = 0; i < problem.testCases.length; i++) {
      const testCase = problem.testCases[i];
      const pythonScript = buildPythonRunner(userCode, testCase.input);

      try {
        await pyodide.runPythonAsync(pythonScript);
        const actualOutputRaw = pyodide.runPython("sys.stdout.getvalue()");

        const normalize = (str: string) => str.trim().replace(/[ \t]+$/gm, '');
        const actual = normalize(actualOutputRaw);
        const expected = normalize(testCase.expectedOutput);

        if (actual !== expected) {
          allPassed = false;
          failedCaseIndex = i;
          failedOutput = actualOutputRaw.trim();
          failedExpected = testCase.expectedOutput.trim();

          const stripAll = (s: string) => s.replace(/\s+/g, '');
          if (stripAll(actual) === stripAll(expected)) {
            errorType = 'Presentation Error';
            errorMsg = "答案正确，但格式（空格或换行）不符合要求。";
          } else {
            errorType = 'Wrong Answer';
            errorMsg = `测试用例 ${i + 1} 未通过。`;
          }
          break;
        }

      } catch (err: any) {
        allPassed = false;
        failedCaseIndex = i;
        const errName = err.name || "";
        const errMessage = err.message || "";

        if (errName.includes("SyntaxError") || errName.includes("IndentationError")) {
          errorType = 'Compile Error';
          errorMsg = `代码存在语法错误 (Syntax Error)。`;
        } else {
          errorType = 'Runtime Error';
          errorMsg = `运行时发生错误 (Runtime Error)。`;
        }

        const lines = errMessage.split('\n');
        const pyErrorIndex = lines.findIndex((l: string) => l.includes('File "<exec>"'));
        failedOutput = pyErrorIndex !== -1 ? lines.slice(pyErrorIndex).join('\n') : errMessage;
        break;
      }
    }

    if (allPassed) {
      return {
        status: 'Accepted',
        explanation: '恭喜！你的代码通过了所有测试用例。',
        output: 'All tests passed successfully.'
      };
    } else {
      let explanation = errorMsg;
      if (errorType === 'Wrong Answer' || errorType === 'Presentation Error') {
        explanation += `\n输入:\n${problem.testCases[failedCaseIndex].input}\n预期输出:\n${failedExpected}`;
      }
      return {
        status: errorType,
        explanation: explanation,
        output: failedOutput
      };
    }
  } catch (globalError: any) {
    console.error("Critical judging error:", globalError);
    return {
      status: 'Runtime Error',
      explanation: '系统错误: Python 引擎初始化失败或发生意外错误。',
      output: globalError.message || 'Unknown error'
    };
  }
};
