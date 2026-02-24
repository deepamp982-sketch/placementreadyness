import React from 'react';

const ContextHeader = ({ title, subtext }) => {
    return (
        <header className="context-header">
            <div className="container">
                <h1>{title}</h1>
                <p style={{ margin: 0, color: '#666', fontSize: '18px' }}>{subtext}</p>
            </div>
        </header>
    );
};

export default ContextHeader;
