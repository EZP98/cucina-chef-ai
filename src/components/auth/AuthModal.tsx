// AuthModal - Login/Register fullscreen page in Zine style
import { useState } from 'react';
import { ZineText, Underline } from '../ui/ZineUI';
import { GustoLogo } from '../ui/GustoLogo';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  onRegister: (email: string, password: string, name?: string) => Promise<{ success: boolean; error?: string }>;
  t: (key: string) => string;
}

type Mode = 'login' | 'register';

export function AuthModal({ isOpen, onClose, onLogin, onRegister, t }: AuthModalProps) {
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
    padding: '14px 0',
    border: 'none',
    borderBottom: '1.5px dashed #C4C0B9',
    background: 'transparent',
    fontFamily: "'Caveat', cursive",
    fontSize: '20px',
    color: '#2D2A26',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Caveat', cursive",
    fontSize: '16px',
    color: '#8B857C',
    display: 'block',
    marginBottom: '6px',
  };

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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Back/Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '24px',
          left: '24px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Caveat', cursive",
          fontSize: '18px',
          color: '#8B857C',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 6L9 12L15 18" stroke="#8B857C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t('misc.back') || 'indietro'}
      </button>

      {/* Main content - centered */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
          padding: '40px 32px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <GustoLogo size={56} />
          <ZineText size="xl" style={{ display: 'block', marginTop: '20px', fontSize: '32px' }}>
            {mode === 'login' ? t('auth.loginToGusto') : t('auth.createAccount')}
          </ZineText>
          <Underline width={mode === 'login' ? 180 : 200} style={{ margin: '8px auto 0' }} />
        </div>

        {/* Form Card with hand-drawn border */}
        <div
          style={{
            position: 'relative',
            padding: '40px 36px',
            background: '#FFFFFF',
          }}
        >
          {/* Hand-drawn frame */}
          <svg
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M3 5 Q1 1 5 2 L95 3 Q99 1 98 6 L97 94 Q99 99 94 97 L6 96 Q1 99 2 94 Z"
              stroke="#2D2A26"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
            {mode === 'register' && (
              <div style={{ marginBottom: '28px' }}>
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

            <div style={{ marginBottom: '28px' }}>
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

            <div style={{ marginBottom: '36px' }}>
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
                padding: '12px 14px',
                marginBottom: '20px',
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
                padding: '18px 24px',
                background: isLoading ? '#A8A4A0' : '#2D2A26',
                color: '#FAF7F2',
                border: 'none',
                borderRadius: '6px',
                fontFamily: "'Caveat', cursive",
                fontSize: '24px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              {isLoading ? t('auth.loading') : (mode === 'login' ? t('auth.login') : t('auth.register'))}
            </button>
          </form>
        </div>

        {/* Switch mode */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <ZineText size="lg" style={{ color: '#8B857C' }}>
            {mode === 'login' ? t('auth.noAccount') + ' ' : t('auth.haveAccount') + ' '}
            <button
              onClick={switchMode}
              style={{
                background: 'none',
                border: 'none',
                fontFamily: "'Caveat', cursive",
                fontSize: '20px',
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
      </div>
    </div>
  );
}

export default AuthModal;
