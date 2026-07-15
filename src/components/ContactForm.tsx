import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, ShieldAlert } from 'lucide-react';
import axios from 'axios';

export const ContactForm: React.FC = () => {
    // 1. Local Input State Management
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // 2. HubSpot Endpoint Parameters (Replace these placeholders with your real IDs)
    const HUBSPOT_PORTAL_ID = 'YOUR_HUBSPOT_PORTAL_ID';
    const HUBSPOT_FORM_ID = 'YOUR_HUBSPOT_FORM_ID';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        // 3. Format payload strictly into the HubSpot API schema structure
        const payload = {
            fields: [
                { name: 'firstname', value: formData.firstName },
                { name: 'lastname', value: formData.lastName },
                { name: 'email', value: formData.email },
                { name: 'company', value: formData.company },
                { name: 'message', value: formData.message }
            ],
            context: {
                pageUri: window.location.href,
                pageName: document.title
            }
        };

        try {
            // 4. Dispatch AJAX tracking post directly to HubSpot's global submission node
            await
                axios.post
                    (
                        `https://hsforms.com${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
                        payload,
                        { headers: { 'Content-Type': 'application/json' } }
                    );

            setStatus('success');
            setFormData({ firstName: '', lastName: '', email: '', company: '', message: '' });
        } catch (error: any) {
            console.error('HubSpot integration pipeline error:', error);
            setErrorMessage(error.response?.data?.message || 'Transmission failed. Please verify API parameters.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="max-w-2xl mx-auto px-6 py-20 border-t border-slate-800/60 relative">
            <div className="text-center space-y-2 mb-10">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold tracking-wide uppercase">
                    Enterprise Integration
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Request API Node Access</h2>
                <p className="text-sm text-slate-400">Submit your parameters to synchronize your dashboard infrastructure.</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl shadow-xl">
                {status === 'success' ? (
                    <div className="py-8 text-center space-y-3 animate-fade-in">
                        <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-6 h-6" />
                        </div>
                        <h4 className="text-base font-bold text-white">Credentials Logged Successfully</h4>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                            Your profile has bypassed verification and synchronized natively with our HubSpot routing core. An engineer will dispatch security clearance keys shortly.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 text-left font-sans">
                        {status === 'error' && (
                            <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-xs text-red-400 rounded-xl flex items-center gap-2.5">
                                <ShieldAlert className="w-4 h-4 shrink-0" />
                                <span>{errorMessage}</span>
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">First Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-medium transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Last Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-medium transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Corporate Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-medium transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Company Name</label>
                            <input
                                type="text"
                                required
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-medium transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[10px] tracking-widest uppercase font-bold text-slate-400">Infrastructure Notes</label>
                            <textarea
                                rows={4}
                                required
                                placeholder="Describe your active data payload volume limits..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-blue-500 font-medium transition-colors resize-none placeholder-slate-700 leading-relaxed"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 text-white font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg shadow-blue-600/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                    <span>Syncing HubSpot Node...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-3.5 h-3.5" />
                                    <span>Initialize Connection Pipeline</span>
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};