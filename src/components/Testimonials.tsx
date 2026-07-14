import React from 'react';

export const TestimonialTray: React.FC = () => {
    const testimonials = [
        { name: 'Sarah Jenkins', role: 'VP of Infrastructure, CloudScale', quote: 'Inovative Saas dropped our regional pipeline latency down from 45ms to under 6ms in our first deployment cycle.', avatar: 'SJ' },
        { name: 'David Chen', role: 'Principal Architect, DevCore', quote: 'The TypeScript type definitions are perfectly mapped out. Migrating our API structures was seamless.', avatar: 'DC' },
        { name: 'Elena Rostova', role: 'Head of Operations, FinStream', quote: 'The predictive warehousing alerts flagged three major inventory drop risks before they impacted our checkout flows.', avatar: 'ER' },
    ];

    return (
        <section className="py-20 border-t border-slate-800/60 overflow-hidden relative bg-gradient-to-b from-slate-900 via-slate-950/20 to-slate-900">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-2 px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Validated by Infrastructure Engineers</h2>
                <p className="text-sm text-slate-400">See how top engineering squads leverage our middleware node pipelines daily.</p>
            </div>

            <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 sm:before:w-40 before:bg-gradient-to-r before:from-slate-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 sm:after:w-40 after:bg-gradient-to-l after:from-slate-900 after:to-transparent">
                <div className="animate-marquee gap-6 flex whitespace-nowrap">
                    {/* Track loop set 1 */}
                    {testimonials.map((test, index) => (
                        <div key={`track1-${index}`} className="w-[350px] sm:w-[400px] bg-slate-800/30 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between whitespace-normal">
                            <p className="text-sm font-medium text-slate-300 leading-relaxed italic">"{test.quote}"</p>
                            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/50">
                                <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-xs shrink-0">{test.avatar}</div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-white truncate">{test.name}</h4>
                                    <p className="text-[11px] text-slate-500 font-medium truncate">{test.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Mirror track loop set 2 for clean infinite loop animations */}
                    {testimonials.map((test, index) => (
                        <div key={`track2-${index}`} className="w-[350px] sm:w-[400px] bg-slate-800/30 border border-slate-800/80 p-6 rounded-2xl flex flex-col justify-between whitespace-normal">
                            <p className="text-sm font-medium text-slate-300 leading-relaxed italic">"{test.quote}"</p>
                            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-800/50">
                                <div className="w-9 h-9 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-400 text-xs shrink-0">{test.avatar}</div>
                                <div className="min-w-0">
                                    <h4 className="text-sm font-bold text-white truncate">{test.name}</h4>
                                    <p className="text-[11px] text-slate-500 font-medium truncate">{test.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};