import React from 'react';
import ParticleBackground from './ParticleBackground';

interface AuthSuccessPageProps {
    username?: string | null;
    onEnterApp: () => void;
}

const AuthSuccessPage: React.FC<AuthSuccessPageProps> = ({ username, onEnterApp }) => {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 font-sans">
            <ParticleBackground />

            <div className="relative z-10 text-center px-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-12 transform transition-all duration-500 hover:scale-105 max-w-lg mx-auto">
                    <div className="mb-8">
                        <div className="w-20 h-20 bg-green-500 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-green-500/30 mb-6 animate-bounce">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">登录成功</h2>
                        <p className="text-blue-100 text-lg">
                            欢迎回来, <span className="font-semibold text-white">{username || '用户'}</span>
                        </p>
                    </div>

                    <button
                        onClick={onEnterApp}
                        className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                        开始编程之旅
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AuthSuccessPage;
