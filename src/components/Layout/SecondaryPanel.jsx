import React from 'react';
import Button from '../Button';

const SecondaryPanel = ({ stepExplanation, promptText, onCopy }) => {
    return (
        <aside className="secondary-panel">
            <div className="flex-column gap-24">
                <div>
                    <h3 style={{ fontSize: '18px', marginBottom: 'var(--space-16)' }}>Instructions</h3>
                    <p style={{ fontSize: '15px', color: '#444', lineHeight: '1.7' }}>
                        {stepExplanation}
                    </p>
                </div>

                <div>
                    <label style={{ display: 'block', marginBottom: 'var(--space-8)', fontSize: '14px', fontWeight: 600 }}>
                        Active Prompt
                    </label>
                    <div className="prompt-box">
                        {promptText}
                    </div>
                    <div className="flex flex-column gap-8">
                        <Button variant="secondary" onClick={onCopy} style={{ width: '100%' }}>Copy Prompt</Button>
                        <Button variant="primary" style={{ width: '100%' }}>Build in Lovable</Button>
                    </div>
                </div>

                <div className="flex-column gap-8" style={{ marginTop: 'var(--space-16)' }}>
                    <Button variant="secondary" style={{ width: '100%' }}>It Worked</Button>
                    <Button variant="secondary" style={{ width: '100%' }}>Error Encountered</Button>
                    <Button variant="secondary" style={{ width: '100%' }}>Add Screenshot</Button>
                </div>
            </div>
        </aside>
    );
};

export default SecondaryPanel;
