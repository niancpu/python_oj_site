import React, { useState, useCallback, useEffect } from 'react';
import { Problem, JudgeResult, JudgeStatus, Submission } from './types';
import { PROBLEMS } from './constants';
import ProblemList from './components/ProblemList';
import ProblemDisplay from './components/ProblemDisplay';
import CodeEditor from './components/CodeEditor';
import ResultPanel from './components/ResultPanel';
import HintModal from './components/HintModal';
import AuthSuccessPage from './components/AuthSuccessPage';
import LoginPage from './components/LoginPage';
import { judgeCode, initializePyodide } from './services/pyodideService';
import CreativeWelcomePage from './components/CreativeWelcomePage';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const [showAuthSuccess, setShowAuthSuccess] = useState(false);

  const [selectedProblem, setSelectedProblem] = useState<Problem>(PROBLEMS[0]);
  const [isHintModalOpen, setIsHintModalOpen] = useState(false);
  const [userCode, setUserCode] = useState<string>('');
  const [judgeStatus, setJudgeStatus] = useState<JudgeStatus>('idle');
  const [judgeResult, setJudgeResult] = useState<JudgeResult | null>(null);
  const [isProblemListCollapsed, setIsProblemListCollapsed] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<Record<number, Submission[]>>({});
  const [solvedProblemIds, setSolvedProblemIds] = useState<Set<number>>(new Set());
  const [isEngineReady, setIsEngineReady] = useState(false);
  const [engineStatus, setEngineStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  const [codeDrafts, setCodeDrafts] = useState<Record<number, string>>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Initialize Pyodide
  useEffect(() => {
    const initPyodide = async () => {
      try {
        setEngineStatus('loading');
        await initializePyodide();
        setEngineStatus('ready');
        setIsEngineReady(true);
      } catch (error) {
        setEngineStatus('error');
        console.error("Pyodide init failed", error);
      }
    };
    // Delay initialization slightly to let UI render
    setTimeout(initPyodide, 100);
  }, []);

  // Load user data when currentUser changes
  useEffect(() => {
    if (!currentUser) {
      setIsDataLoaded(false);
      return;
    }

    try {
      // Load solved problems
      const solvedJson = localStorage.getItem(`oj_${currentUser}_solved_v2`);
      if (solvedJson) {
        setSolvedProblemIds(new Set(JSON.parse(solvedJson)));
      } else {
        setSolvedProblemIds(new Set());
      }

      // Load submission history
      const historyJson = localStorage.getItem(`oj_${currentUser}_history_v2`);
      if (historyJson) {
        const parsed = JSON.parse(historyJson);
        // Restore Date objects
        Object.keys(parsed).forEach(key => {
          parsed[key] = parsed[key].map((sub: any) => ({
            ...sub,
            timestamp: new Date(sub.timestamp)
          }));
        });
        setSubmissionHistory(parsed);
      } else {
        setSubmissionHistory({});
      }

      // Load code drafts
      const draftsJson = localStorage.getItem(`oj_${currentUser}_drafts_v2`);
      const drafts = draftsJson ? JSON.parse(draftsJson) : {};
      setCodeDrafts(drafts);

      // Load last visited problem
      const lastId = localStorage.getItem(`oj_${currentUser}_last_id_v2`);
      let initialProblem = PROBLEMS[0];
      if (lastId) {
        const p = PROBLEMS.find(p => p.id === parseInt(lastId));
        if (p) initialProblem = p;
      }
      setSelectedProblem(initialProblem);

      // Set initial code from draft if available, otherwise default comment
      if (drafts[initialProblem.id]) {
        setUserCode(drafts[initialProblem.id]);
      } else {
        setUserCode('# 请在此处编写代码');
      }

      setIsDataLoaded(true);
    } catch (e) {
      console.error('Failed to load data', e);
      setUserCode('# 请在此处编写代码');
      setIsDataLoaded(true);
    }
  }, [currentUser]);

  // Save submission history whenever it changes
  useEffect(() => {
    if (!currentUser || !isDataLoaded) return;
    if (Object.keys(submissionHistory).length > 0) {
      localStorage.setItem(`oj_${currentUser}_history_v2`, JSON.stringify(submissionHistory));
    }
  }, [submissionHistory, currentUser, isDataLoaded]);

  // Save code drafts (debounced)
  useEffect(() => {
    if (!currentUser || !isDataLoaded) return;

    const timer = setTimeout(() => {
      setCodeDrafts(prev => {
        const newDrafts = { ...prev, [selectedProblem.id]: userCode };
        localStorage.setItem(`oj_${currentUser}_drafts_v2`, JSON.stringify(newDrafts));
        return newDrafts;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [userCode, selectedProblem.id, isDataLoaded, currentUser]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setShowAuthSuccess(true);

    // Update users list
    try {
      const usersJson = localStorage.getItem('oj_users');
      let users: string[] = usersJson ? JSON.parse(usersJson) : [];
      if (!users.includes(username)) {
        users = [username, ...users];
        localStorage.setItem('oj_users', JSON.stringify(users));
      } else {
        // Move to top if exists
        users = [username, ...users.filter(u => u !== username)];
        localStorage.setItem('oj_users', JSON.stringify(users));
      }
    } catch (e) {
      console.error('Failed to update users list', e);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAuthSuccess(false);
    setIsStarted(true);
    // Reset state
    setSolvedProblemIds(new Set());
    setSubmissionHistory({});
    setCodeDrafts({});
    setUserCode('');
  };

  const handleProblemChange = useCallback((problemId: number) => {
    if (problemId === selectedProblem.id) return;

    const currentCode = userCode;
    const currentProblemId = selectedProblem.id;

    if (currentUser) {
      setCodeDrafts(prev => {
        const newDrafts = { ...prev, [currentProblemId]: currentCode };
        localStorage.setItem(`oj_${currentUser}_drafts_v2`, JSON.stringify(newDrafts));
        return newDrafts;
      });
    }

    const newProblem = PROBLEMS.find(p => p.id === problemId);
    if (newProblem) {
      setSelectedProblem(newProblem);

      const draft = codeDrafts[newProblem.id];
      setUserCode(draft || '# 请在此处编写代码');

      setJudgeResult(null);
      setJudgeStatus('idle');

      if (currentUser) {
        localStorage.setItem(`oj_${currentUser}_last_id_v2`, problemId.toString());
      }
    }
  }, [selectedProblem, userCode, codeDrafts, currentUser]);

  const toggleProblemList = useCallback(() => {
    setIsProblemListCollapsed(prev => !prev);
  }, []);

  const handleShowHints = () => setIsHintModalOpen(true);
  const handleCloseHints = () => setIsHintModalOpen(false);

  const handleSubmit = async () => {
    if (!userCode.trim()) {
      alert('代码不能为空！');
      return;
    }
    if (!isEngineReady) {
      return;
    }

    setJudgeStatus('judging');
    setJudgeResult(null);

    try {
      const result = await judgeCode(selectedProblem, userCode);

      setJudgeResult(result);
      setJudgeStatus('finished');

      const newSubmission: Submission = {
        id: Date.now().toString(),
        code: userCode,
        result: result,
        timestamp: new Date(),
      };

      setSubmissionHistory(prev => {
        const currentHistory = prev[selectedProblem.id] || [];
        const newHistory = [newSubmission, ...currentHistory].slice(0, 10);
        return {
          ...prev,
          [selectedProblem.id]: newHistory
        };
      });

      if (result.status === 'Accepted') {
        setSolvedProblemIds(prev => {
          const newSet = new Set(prev);
          newSet.add(selectedProblem.id);
          if (currentUser) {
            localStorage.setItem(`oj_${currentUser}_solved_v2`, JSON.stringify(Array.from(newSet)));
          }
          return newSet;
        });
      }

    } catch (error) {
      console.error('Judging error:', error);
      const errorMessage = error instanceof Error ? error.message : '发生未知错误';

      const errorResult: JudgeResult = {
        status: 'Runtime Error',
        explanation: `系统错误: ${errorMessage}`,
        output: ''
      };

      setJudgeResult(errorResult);
      setJudgeStatus('error');
    }
  };

  const handleEnterApp = () => {
    setShowAuthSuccess(false);
  };

  if (!isStarted) {
    return <CreativeWelcomePage onStart={handleStart} />;
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (showAuthSuccess) {
    return <AuthSuccessPage username={currentUser} onEnterApp={handleEnterApp} />;
  }

  return (
    <div className="app-container relative h-screen w-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col h-screen bg-transparent text-gray-900 font-sans overflow-hidden">
        <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm flex-none sticky top-0 z-20 h-16">
          <nav className="container mx-auto px-6 h-full flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="text-xl font-medium text-gray-700 tracking-tight">
                Online Judge <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full ml-2 font-medium">Local</span>
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              {engineStatus === 'loading' && (
                <div className="flex items-center text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                  <svg className="animate-spin -ml-1 mr-2 h-3 w-3 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Python 引擎初始化中...
                </div>
              )}
              {engineStatus === 'error' && (
                <div className="flex items-center text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full">
                  引擎加载失败
                </div>
              )}

              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {currentUser.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{currentUser}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded hover:bg-red-50"
                >
                  退出
                </button>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-4 lg:p-6 overflow-y-auto flex flex-col h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
            <div className={`h-full min-h-0 transition-all duration-500 ease-in-out flex flex-col animate-slide-up ${isProblemListCollapsed ? 'lg:col-span-1' : 'lg:col-span-3'}`} style={{ animationDelay: '0.1s' }}>
              <ProblemList
                problems={PROBLEMS}
                selectedProblemId={selectedProblem.id}
                onSelect={handleProblemChange}
                isCollapsed={isProblemListCollapsed}
                onToggle={toggleProblemList}
                solvedProblemIds={solvedProblemIds}
              />
            </div>

            <div className={`h-full min-h-0 transition-all duration-500 ease-in-out overflow-hidden animate-slide-up ${isProblemListCollapsed ? 'lg:col-span-5' : 'lg:col-span-4'}`} style={{ animationDelay: '0.2s' }}>
              <ProblemDisplay problem={selectedProblem} />
            </div>

            <div className={`flex flex-col h-full min-h-0 transition-all duration-500 ease-in-out animate-slide-up ${isProblemListCollapsed ? 'lg:col-span-6' : 'lg:col-span-5'}`} style={{ animationDelay: '0.3s' }}>
              <div className="flex-grow min-h-0 flex flex-col">
                <CodeEditor
                  value={userCode}
                  onChange={setUserCode}
                  onShowHints={handleShowHints}
                />
              </div>
              <div className="flex-shrink-0 py-3">
                <button
                  onClick={handleSubmit}
                  disabled={judgeStatus === 'judging' || !isEngineReady}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm text-sm flex items-center justify-center space-x-2"
                >
                  {judgeStatus === 'judging' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>运行中...</span>
                    </>
                  ) : !isEngineReady ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>引擎初始化中...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>运行并提交</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex-grow min-h-0 relative">
                <ResultPanel
                  status={judgeStatus}
                  result={judgeResult}
                  history={submissionHistory[selectedProblem.id] || []}
                />
              </div>
            </div>
          </div>
        </main>
        <HintModal
          isOpen={isHintModalOpen}
          onClose={handleCloseHints}
          hintCode={selectedProblem.starterCode}
        />
      </div>
    </div>
  );
};

export default App;
