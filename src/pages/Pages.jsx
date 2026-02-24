import React from 'react';

const PagePlaceholder = ({ title }) => (
    <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 border-dashed flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-300 mb-4">
                {/* Simple placeholder icon */}
                <div className="w-8 h-8 rounded border-2 border-current" />
            </div>
            <p className="text-slate-500 font-medium">{title} content will be implemented here.</p>
        </div>
    </div>
);

export const Dashboard = () => <PagePlaceholder title="Dashboard" />;
export const Practice = () => <PagePlaceholder title="Practice" />;
export const Assessments = () => <PagePlaceholder title="Assessments" />;
export const Resources = () => <PagePlaceholder title="Resources" />;
export const Profile = () => <PagePlaceholder title="Profile" />;
