import React from 'react';

const Card = ({ children, title, subtitle, className = '', style, ...props }) => {
    return (
        <div className={`card ${className}`} style={style} {...props}>
            {title && <h3 style={{ fontSize: '20px', marginBottom: 'var(--space-8)' }}>{title}</h3>}
            {subtitle && <p style={{ fontSize: '14px', color: '#666', marginBottom: 'var(--space-24)' }}>{subtitle}</p>}
            {children}
        </div>
    );
};

export default Card;
