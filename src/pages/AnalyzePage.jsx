import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/Dashboard/Card';
import { analyzeJD, saveToHistory } from '../utils/analysisEngine';
import { Search, Briefcase, Building2, FileText, Loader2 } from 'lucide-react';

const AnalyzePage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        role: '',
        jdText: ''
    });
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsAnalyzing(true);

        // Simulate slight delay for "premium" feel
        setTimeout(() => {
            const results = analyzeJD(formData.company, formData.role, formData.jdText);
            saveToHistory(results);
            setIsAnalyzing(false);
            navigate('/results', { state: { analysis: results } });
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">JD Analysis</h1>
                <p className="text-slate-500 mt-1">Extract insights and prepare for your next interview.</p>
            </div>

            <Card className="p-2">
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2">
                            <Search className="text-primary" size={24} />
                            Interview Preparation
                        </CardTitle>
                        <CardDescription>Enter the job details to generate a custom preparation plan.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <Building2 size={16} /> Company Name
                                </label>
                                <input
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    placeholder="e.g. Google, Amazon..."
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <Briefcase size={16} /> Job Role
                                </label>
                                <input
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                    placeholder="e.g. Software Engineer..."
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <FileText size={16} /> Job Description
                            </label>
                            <textarea
                                required
                                rows={10}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                                placeholder="Paste the job description here..."
                                value={formData.jdText}
                                onChange={(e) => setFormData({ ...formData, jdText: e.target.value })}
                            />
                            <p className="text-xs text-slate-400">Pro tip: Include the 'Requirements' and 'Responsibilities' sections for better results.</p>
                        </div>
                    </CardContent>
                    <div className="p-6 border-t border-slate-50">
                        <button
                            disabled={isAnalyzing}
                            type="submit"
                            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 disabled:opacity-70 disabled:scale-100"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 className="animate-spin" size={24} />
                                    Analyzing JD...
                                </>
                            ) : (
                                'Start Analysis'
                            )}
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AnalyzePage;
