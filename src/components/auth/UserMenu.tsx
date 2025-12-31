// UserMenu - User dropdown menu in Zine style
import { useState, useRef, useEffect } from 'react';
import { ZineText, HandDrawnFrame } from '../ui/ZineUI';
import type { User } from '../../hooks/useAuth';

interface UserMenuProps {
  user: User;
  onLogout: () => void;
  t: (key: string) => string;
}

export function UserMenu({ user, onLogout, t }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get initials
  const getInitials = () => {
    if (user.name) {
      return user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return user.email[0].toUpperCase();
  };

  return (
    <div ref={menuRef} style={{ position: 'relative' }}>
      {/* Avatar button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid #2D2A26',
          background: '#FAF7F2',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Caveat', cursive",
          fontSize: '16px',
          color: '#2D2A26',
          fontWeight: 'bold',
        }}
      >
        {getInitials()}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <HandDrawnFrame
          style={{
            position: 'absolute',
            top: '44px',
            right: 0,
            background: '#FAF7F2',
            padding: '12px 16px',
            minWidth: '180px',
            zIndex: 100,
          }}
        >
          {/* User info */}
          <div style={{ marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px dashed #C4C0B9' }}>
            {user.name && (
              <ZineText size="md" style={{ display: 'block', fontWeight: 'bold' }}>
                {user.name}
              </ZineText>
            )}
            <ZineText size="sm" style={{ color: '#8B857C' }}>
              {user.email}
            </ZineText>
          </div>

          {/* Cloud sync indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
            paddingBottom: '12px',
            borderBottom: '1px dashed #C4C0B9'
          }}>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M5 14 Q2 14 2 11 Q2 8 5 8 Q6 5 10 5 Q14 5 15 8 Q18 8 18 11 Q18 14 15 14 L5 14" stroke="#8B857C" strokeWidth="1.2" fill="none"/>
              <path d="M8 11 L10 13 L14 9" stroke="#8B857C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <ZineText size="sm" style={{ color: '#8B857C' }}>
              {t('auth.syncedChats')}
            </ZineText>
          </div>

          {/* Logout button */}
          <button
            onClick={() => {
              onLogout();
              setIsOpen(false);
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: "'Caveat', cursive",
              fontSize: '16px',
              color: '#C44',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M8 4 L4 4 L4 16 L8 16" stroke="#C44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 7 L16 10 L12 13 M7 10 L16 10" stroke="#C44" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {t('auth.logout')}
          </button>
        </HandDrawnFrame>
      )}
    </div>
  );
}

// Login button for non-authenticated users
interface LoginButtonProps {
  onClick: () => void;
  t: (key: string) => string;
}

export function LoginButton({ onClick, t }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        padding: '8px 14px',
        background: 'none',
        border: '1.5px solid #2D2A26',
        borderRadius: '20px',
        cursor: 'pointer',
        fontFamily: "'Caveat', cursive",
        fontSize: '15px',
        color: '#2D2A26',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="6" r="4" stroke="#2D2A26" strokeWidth="1.5" fill="none"/>
        <path d="M3 18 Q3 12 10 12 Q17 12 17 18" stroke="#2D2A26" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
      {t('auth.login')}
    </button>
  );
}

export default UserMenu;
