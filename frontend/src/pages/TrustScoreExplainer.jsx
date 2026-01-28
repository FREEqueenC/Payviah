import { Link } from 'react-router-dom';
import Header from '../components/Header';

const TrustScoreExplainer = () => {
    return (
        <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
            <Header user={{ name: 'Community Member' }} />

            {/* Back Button */}
            <Link
                to="/"
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--color-primary-light)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    marginBottom: '2rem',
                    transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
                ← Back to Dashboard
            </Link>

            {/* Hero Section */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '1rem',
                    background: 'linear-gradient(to right, #4ade80, #22c55e)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>
                    Understanding Your Trust Score
                </h1>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '1.1rem',
                    maxWidth: '600px',
                    margin: '0 auto',
                    lineHeight: '1.6'
                }}>
                    Your trust score reflects your commitment to the community—not your credit history.
                </p>
            </div>

            {/* What is it? */}
            <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>
                    What is a Trust Score?
                </h2>
                <p style={{ color: 'var(--color-text-main)', lineHeight: '1.7', marginBottom: '1rem' }}>
                    A Trust Score is a community-based measure of reliability that grows as you:
                </p>
                <ul style={{
                    color: 'var(--color-text-main)',
                    lineHeight: '1.8',
                    paddingLeft: '1.5rem',
                    marginBottom: '1rem'
                }}>
                    <li>Make timely payments on essential purchases</li>
                    <li>Communicate proactively when life gets complicated</li>
                    <li>Build a consistent history of meeting commitments</li>
                    <li>Support others in the network through your reliability</li>
                </ul>
                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem',
                    fontStyle: 'italic',
                    padding: '1rem',
                    background: 'rgba(74, 222, 128, 0.05)',
                    borderRadius: '8px',
                    borderLeft: '3px solid var(--color-primary-light)'
                }}>
                    <strong>Important:</strong> Your traditional credit score doesn't matter here.
                    We believe in second chances and forward progress.
                </p>
            </div>

            {/* How it's Calculated */}
            <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary-light)' }}>
                    How It's Calculated
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Essential Spend */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-secondary)',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{
                                background: 'var(--color-primary-light)',
                                color: '#040d0a',
                                borderRadius: '50%',
                                width: '1.5rem',
                                height: '1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>1</span>
                            Essential Spend
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', marginLeft: '2rem', lineHeight: '1.6' }}>
                            Purchases for necessities like childcare, auto repairs, and essential services build trust faster.
                        </p>
                    </div>

                    {/* Verified History */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-secondary)',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{
                                background: 'var(--color-primary-light)',
                                color: '#040d0a',
                                borderRadius: '50%',
                                width: '1.5rem',
                                height: '1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>2</span>
                            Verified History
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', marginLeft: '2rem', lineHeight: '1.6' }}>
                            Your track record of completing payments demonstrates consistency over time.
                        </p>
                    </div>

                    {/* Communication Score */}
                    <div>
                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-secondary)',
                            marginBottom: '0.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <span style={{
                                background: 'var(--color-primary-light)',
                                color: '#040d0a',
                                borderRadius: '50%',
                                width: '1.5rem',
                                height: '1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                            }}>3</span>
                            Communication Score
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', marginLeft: '2rem', lineHeight: '1.6' }}>
                            Reaching out when you need grace, responding to reminders, and staying engaged with the community.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why It Matters */}
            <div className="glass-panel" style={{ marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>
                    Why Your Score Matters
                </h2>
                <div style={{
                    display: 'grid',
                    gap: '1rem',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
                }}>
                    <div style={{
                        padding: '1rem',
                        background: 'rgba(74, 222, 128, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(74, 222, 128, 0.2)'
                    }}>
                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>
                            Higher Limits
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            As your score grows, you unlock larger advance amounts for life's bigger expenses.
                        </p>
                    </div>
                    <div style={{
                        padding: '1rem',
                        background: 'rgba(74, 222, 128, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(74, 222, 128, 0.2)'
                    }}>
                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>
                            Faster Approvals
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            Trusted members get instant decisions on new requests.
                        </p>
                    </div>
                    <div style={{
                        padding: '1rem',
                        background: 'rgba(74, 222, 128, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(74, 222, 128, 0.2)'
                    }}>
                        <h4 style={{ color: 'var(--color-primary-light)', marginBottom: '0.5rem' }}>
                            Community Support
                        </h4>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                            Your reliability helps others access the support they need.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA to go back */}
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default TrustScoreExplainer;
