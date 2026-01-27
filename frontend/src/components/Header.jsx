import React from 'react';

const Header = ({ user }) => {
    return (
        <header style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.5rem 0', // Aligned with container
            background: 'transparent',
            marginBottom: '2rem'
        }}>
            {/* Left Side: Brand Identity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    backgroundColor: '#4ade80',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 15px rgba(74,222,128,0.4)'
                }}>
                    <span style={{ color: '#040d0a', fontWeight: 'bold', fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>N</span>
                </div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-0.025em', color: 'white', fontFamily: 'var(--font-heading)' }}>Nexum</h1>
            </div>

            {/* Right Side: User Profile Zone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Welcome back</p>
                    <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#4ade80', margin: 0 }}>{user?.name.split(' ')[0] || 'Member'}</p>
                </div>
                <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    border: '2px solid #4ade80',
                    padding: '2px',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'linear-gradient(to bottom right, #374151, #111827)',
                    }} />
                </div>
            </div>
        </header>
    );
};

export default Header;
