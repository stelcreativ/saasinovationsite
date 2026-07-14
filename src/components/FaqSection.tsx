import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const faqs = [
        { q: 'How long does migration take?', a: 'Most standard pipelines can migrate onto our system engine in less than 15 minutes.' },
        { q: 'Can I change my subscription parameter tiers mid-cycle?', a: 'Yes. You can scale your processing clusters up or down instantly at any point.' },
        { q: 'Does the middleware stack support multi-region data compliance?', a: 'Absolutely. You can bind specific data ingestion paths to isolated geographic cluster nodes, fully conforming to localized GDPR, CCPA, and regional jurisdiction frameworks automatically.' },
        { q: 'What data security and encryption standards are enforced?', a: 'All data packets are strictly encrypted both in transit via TLS 1.3 and at rest utilizing AES-256 protocols. We also support end-to-end user cryptographic signature mapping for advanced enterprise pipelines.' },
        { q: 'Is there a rate limit or payload throttling system on the free node?', a: 'Our Starter Node allows up to 5,000 monthly transactions with a bursting ceiling of 50 concurrent hits per second. Higher volume requirements can seamlessly transition to a Growth Cluster instantly.' }
    ];

    return (
        <section id="faq" className="max-w-3xl mx-auto px-6 py-20 border-t border-slate-800/60">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Addressed Inquiries</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-slate-800/30 border border-slate-800 rounded-xl overflow-hidden transition-all">
                        <button
                            type="button"
                            onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center text-sm sm:text-base font-bold text-white focus:outline-none"
                        >
                            <span>{faq.q}</span>
                            <span className="text-blue-400 font-mono">{activeFaq === index ? '−' : '＋'}</span>
                        </button>
                        <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? 'max-h-40 border-t border-slate-800' : 'max-h-0'}`}>
                            <p className="p-6 text-sm text-slate-400 bg-slate-900/40">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};