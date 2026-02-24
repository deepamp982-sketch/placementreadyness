import React from 'react';

const TopBar = ({ projectName, currentStep, totalSteps, status }) => {
    return (
        <nav className="top-bar">
            <div className="brand-name" style={{ fontWeight: 600, fontSize: '18px', letterSpacing: '-0.02em' }}>
                {projectName}
            </div>
            <div className="progress-indicator" style={{ color: '#666', fontSize: '14px', fontWeight: 500 }}>
                Step {currentStep} / {totalSteps}
            </div>
            <div className={`status-badge ${status === 'In Progress' ? 'status-in-progress' : status === 'Shipped' ? 'status-shipped' : 'status-not-started'}`}>
                {status}
            </div>
        </nav>
    );
};

export default TopBar;
