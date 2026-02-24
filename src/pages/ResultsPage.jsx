import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '../components/Dashboard/Card';
import {
    Trophy,
    Calendar,
    CheckCircle2,
    HelpCircle,
    ArrowLeft,
    LayoutGrid,
    Zap
} from 'lucide-react';

const ResultsPage = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const analysis = state?.analysis;

    if (!analysis) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] space-y-4">
                <div className="p-4 bg-slate-100 rounded-full text-slate-400">
                    <Zap size={48} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">No analysis found</h2>
                <button
                    onClick={() => navigate('/assessments')}
                    className="text-primary font-bold hover:underline"
                >
                    Go back to Analyze
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header & Score */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="space-y-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium"
                    >
                        <ArrowLeft size={18} /> Back
                    </button>
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Analysis Results</h1>
                        <p className="text-xl text-slate-500 mt-2">
                            For <span className="text-slate-900 font-bold">{analysis.role}</span> at <span className="text-primary font-bold">{analysis.company}</span>
                        </p>
                    </div>
                </div>

                <Card className="w-full lg:w-72 p-6 flex flex-col items-center bg-indigo-50/30 border-primary/10">
                    <div className="relative flex items-center justify-center w-32 h-32">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="64" cy="64" r="58" className="stroke-slate-100 fill-none" strokeWidth="8" />
                            <circle
                                cx="64" cy="64" r="58"
                                className="stroke-primary fill-none transition-all duration-1000 ease-out"
                                strokeWidth="8"
                                strokeDasharray={364.4}
                                strokeDashoffset={364.4 - (analysis.readinessScore / 100) * 364.4}
                                strokeLinecap="round"
                            />
                        </svg>
                        <span className="absolute text-3xl font-black text-slate-900">{analysis.readinessScore}%</span>
                    </div>
                    <p className="mt-4 font-bold text-slate-900">Readiness Score</p>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Skills & Checklist */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Skills Extraction */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <LayoutGrid size={20} className="text-primary" />
                                Key Skills Extracted
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {analysis.allDetectedSkills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-indigo-50 text-primary border border-primary/10 rounded-lg text-sm font-bold">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Round-wise Prep Checklist */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Trophy size={20} className="text-primary" />
                                Preparation Checklist
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {analysis.checklist.map((round, i) => (
                                <div key={i} className="space-y-3">
                                    <h4 className="font-bold text-slate-900 border-b border-slate-100 pb-2">{round.round}</h4>
                                    <ul className="space-y-2">
                                        {round.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle2 size={16} className="text-indigo-200 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Likely Interview Questions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle size={20} className="text-primary" />
                                10 Likely Interview Questions
                            </CardTitle>
                            <CardDescription>Based on detected skills and company profile.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {analysis.questions.map((q, i) => (
                                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/20 transition-colors">
                                    <span className="text-xs font-bold text-primary mb-1 block">Question {i + 1}</span>
                                    <p className="text-slate-900 font-medium">{q}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: 7-day Plan */}
                <div className="space-y-8">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar size={20} className="text-primary" />
                                7-Day Action Plan
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {analysis.plan.map((day, i) => (
                                <div key={i} className="relative pl-6 border-l-2 border-indigo-100 pb-2">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-primary" />
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{day.days}</span>
                                    <h4 className="font-bold text-slate-900 mt-1">{day.task}</h4>
                                    <p className="text-sm text-slate-600 mt-1">{day.details}</p>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter>
                            <p className="text-xs text-slate-400 text-center w-full italic">Customize this plan based on your current comfort level.</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ResultsPage;
