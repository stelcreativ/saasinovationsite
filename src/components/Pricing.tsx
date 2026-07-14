import React, { useState } from 'react';

export const Pricing: React.FC = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const plans = [
        { name: 'Starter Node', monthlyPrice: 29, yearlyPrice: 19, features: ['Up to 5,000 requests/mo', 'Basic data visualization', 'Standard support response'] },
        { name: 'Growth Cluster', monthlyPrice: 79, yearlyPrice: 59, features: ['Up to 50,000 requests/mo', 'Advanced metric wheels', 'Priority 1-hour response', 'Custom webhooks'], popular: true },
        { name: 'Enterprise Core', monthlyPrice: 149, yearlyPrice: 119, features: ['Unlimited request volume', 'Full white-label settings', 'Dedicated engineer pod', '99.99% uptime SLA'] },
    ];

    return (
        <section id="pricing" className="max-w-7xl mx-auto px-6 py-20 border-t border-slate-800/60 bg-slate-950/30 rounded-3xl">
            <div className="text-center max-w-xl mx-auto mb-12 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Resource Modeling Pricing</h2>
                <div className="inline-flex items-center bg-slate-800 p-1 rounded-xl border border-slate-700">
                    <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${billingCycle === 'monthly' ? 'bg-blue-600 text-white shadow' : 'text-slate-400'}`}>Monthly</button>
                    <button onClick={() => setBillingCycle('yearly')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${billingCycle === 'yearly' ? 'bg-blue-600 text-white shadow' : 'text-slate-400'}`}>Yearly (Save 20%)</button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {plans.map((plan, i) => (
                    <div key={i} className={`bg-slate-900/80 border p-8 rounded-2xl flex flex-col justify-between relative ${plan.popular ? 'border-blue-500 ring-4 ring-blue-500/10' : 'border-slate-800'}`}>
                        <div>
                            <h4 className="text-base font-bold text-slate-200 mb-4">{plan.name}</h4>
                            <p className="text-4xl font-black text-white">${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</p>
                            <ul className="space-y-3 pt-6 mt-6 border-t border-slate-800">
                                {plan.features.map((f, idx) => (
                                    <li key={idx} className="text-sm text-slate-300 flex items-center gap-2"><span className="text-blue-500">✓</span> {f}</li>
                                ))}
                            </ul>
                        </div>
                        <button className={`w-full mt-8 py-3 rounded-xl font-bold text-sm ${plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-200'}`}>Provision Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
};