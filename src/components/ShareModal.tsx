import { useState } from 'react';

const tokens = {
  ink: '#2D2A26',
  paper: '#FAF7F2',
  muted: '#8B857C',
};

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  recipeName: string;
}

export function ShareModal({ isOpen, onClose, shareUrl, recipeName }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpen = () => {
    window.open(shareUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(45, 42, 38, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'transparent',
          borderRadius: 16,
          padding: 24,
          maxWidth: 420,
          width: '100%',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Hand-drawn border */}
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
            d="M1 2 Q0 0 2 1 L98 1 Q100 0 99 2 L99 98 Q100 100 98 99 L2 99 Q0 100 1 98 Z"
            stroke={tokens.ink}
            strokeWidth="0.5"
            fill={tokens.paper}
            strokeLinecap="round"
          />
        </svg>

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            background: 'none',
            border: 'none',
            fontSize: 24,
            cursor: 'pointer',
            color: tokens.ink,
            lineHeight: 1,
          }}
        >
          ×
        </button>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 26,
            color: tokens.ink,
            margin: '0 0 8px 0',
            textAlign: 'center',
          }}
        >
          Ricetta Pubblicata
        </h2>

        {/* Recipe name */}
        <p
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 18,
            color: tokens.muted,
            margin: '0 0 20px 0',
            textAlign: 'center',
          }}
        >
          {recipeName}
        </p>

        {/* URL Box */}
        <div
          style={{
            background: '#fff',
            border: `1.5px dashed ${tokens.muted}`,
            borderRadius: 8,
            padding: '12px 14px',
            marginBottom: 20,
            wordBreak: 'break-all',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 15,
              color: tokens.ink,
            }}
          >
            {shareUrl}
          </span>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={handleCopy}
            style={{
              flex: 1,
              padding: '12px 16px',
              background: copied ? '#4CAF50' : tokens.ink,
              color: tokens.paper,
              border: 'none',
              borderRadius: 8,
              fontFamily: "'Caveat', cursive",
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            {copied ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke={tokens.paper} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Copiato!
              </>
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="9" y="9" width="13" height="13" rx="2" stroke={tokens.paper} strokeWidth="1.5"/>
                  <path d="M5 15V5a2 2 0 012-2h10" stroke={tokens.paper} strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Copia link
              </>
            )}
          </button>

          <button
            onClick={handleOpen}
            style={{
              flex: 1,
              padding: '12px 16px',
              background: 'transparent',
              color: tokens.ink,
              border: `1.5px solid ${tokens.ink}`,
              borderRadius: 8,
              fontFamily: "'Caveat', cursive",
              fontSize: 18,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke={tokens.ink} strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M15 3h6v6M10 14L21 3" stroke={tokens.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Apri
          </button>
        </div>
      </div>
    </div>
  );
}
