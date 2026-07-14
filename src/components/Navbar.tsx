import React from 'react';

export const Navbar: React.FC = () => {
    return (
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
                <span className="font-extrabold text-white text-lg tracking-tight">Inovative Saas</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                <a href="#features" className="hover:text-white transition-colors">Engine Features</a>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Metrics</a>
                <a href="#faq" className="hover:text-white transition-colors">Integration FAQ</a>
            </div>
            <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-semibold transition-all border border-slate-700">
                Launch App
            </button>
        </nav>
    );
};