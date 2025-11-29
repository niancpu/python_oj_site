import { Problem } from '../../types';
import { pythonBasicTestCases } from '../testcases/python-basic';

export const pythonBasicProblems: Problem[] = [
    {
        id: 1,
        title: 'A + B 问题',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '这是一个经典的入门问题。你的任务是计算两个整数的和。',
        inputFormat: '输入包含两个整数 a 和 b，以空格分隔。',
        outputFormat: '输出一个整数，即 a 和 b 的和。',
        tags: ['基础输入输出', '算术运算'],
        examples: [
            {
                input: '1 5',
                output: '6',
            },
            {
                input: '-1 1',
                output: '0'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[1]
    },
    {
        id: 3,
        title: '字符串反转',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '编写一个程序，接收一个字符串作为输入，然后输出这个字符串的反转形式。',
        inputFormat: '输入一行，包含一个字符串。',
        outputFormat: '输出反转后的字符串。',
        tags: ['字符串', '切片'],
        examples: [
            {
                input: 'hello',
                output: 'olleh',
            },
            {
                input: 'Python',
                output: 'nohtyP'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[3]
    },
    {
        id: 4,
        title: '判断奇偶数',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '给定一个整数，判断它是奇数还是偶数。',
        inputFormat: '输入一个整数。',
        outputFormat: '如果该数是偶数，输出 "Even"。如果是奇数，输出 "Odd"。',
        tags: ['条件判断', '模运算'],
        examples: [
            {
                input: '4',
                output: 'Even',
            },
            {
                input: '7',
                output: 'Odd'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[4]
    },
    {
        id: 5,
        title: '列表元素求和',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '计算给定整数列表的所有元素之和。',
        inputFormat: '输入一行，包含多个以空格分隔的整数。',
        outputFormat: '输出这些整数的和。',
        tags: ['列表', '内置函数sum'],
        examples: [
            {
                input: '1 2 3 4 5',
                output: '15',
            },
            {
                input: '10 -1 5',
                output: '14'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[5]
    },
    {
        id: 16,
        title: '查找列表最大值',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '给定一个整数列表，找出其中的最大值。',
        inputFormat: '输入一行，包含多个以空格分隔的整数。',
        outputFormat: '输出列表中的最大值。',
        tags: ['列表', '内置函数max'],
        examples: [
            {
                input: '1 9 2 8 5',
                output: '9',
            },
            {
                input: '-1 -5 -2',
                output: '-1'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[16]
    },
    {
        id: 17,
        title: '计算阶乘',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '计算一个非负整数的阶乘。阶乘的定义是 n! = n * (n-1) * ... * 1。规定 0! = 1。',
        inputFormat: '输入一个非负整数 n。',
        outputFormat: '输出 n 的阶乘。',
        tags: ['算法', '循环'],
        examples: [
            {
                input: '5',
                output: '120',
                explanation: '5! = 5 * 4 * 3 * 2 * 1 = 120'
            },
            {
                input: '0',
                output: '1'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[17]
    },
    {
        id: 18,
        title: '检查回文串',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '判断一个字符串是否是回文串。回文串是指正读和反读都一样的字符串。',
        inputFormat: '输入一个字符串。',
        outputFormat: '如果是回文串，输出 "Yes"；否则输出 "No"。',
        tags: ['字符串', '切片', '条件判断'],
        examples: [
            {
                input: 'level',
                output: 'Yes',
            },
            {
                input: 'python',
                output: 'No'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[18]
    },
    {
        id: 22,
        title: 'BMI 指数计算器',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入身高（米）和体重（千克），计算 BMI = 体重 / 身高²。根据结果判断体型：\n- 偏瘦: < 18.5\n- 正常: 18.5 - 23.9\n- 超重: 24 - 27.9\n- 肥胖: ≥ 28',
        inputFormat: '第一行输入身高（米），第二行输入体重（千克）。',
        outputFormat: '输出体型等级（偏瘦、正常、超重、肥胖）。',
        tags: ['条件判断', '算术运算'],
        examples: [
            {
                input: '1.75\n65',
                output: '正常',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[22]
    },
    {
        id: 23,
        title: '温度转换',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入摄氏度（C）或华氏度（F），转换为另一种单位。\n公式：C = (F - 32) / 1.8，F = C * 1.8 + 32。',
        inputFormat: '输入一个字符串，如 "32C" 或 "98F"。',
        outputFormat: '输出转换后的温度，保留两位小数（如 "89.60F" 或 "0.00C"）。',
        tags: ['字符串处理', '算术运算'],
        examples: [
            {
                input: '32C',
                output: '89.60F',
            },
            {
                input: '100F',
                output: '37.78C'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[23]
    },
    {
        id: 24,
        title: '打印九九乘法表',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '打印经典的九九乘法表。',
        inputFormat: '无输入。',
        outputFormat: '打印 9 行乘法表，每项格式为 "1x1=1"，项之间用空格分隔。',
        tags: ['循环', '格式化输出'],
        examples: [
            {
                input: '',
                output: '1x1=1 \n1x2=2 2x2=4 \n1x3=3 2x3=6 3x3=9 \n1x4=4 2x4=8 3x4=12 4x4=16 \n1x5=5 2x5=10 3x5=15 4x5=20 5x5=25 \n1x6=6 2x6=12 3x6=18 4x6=24 5x6=30 6x6=36 \n1x7=7 2x7=14 3x7=21 4x7=28 5x7=35 6x7=42 7x7=49 \n1x8=8 2x8=16 3x8=24 4x8=32 5x8=40 6x8=48 7x8=56 8x8=64 \n1x9=9 2x9=18 3x9=27 4x9=36 5x9=45 6x9=54 7x9=63 8x9=72 9x9=81 ',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[24]
    },
    {
        id: 25,
        title: '计算 1-100 的和',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '计算 1 到 100 所有整数的和。',
        inputFormat: '无输入。',
        outputFormat: '输出一个整数。',
        tags: ['循环', '数学'],
        examples: [
            {
                input: '',
                output: '5050',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[25]
    },
    {
        id: 26,
        title: '判断闰年',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入年份，判断是否为闰年。\n规则：能被 4 整除但不能被 100 整除，或能被 400 整除。',
        inputFormat: '输入一个年份整数。',
        outputFormat: '如果是闰年输出 "Yes"，否则输出 "No"。',
        tags: ['条件判断', '逻辑运算'],
        examples: [
            {
                input: '2000',
                output: 'Yes',
            },
            {
                input: '2100',
                output: 'No'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[26]
    },
    {
        id: 27,
        title: '输入密码验证',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '预设密码 "123456"。用户输入密码，最多 3 次机会。正确提示 "登录成功"，3 次错误提示 "锁定"。',
        inputFormat: '多行输入，每行一个密码尝试。',
        outputFormat: '输出验证结果。',
        tags: ['循环', '条件判断'],
        examples: [
            {
                input: '123456',
                output: '登录成功',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[27]
    },
    {
        id: 28,
        title: '打印 100 以内的质数',
        difficulty: '中等',
        category: 'Python 语言基础',
        description: '输出 100 以内所有质数（大于 1 且只能被 1 和自身整除）。',
        inputFormat: '无输入。',
        outputFormat: '以空格分隔打印所有质数。',
        tags: ['循环', '素数判断'],
        examples: [
            {
                input: '',
                output: '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[28]
    },
    {
        id: 29,
        title: '整数反转',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入一个整数，反转后输出。例如 123 -> 321，-456 -> -654。',
        inputFormat: '输入一个整数。',
        outputFormat: '输出反转后的整数。',
        tags: ['字符串处理', '数学'],
        examples: [
            {
                input: '-123',
                output: '-321',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[29]
    },
    {
        id: 30,
        title: '计算平均分',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入 5 个学生成绩，计算平均分并判断等级（≥90 优秀、≥80 良好、≥60 及格、否则不及格）。',
        inputFormat: '一行输入 5 个整数，以空格分隔。',
        outputFormat: '第一行输出平均分（保留1位小数），第二行输出等级。',
        tags: ['列表', '条件判断'],
        examples: [
            {
                input: '90 95 85 80 92',
                output: '88.4\n良好',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[30]
    },
    {
        id: 31,
        title: '判断数字正负零',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入一个数，判断是正数、负数还是零。',
        inputFormat: '输入一个数字。',
        outputFormat: '输出 "Positive", "Negative" 或 "Zero"。',
        tags: ['条件判断'],
        examples: [
            {
                input: '-5',
                output: 'Negative',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[31]
    },
    {
        id: 32,
        title: '打印 1-100 内 3 的倍数',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输出 1 到 100 中所有能被 3 整除的数。',
        inputFormat: '无输入。',
        outputFormat: '以空格分隔打印。',
        tags: ['循环', '模运算'],
        examples: [
            {
                input: '',
                output: '3 6 9 12 15 18 21 24 27 30 33 36 39 42 45 48 51 54 57 60 63 66 69 72 75 78 81 84 87 90 93 96 99',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[32]
    },
    {
        id: 33,
        title: '交换两个变量的值',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入两个变量 a 和 b 的值，交换它们并输出。',
        inputFormat: '输入两个以空格分隔的值。',
        outputFormat: '输出交换后的两个值，以空格分隔。',
        tags: ['变量操作'],
        examples: [
            {
                input: '1 2',
                output: '2 1',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[33]
    },
    {
        id: 34,
        title: '输入字符串统计长度',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入字符串，输出其长度（不含空格）。',
        inputFormat: '输入一行字符串。',
        outputFormat: '输出一个整数。',
        tags: ['字符串处理'],
        examples: [
            {
                input: 'hello world',
                output: '10',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[34]
    },
    {
        id: 35,
        title: '判断字符串是否全为数字',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入字符串，判断是否只包含数字。',
        inputFormat: '输入一个字符串。',
        outputFormat: '如果是输出 "Yes"，否则输出 "No"。',
        tags: ['字符串处理'],
        examples: [
            {
                input: '123',
                output: 'Yes',
            },
            {
                input: '12a3',
                output: 'No'
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[35]
    },
    {
        id: 36,
        title: '计算圆的面积和周长',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入半径 r，计算圆的面积（πr²）和周长（2πr）。保留两位小数。',
        inputFormat: '输入一个数字 r。',
        outputFormat: '第一行输出面积，第二行输出周长。',
        tags: ['数学', 'math模块'],
        examples: [
            {
                input: '3',
                output: '28.27\n18.85',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[36]
    },
    {
        id: 37,
        title: '打印等腰三角形',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入边长 n，打印等腰三角形。',
        inputFormat: '输入一个整数 n。',
        outputFormat: '打印 n 行三角形。',
        tags: ['循环', '图形打印'],
        examples: [
            {
                input: '3',
                output: '  *\n ***\n*****',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[37]
    },
    {
        id: 38,
        title: '简单计算器',
        difficulty: '简单',
        category: 'Python 语言基础',
        description: '输入两个数和运算符（+、-、*、/），输出计算结果。',
        inputFormat: '三行输入：数字1，运算符，数字2。',
        outputFormat: '输出计算结果。如果除数为0，输出 "Error"。',
        tags: ['条件判断', '算术运算'],
        examples: [
            {
                input: '1\n+\n2',
                output: '3.0',
            }
        ],
        starterCode: '# 请在此处编写代码',
        testCases: pythonBasicTestCases[38]
    }
];
