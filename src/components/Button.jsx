import React from 'react';

const Button = ({ variant = 'primary', children, onClick, style, className = '', ...props }) => {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
    return (
        <button
            className={`${baseClass} ${className}`}
            onClick={onClick}
            style={style}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
