import React from 'react';

export const Card = ({ children, className = "" }) => (
    <div className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${className}`}>
        {children}
    </div>
);

export const CardHeader = ({ children, className = "" }) => (
    <div className={`px-6 py-5 border-b border-slate-50 ${className}`}>
        {children}
    </div>
);

export const CardTitle = ({ children, className = "" }) => (
    <h3 className={`font-bold text-slate-900 ${className}`}>
        {children}
    </h3>
);

export const CardDescription = ({ children, className = "" }) => (
    <p className={`text-sm text-slate-500 mt-1 ${className}`}>
        {children}
    </p>
);

export const CardContent = ({ children, className = "" }) => (
    <div className={`px-6 py-5 ${className}`}>
        {children}
    </div>
);

export const CardFooter = ({ children, className = "" }) => (
    <div className={`px-6 py-4 border-t border-slate-50 bg-slate-50/50 ${className}`}>
        {children}
    </div>
);
