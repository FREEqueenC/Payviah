import React from 'react';

const Header = ({ user }) => {
    return (
        <header className="header-container">
            {/* Left Side: Brand Identity */}
            <div className="brand-section">
                {/* Logo Icon with Neon Glow */}
                <div className="logo-box">
                    <span className="logo-text">P</span>
                </div>
                {/* Main Title */}
                <h1 className="brand-title">Payviah</h1>
            </div>

            {/* Right Side: User Profile Zone */}
            <div className="user-zone">
                <div className="user-text-group">
                    <p className="user-label">Verified User</p>
                    <p className="user-name">{user?.name ? user.name.split(' ')[0] : 'Alex'}</p>
                </div>
                {/* Profile Circle with Neon Ring */}
                <div className="profile-ring">
                    <div className="profile-avatar">
                        <span className="profile-initial">
                            {user?.name ? user.name[0].toUpperCase() : 'A'}
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
