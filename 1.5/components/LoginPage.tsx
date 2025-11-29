import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';

interface LoginPageProps {
    onLogin: (username: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [existingUsers, setExistingUsers] = useState<string[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    const [showAllUsers, setShowAllUsers] = useState(false);

    useEffect(() => {
        try {
            const users = localStorage.getItem('oj_users');
            if (users) {
                setExistingUsers(JSON.parse(users));
            }
        } catch (e) {
            console.error('Failed to load users', e);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            onLogin(username.trim());
        }
    };

    const handleUserClick = (user: string) => {
        onLogin(user);
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 font-sans">
            <ParticleBackground />

            <div className="absolute top-0 left-0 w-full bg-amber-500/90 text-white px-4 py-3 text-center z-50 backdrop-blur-md shadow-lg border-b border-amber-400/30">
                <div className="flex items-center justify-center space-x-2 container mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-sm tracking-wide text-shadow-sm">
                        您的帐号记录了您的做题记录，请勿随意登录他人账号以及频繁添加账号
                    </span>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-md px-6">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-[1.01]">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">欢迎回来</h2>
                        <p className="text-blue-200 text-sm">请输入您的名字以开始练习</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative group">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                placeholder="您的名字 / 昵称"
                                className="w-full bg-black/20 border border-white/10 text-white placeholder-gray-400 rounded-xl px-5 py-4 outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                            />
                            <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${isFocused || username ? 'w-full' : 'w-0'}`} />
                        </div>

                        <button
                            type="submit"
                            disabled={!username.trim()}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-600/30 transform transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        >
                            进入系统
                        </button>
                    </form>

                    {existingUsers.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <div className="flex justify-between items-center mb-3">
                                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                                    {showAllUsers ? '所有注册账号' : '最近使用的账号'}
                                </p>
                                {existingUsers.length > 5 && (
                                    <button
                                        onClick={() => setShowAllUsers(!showAllUsers)}
                                        className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        {showAllUsers ? '收起' : '查看所有'}
                                    </button>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar">
                                {(showAllUsers ? existingUsers : existingUsers.slice(0, 5)).map(user => (
                                    <button
                                        key={user}
                                        onClick={() => handleUserClick(user)}
                                        className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 transition-colors duration-200 flex items-center space-x-2 group"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500 group-hover:animate-pulse" />
                                        <span>{user}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-500 text-xs">
                        Online Judge Local • v1.6
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
