import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TrustScoreExplainer from './pages/TrustScoreExplainer';

function App() {
  return (
    <Router>
      <div className="app-layout">
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trust-score-explainer" element={<TrustScoreExplainer />} />
          </Routes>
        </main>

        {/* Footer with Parent Company & Contact Info */}
        <footer style={{
          textAlign: 'center',
          padding: '2rem',
          marginTop: 'auto',
          color: 'var(--color-text-muted)',
          fontSize: '0.875rem',
          borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            Payviah is a service of <strong>ANW Foundations</strong>
          </p>
          <p style={{ marginBottom: '0.5rem' }}>
            <a href="https://anwfoundations.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary-light)', textDecoration: 'none' }}>
              anwfoundations.com
            </a>
          </p>
          <p>
            Contact: <a href="mailto:ashleighwalker@anwfoundations.com" style={{ color: 'var(--color-text-main)', textDecoration: 'underline' }}>ashleighwalker@anwfoundations.com</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
