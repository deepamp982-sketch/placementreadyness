import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Dashboard/Card';
import { getHistory } from '../utils/analysisEngine';
import { Search, Clock, ChevronRight, Briefcase, Building2 } from 'lucide-react';

const HistoryPage = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setHistory(getHistory());
    }, []);

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Analysis History</h1>
                <p className="text-slate-500 mt-1">Review your past JD analyses and preparation plans.</p>
            </div>

            {history.length === 0 ? (
                <Card className="flex flex-col items-center justify-center p-20 text-center border-dashed border-2">
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                        <Clock size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">No History Yet</h3>
                    <p className="text-slate-500 max-w-xs mt-2">Start by analyzing a job description to see your history here.</p>
                    <button
                        onClick={() => navigate('/assessments')}
                        className="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-indigo-700 transition-all"
                    >
                        Analyze Now
                    </button>
                </Card>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <Card
                            key={item.id}
                            className="cursor-pointer group hover:border-primary/30 transition-all"
                            onClick={() => navigate('/results', { state: { analysis: item } })}
                        >
                            <CardContent className="flex items-center justify-between p-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex flex-col items-center justify-center text-primary font-black shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="text-lg">{item.readinessScore}</span>
                                        <span className="text-[10px] uppercase -mt-1">%</span>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center gap-2">
                                            {item.role}
                                        </h3>
                                        <div className="flex items-center gap-4 text-slate-500 text-sm mt-1">
                                            <span className="flex items-center gap-1"><Building2 size={14} /> {item.company}</span>
                                            <span className="flex items-center gap-1"><Clock size={14} /> {new Date(item.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-slate-300 group-hover:text-primary transition-colors">
                                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">View Analysis</span>
                                    <ChevronRight size={20} />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
