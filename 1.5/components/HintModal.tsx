import React from 'react';

interface HintModalProps {
  isOpen: boolean;
  onClose: () => void;
  hintCode: string;
}

const HintModal: React.FC<HintModalProps> = ({ isOpen, onClose, hintCode }) => {
  const [copied, setCopied] = React.useState(false);
  const [isRevealed, setIsRevealed] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setIsRevealed(false);
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(hintCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-100 animate-scale-in border border-gray-100"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            代码提示
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-1.5 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-100">
            <p className="text-sm text-blue-800 flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              参考代码仅供思路参考，建议先尝试独立解决问题。
            </p>
          </div>

          <div className="relative min-h-[200px] bg-gray-50 rounded-lg border border-gray-200 shadow-inner flex flex-col">
            {!isRevealed ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 backdrop-blur-[2px] z-10 rounded-lg">
                <button
                  onClick={() => setIsRevealed(true)}
                  className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>显示参考代码</span>
                </button>
              </div>
            ) : (
              <div className="absolute top-2 right-2 z-20">
                <button
                  onClick={handleCopy}
                  className={`text-xs px-2 py-1 rounded border transition-colors ${copied
                      ? 'bg-green-100 text-green-700 border-green-200'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                    }`}
                >
                  {copied ? '已复制' : '复制全部'}
                </button>
              </div>
            )}

            <pre className={`p-5 text-sm font-mono overflow-x-auto custom-scrollbar flex-grow transition-all duration-300 ${!isRevealed ? 'opacity-0 blur-sm select-none' : 'opacity-100 text-gray-800'}`}>
              {hintCode}
            </pre>
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};

export default HintModal;
