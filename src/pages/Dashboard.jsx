import React from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../components/Dashboard/Card';
import { ArrowRight, Calendar, CheckCircle2, Circle } from 'lucide-react';

// 1. Overall Readiness Component
const OverallReadiness = ({ score = 72 }) => {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <Card className="flex flex-col items-center justify-center py-10">
            <CardHeader className="border-none pb-2 text-center">
                <CardTitle className="text-lg">Overall Readiness</CardTitle>
            </CardHeader>
            <div className="relative flex items-center justify-center w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        className="stroke-slate-100 fill-none"
                        strokeWidth="12"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx="96"
                        cy="96"
                        r={radius}
                        className="stroke-primary fill-none transition-all duration-1000 ease-out"
                        strokeWidth="12"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-5xl font-black text-slate-900 leading-none">{score}</span>
                    <span className="text-slate-400 text-sm font-medium mt-1">/ 100</span>
                </div>
            </div>
            <p className="text-slate-500 font-medium mt-4">Readiness Score</p>
        </Card>
    );
};

// 2. Skill Breakdown Component
const SkillBreakdown = () => {
    const data = [
        { subject: 'DSA', A: 75, fullMark: 100 },
        { subject: 'System Design', A: 60, fullMark: 100 },
        { subject: 'Communication', A: 80, fullMark: 100 },
        { subject: 'Resume', A: 85, fullMark: 100 },
        { subject: 'Aptitude', A: 70, fullMark: 100 },
    ];

    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Skill Breakdown</CardTitle>
                <CardDescription>Performance across key areas</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px] pt-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="#e2e8f0" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                        <Radar
                            name="Student"
                            dataKey="A"
                            stroke="hsl(245, 58%, 51%)"
                            fill="hsl(245, 58%, 51%)"
                            fillOpacity={0.2}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

// 3. Continue Practice Component
const ContinuePractice = () => (
    <Card>
        <CardHeader>
            <CardTitle>Continue Practice</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="font-bold text-slate-900">Dynamic Programming</span>
                        <span className="text-slate-500 text-sm">3/10 completed</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[30%]"></div>
                    </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors">
                    Continue <ArrowRight size={18} />
                </button>
            </div>
        </CardContent>
    </Card>
);

// 4. Weekly Goals Component
const WeeklyGoals = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const activeDays = [true, true, true, false, false, false, false];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Goals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-slate-600 text-sm">Problems Solved</span>
                            <span className="font-bold text-primary">12/20 this week</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-primary h-2 rounded-full w-[60%]"></div>
                        </div>
                    </div>

                    <div className="flex justify-between px-2">
                        {days.map((day, i) => (
                            <div key={i} className="flex flex-col items-center gap-2">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeDays[i] ? 'bg-indigo-100 text-primary' : 'bg-slate-50 text-slate-300'}`}>
                                    {activeDays[i] ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400">{day}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

// 5. Upcoming Assessments Component
const UpcomingAssessments = () => {
    const assessments = [
        { title: 'DSA Mock Test', time: 'Tomorrow, 10:00 AM' },
        { title: 'System Design Review', time: 'Wed, 2:00 PM' },
        { title: 'HR Interview Prep', time: 'Friday, 11:00 AM' },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Assessments</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {assessments.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-indigo-50/50 transition-colors cursor-pointer group">
                        <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                            <Calendar size={20} />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                            <p className="text-xs text-slate-500">{item.time}</p>
                        </div>
                        <ArrowRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

const Dashboard = () => {
    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">Placement Dashboard</h1>
                    <p className="text-slate-500 mt-1">Welcome back, Deepa! Here's your readiness status.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:contents">
                        <div className="lg:hidden">
                            <OverallReadiness />
                        </div>
                        <SkillBreakdown />
                    </div>
                    <UpcomingAssessments />
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <div className="hidden lg:block">
                        <OverallReadiness />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        <ContinuePractice />
                        <WeeklyGoals />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
