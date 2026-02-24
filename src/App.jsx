import React, { useState } from 'react';
import './index.css';
import TopBar from './components/Layout/TopBar';
import ContextHeader from './components/Layout/ContextHeader';
import SecondaryPanel from './components/Layout/SecondaryPanel';
import ProofFooter from './components/Layout/ProofFooter';
import Card from './components/Card';
import Button from './components/Button';

function App() {
  const [status, setStatus] = useState('In Progress');
  const [step, setStep] = useState(1);

  const checklistItems = ['UI Built', 'Logic Working', 'Test Passed', 'Deployed'];

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <TopBar
        projectName="KodNest Premium Build System"
        currentStep={step}
        totalSteps={4}
        status={status}
      />

      <ContextHeader
        title="Foundation Setup"
        subtext="Initialize the core structural elements of your premium SaaS application."
      />

      <main className="workspace-container" style={{ flex: 1 }}>
        <section className="primary-workspace">
          <div style={{ maxWidth: '800px' }}>
            <Card title="Configuration Details" className="mb-24">
              <div className="flex-column gap-24">
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>Project Name</label>
                  <input type="text" placeholder="e.g. KodNest Dashboard" defaultValue="KodNest Premium" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>System Description</label>
                  <textarea rows="4" placeholder="Briefly describe the purpose of this project..." defaultValue="A high-performance build system for premium B2C SaaS products."></textarea>
                </div>
                <div className="flex gap-16">
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="secondary">Cancel</Button>
                </div>
              </div>
            </Card>

            <Card style={{ marginTop: 'var(--space-40)' }}>
              <h3 style={{ fontSize: '20px', marginBottom: 'var(--space-16)' }}>System Health</h3>
              <p style={{ fontSize: '15px', color: '#444' }}>All systems are currently operational. No issues detected in the build pipeline. The environment is stable and ready for deployment.</p>
              <div className="flex gap-8 items-center" style={{ color: 'var(--success-color)', fontWeight: 600, fontSize: '14px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success-color)' }}></span>
                Connected to Build Engine
              </div>
            </Card>
          </div>
        </section>

        <SecondaryPanel
          stepExplanation="Follow these steps to initialize your project. You will need to provide proof for each stage of the build process in the footer below. Ensure all configurations are double-checked before proceeding."
          promptText="npm install kodnest-premium-core"
          onCopy={() => navigator.clipboard.writeText('npm install kodnest-premium-core')}
        />
      </main>

      <div style={{ height: '80px' }}></div> {/* Spacer for footer */}
      <ProofFooter
        checklist={checklistItems}
        onFinalize={() => setStatus('Shipped')}
        onClear={() => console.log('Proofs cleared')}
      />
    </div>
  );
}

export default App;
