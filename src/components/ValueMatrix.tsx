import React from 'react';

export const ValueMatrix: React.FC = () => {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12 relative border-t border-slate-800/40">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-slate-950/40 border border-slate-800/80 p-8 rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-slate-800/60 shadow-xl">

                <div className="flex flex-col items-center justify-center text-center p-4 group">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 group-hover:scale-105 transition-transform duration-300">
                        300+
                    </span>
                    <span className="text-xs font-bold tracking-[0.15em] text-blue-400 uppercase mt-2">
                        Global Scale Clients
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium max-w-[180px] mt-1">
                        Enterprise nodes active across multi-regional cloud zones.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-4 group">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 group-hover:scale-105 transition-transform duration-300">
                        99.99%
                    </span>
                    <span className="text-xs font-bold tracking-[0.15em] text-indigo-400 uppercase mt-2">
                        Uptime Availability
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium max-w-[180px] mt-1">
                        Guaranteed processing throughput backed by native SLA clusters.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center text-center p-4 group">
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-200 group-hover:scale-105 transition-transform duration-300">
                        &lt; 5.2ms
                    </span>
                    <span className="text-xs font-bold tracking-[0.15em] text-purple-400 uppercase mt-2">
                        Ingestion Velocity
                    </span>
                    <p className="text-[11px] text-slate-500 font-medium max-w-[180px] mt-1">
                        Sub-millisecond data query loops optimized via modern Vite caches.
                    </p>
                </div>

            </div>
        </section>
    );
};