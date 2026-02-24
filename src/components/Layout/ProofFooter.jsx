import React from 'react';
import Button from '../Button';

const ProofFooter = ({ checklist = [], onFinalize, onClear }) => {
    return (
        <footer className="proof-footer">
            <div className="flex items-center">
                {checklist.map((item, index) => (
                    <div key={index} className="checklist-item">
                        <input type="checkbox" id={`proof-${index}`} />
                        <label htmlFor={`proof-${index}`} style={{ cursor: 'pointer', fontWeight: 500 }}>{item}</label>
                    </div>
                ))}
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 'var(--space-16)' }}>
                <Button variant="secondary" onClick={onClear} style={{ padding: '8px 24px', fontSize: '14px' }}>
                    Clear Proofs
                </Button>
                <Button variant="primary" onClick={onFinalize} style={{ padding: '8px 64px', fontSize: '14px' }}>
                    Finalize Build
                </Button>
            </div>
        </footer>
    );
};

export default ProofFooter;
