// AuthModal - Login/Register modal in Zine style (fullscreen on mobile)
import { useState, useEffect } from 'react';
import { ZineText, HandDrawnFrame } from '../ui/ZineUI';
import { GustoLogo } from '../ui/GustoLogo';

// Hook per rilevare mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  onRegister: (email: string, password: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  t: (key: string) => string;
}

type Mode = 'login' | 'register';

export function AuthModal({ isOpen, onClose, onLogin, onRegister, t }: AuthModalProps) {
  const isMobile = useIsMobile();
  const [mode, setMode] = useState<Mode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      let result: { success: boolean; error?: string };

      if (mode === 'login') {
        result = await onLogin(email, password);
      } else {
        result = await onRegister(email, password, name || undefined);
      }

      if (result.success) {
        // Reset form and close
        setEmail('');
        setPassword('');
        setName('');
        onClose();
      } else {
        setError(result.error || 'Errore sconosciuto');
      }
    } catch {
      setError('Errore di connessione');
    } finally {
      setIsLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
    setError('');
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 0',
    border: 'none',
    borderBottom: '1.5px dashed #C4C0B9',
    background: 'transparent',
    fontFamily: "'Caveat', cursive",
    fontSize: '18px',
    color: '#2D2A26',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Caveat', cursive",
    fontSize: '14px',
    color: '#8B857C',
    display: 'block',
    marginBottom: '4px',
  };

  // Content shared between mobile and desktop
  const formContent = (
    <>
      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: isMobile ? '16px' : '12px',
          right: isMobile ? '16px' : '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          zIndex: 10,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 6 L18 18 M18 6 L6 18" stroke="#8B857C" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: isMobile ? '40px' : 0 }}>
        <GustoLogo size={isMobile ? 64 : 48} />
        <ZineText size="xl" style={{ display: 'block', marginTop: '16px' }}>
          {mode === 'login' ? t('auth.loginToGusto') : t('auth.createAccount')}
        </ZineText>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {mode === 'register' && (
          <div style={{ marginBottom: '24px' }}>
            <label style={labelStyle}>{t('auth.name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('auth.namePlaceholder')}
              style={inputStyle}
            />
          </div>
        )}

        <div style={{ marginBottom: '24px' }}>
          <label style={labelStyle}>{t('auth.email')}</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('auth.emailPlaceholder')}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={labelStyle}>{t('auth.password')}</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t('auth.passwordPlaceholder')}
            required
            minLength={6}
            style={inputStyle}
          />
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            background: '#FEE',
            border: '1px solid #C44',
            borderRadius: '4px',
            padding: '10px 12px',
            marginBottom: '16px',
          }}>
            <ZineText size="sm" style={{ color: '#C44' }}>
              {error}
            </ZineText>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            padding: '16px 24px',
            background: isLoading ? '#A8A4A0' : '#2D2A26',
            color: '#FAF7F2',
            border: 'none',
            borderRadius: '4px',
            fontFamily: "'Caveat', cursive",
            fontSize: '22px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          {isLoading ? t('auth.loading') : (mode === 'login' ? t('auth.login') : t('auth.register'))}
        </button>
      </form>

      {/* Switch mode */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <ZineText size="md" style={{ color: '#8B857C' }}>
          {mode === 'login' ? t('auth.noAccount') + ' ' : t('auth.haveAccount') + ' '}
          <button
            onClick={switchMode}
            style={{
              background: 'none',
              border: 'none',
              fontFamily: "'Caveat', cursive",
              fontSize: '17px',
              color: '#2D2A26',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            {mode === 'login' ? t('auth.register') : t('auth.login')}
          </button>
        </ZineText>
      </div>
    </>
  );

  // Mobile: Fullscreen layout
  if (isMobile) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: '#FAF7F2',
          zIndex: 1000,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{
          flex: 1,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '400px',
          margin: '0 auto',
          width: '100%',
          position: 'relative',
        }}>
          {formContent}
        </div>
      </div>
    );
  }

  // Desktop: Modal with HandDrawnFrame
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(45, 42, 38, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <HandDrawnFrame
          style={{
            background: '#FAF7F2',
            padding: '32px',
            maxWidth: '360px',
            width: '100%',
            position: 'relative',
          }}
        >
          {formContent}
        </HandDrawnFrame>
      </div>
    </div>
  );
}

export default AuthModal;
