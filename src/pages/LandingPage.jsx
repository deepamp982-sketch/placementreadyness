import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Video, BarChart3 } from 'lucide-react';

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-indigo-50 border-b border-indigo-100 py-20 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                        Ace Your <span className="text-primary">Placement</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Practice, assess, and prepare for your dream job with our comprehensive placement readiness platform.
                    </p>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-primary/20 active:scale-95"
                    >
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Code className="w-6 h-6" />}
                        title="Practice Problems"
                        description="Solve data structures and algorithms challenges daily."
                    />
                    <FeatureCard
                        icon={<Video className="w-6 h-6" />}
                        title="Mock Interviews"
                        description="Simulate real-world technical and HR interviews."
                    />
                    <FeatureCard
                        icon={<BarChart3 className="w-6 h-6" />}
                        title="Track Progress"
                        description="Visualize your improvement with detailed analytics."
                    />
                </div>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-12 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-6 text-center text-slate-500">
                    <p>© {new Date().getFullYear()} Placement Prep. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-primary/5 group">
        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);

export default LandingPage;
