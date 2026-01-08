// CulinaryPanel - Stile Dispense MasterChef per l'esplorazione culinaria
import React, { useState, useEffect } from 'react';

const ink = '#2D2A26';
const paper = '#FAF7F2';
const highlight = '#E07A5F';
const accent = '#C17767';

// Componente per item cliccabile
function ClickableItem({ children, onClick, type = 'dish' }) {
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    dish: '○',
    product: '◆',
    technique: '✦'
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 10px',
        margin: '2px 0',
        borderRadius: 6,
        cursor: 'pointer',
        background: isHovered ? 'rgba(224, 122, 95, 0.1)' : 'transparent',
        transition: 'all 0.15s ease',
        transform: isHovered ? 'translateX(4px)' : 'none',
      }}
    >
      <span style={{
        color: isHovered ? highlight : accent,
        fontSize: 10,
        transition: 'color 0.15s'
      }}>
        {icons[type]}
      </span>
      <span style={{
        fontFamily: "'Caveat', cursive",
        fontSize: 17,
        color: isHovered ? highlight : ink,
        transition: 'color 0.15s'
      }}>
        {children}
      </span>
      {isHovered && (
        <span style={{
          marginLeft: 'auto',
          fontSize: 12,
          color: highlight,
          fontFamily: "'Caveat', cursive"
        }}>
          →
        </span>
      )}
    </div>
  );
}

// Sezione collassabile
function Section({ title, items, type, onItemClick, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginBottom: 12 }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          padding: '4px 0',
          borderBottom: '1px dashed #E8E4DD',
          marginBottom: 6,
        }}
      >
        <span style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 14,
          fontWeight: 600,
          color: ink,
          textTransform: 'uppercase',
          letterSpacing: 1,
        }}>
          {title}
        </span>
        <span style={{
          fontSize: 10,
          color: accent,
          transform: isOpen ? 'rotate(90deg)' : 'none',
          transition: 'transform 0.2s'
        }}>
          ▶
        </span>
      </div>
      {isOpen && (
        <div>
          {items.map((item, i) => (
            <ClickableItem
              key={i}
              type={type}
              onClick={() => onItemClick(item, type)}
            >
              {item}
            </ClickableItem>
          ))}
        </div>
      )}
    </div>
  );
}

// Area culinaria (accordion)
function CulinaryArea({ area, onItemClick, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      marginBottom: 16,
      border: '1px solid #E8E4DD',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'white',
    }}>
      {/* Header dell'area */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: '14px 16px',
          cursor: 'pointer',
          background: isOpen ? 'rgba(224, 122, 95, 0.08)' : paper,
          borderBottom: isOpen ? '1px dashed #E8E4DD' : 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'background 0.2s',
        }}
      >
        <div>
          <h3 style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 22,
            color: ink,
            margin: 0,
          }}>
            ~ {area.name} ~
          </h3>
          <p style={{
            fontFamily: "'Caveat', cursive",
            fontSize: 14,
            color: accent,
            margin: '4px 0 0',
            fontStyle: 'italic',
          }}>
            "{area.tagline}"
          </p>
        </div>
        <span style={{
          fontSize: 18,
          color: accent,
          transform: isOpen ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.3s',
        }}>
          ▼
        </span>
      </div>

      {/* Contenuto dell'area */}
      {isOpen && (
        <div style={{ padding: '12px 16px' }}>
          <Section title="Primi" items={area.primi} type="dish" onItemClick={onItemClick} />
          <Section title="Secondi" items={area.secondi} type="dish" onItemClick={onItemClick} />
          <Section title="Dolci" items={area.dolci} type="dish" onItemClick={onItemClick} />
          <Section title="Prodotti DOP" items={area.prodotti_dop} type="product" onItemClick={onItemClick} defaultOpen={false} />
          <Section title="Tecniche" items={area.tecniche} type="technique" onItemClick={onItemClick} defaultOpen={false} />
        </div>
      )}
    </div>
  );
}

// Pannello principale
export default function CulinaryPanel({
  country,
  onClose,
  onAskQuestion,
  onBack
}) {
  const [areas, setAreas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!country) return;

    setLoading(true);
    setError(null);

    fetch('/api/explore-world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.areas) {
          setAreas(data.areas);
        } else {
          setError('Nessuna informazione disponibile');
        }
      })
      .catch(() => setError('Errore di connessione'))
      .finally(() => setLoading(false));
  }, [country]);

  const handleItemClick = (item, type) => {
    let question;
    switch (type) {
      case 'dish':
        question = `Come si prepara ${item}?`;
        break;
      case 'product':
        question = `Parlami del ${item}`;
        break;
      case 'technique':
        question = `Come funziona la tecnica "${item}"?`;
        break;
      default:
        question = `Parlami di ${item}`;
    }

    if (onAskQuestion) {
      onAskQuestion(question, { country, item, type });
    }
  };

  return (
    <div style={{
      width: 340,
      maxHeight: 'calc(100vh - 140px)',
      background: paper,
      borderRadius: 16,
      border: `2px solid ${ink}`,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: `2px solid ${ink}`,
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {onBack && (
            <button
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 20,
                cursor: 'pointer',
                color: ink,
                padding: 0,
              }}
            >
              ←
            </button>
          )}
          <div>
            <h2 style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 26,
              color: ink,
              margin: 0,
            }}>
              {country}
            </h2>
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 13,
              color: accent,
              margin: 0,
            }}>
              Esplora le tradizioni culinarie
            </p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 24,
              cursor: 'pointer',
              color: ink,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        )}
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
      }}>
        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: accent,
          }}>
            <div style={{
              width: 40,
              height: 40,
              border: `3px solid ${paper}`,
              borderTopColor: highlight,
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px',
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 18 }}>
              Esplorando {country}...
            </p>
          </div>
        ) : error ? (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            color: accent,
          }}>
            <p style={{ fontFamily: "'Caveat', cursive", fontSize: 18 }}>
              {error}
            </p>
          </div>
        ) : (
          <>
            <p style={{
              fontFamily: "'Caveat', cursive",
              fontSize: 14,
              color: accent,
              textAlign: 'center',
              marginBottom: 16,
              fontStyle: 'italic',
            }}>
              Clicca su un elemento per saperne di piu
            </p>
            {areas.map((area, i) => (
              <CulinaryArea
                key={area.name}
                area={area}
                onItemClick={handleItemClick}
                defaultOpen={i === 0}
              />
            ))}
          </>
        )}
      </div>

      {/* Footer */}
      <div style={{
        padding: '12px 16px',
        borderTop: '1px dashed #E8E4DD',
        background: 'white',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Caveat', cursive",
          fontSize: 13,
          color: accent,
          margin: 0,
        }}>
          {areas.length} regioni culinarie
        </p>
      </div>
    </div>
  );
}
