import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
    LayoutDashboard,
    Code2,
    ClipboardCheck,
    Library,
    UserCircle,
    Menu,
    Bell
} from 'lucide-react';

const AppShell = () => {
    const navItems = [
        { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { to: '/practice', label: 'Practice', icon: <Code2 size={20} /> },
        { to: '/assessments', label: 'Assessments', icon: <ClipboardCheck size={20} /> },
        { to: '/resources', label: 'Resources', icon: <Library size={20} /> },
        { to: '/profile', label: 'Profile', icon: <UserCircle size={20} /> },
    ];

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-indigo-50">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                            <Code2 size={20} />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">Placement Prep</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                ${isActive
                                    ? 'bg-indigo-50 text-primary shadow-sm'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
              `}
                        >
                            {item.icon}
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
                    <div className="flex items-center gap-4 text-slate-500">
                        <Menu className="md:hidden cursor-pointer" />
                        <h2 className="text-sm font-semibold tracking-widest uppercase">Overview</h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <Bell size={20} className="text-slate-400 cursor-pointer hover:text-slate-600" />
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-slate-900">Deepa M</p>
                                <p className="text-xs text-slate-500">Free Account</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm flex items-center justify-center text-primary overflow-hidden">
                                <UserCircle size={24} />
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dynamic Page Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppShell;
