// SharePage - Public recipe view for shared links
import { useState, useEffect } from 'react';
import { ZinePage, ZineText, UnderlinedText, SketchStar } from '../components/ui/ZineUI';

interface SharedRecipe {
  id: string;
  name: string;
  time?: string;
  servings?: string;
  ingredients: string[];
  steps: string[];
  tips?: string[];
}

interface SharePageProps {
  shareId: string;
  onGoToApp: () => void;
}

export function SharePage({ shareId, onGoToApp }: SharePageProps) {
  const [recipe, setRecipe] = useState<SharedRecipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
      try {
        const response = await fetch(`/api/share/${shareId}`);
        if (!response.ok) {
          if (response.status === 404) {
            setError('Ricetta non trovata');
          } else {
            setError('Errore nel caricamento');
          }
          return;
        }
        const data = await response.json();
        setRecipe(data);
      } catch {
        setError('Errore di connessione');
      } finally {
        setLoading(false);
      }
    };

    loadRecipe();
  }, [shareId]);

  if (loading) {
    return (
      <ZinePage style={{
        padding: '40px 20px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <ZineText size="xl">Caricamento...</ZineText>
      </ZinePage>
    );
  }

  if (error || !recipe) {
    return (
      <ZinePage style={{
        padding: '40px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}>
        <ZineText size="xl">{error || 'Ricetta non trovata'}</ZineText>
        <button
          onClick={onGoToApp}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '18px',
            padding: '12px 24px',
            background: '#2D2A26',
            color: '#FAF7F2',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          Vai a Gusto
        </button>
      </ZinePage>
    );
  }

  return (
    <ZinePage style={{ padding: 0, minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        padding: '16px 20px',
        borderBottom: '1px dashed #E8E4DD',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div
          onClick={onGoToApp}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <ellipse cx="24" cy="26" rx="14" ry="18" stroke="#2D2A26" strokeWidth="1.5"/>
            <path d="M16 32 L20 28 L24 31 L28 27 L32 23" stroke="#2D2A26" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <ZineText size="xl" style={{ fontWeight: 'bold' }}>Gusto</ZineText>
        </div>
        <button
          onClick={onGoToApp}
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: '16px',
            padding: '8px 16px',
            background: 'transparent',
            color: '#2D2A26',
            border: '1px solid #2D2A26',
            borderRadius: '20px',
            cursor: 'pointer',
          }}
        >
          Apri App
        </button>
      </header>

      {/* Recipe Content */}
      <main style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '24px 20px 100px'
      }}>
        {/* Title - LEFT aligned */}
        <div style={{ marginBottom: '16px' }}>
          <ZineText size={32} style={{ fontWeight: 'bold', display: 'block' }}>
            {recipe.name}
          </ZineText>
        </div>

        {/* Meta info - LEFT aligned with icons */}
        {(recipe.time || recipe.servings) && (
          <div style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}>
            {recipe.time && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2 L8 14 M2 8 L14 8 M4 4 L12 12 M12 4 L4 12" stroke="#8B857C" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <ZineText size="md" style={{ color: '#8B857C' }}>{recipe.time}</ZineText>
              </div>
            )}
            {recipe.servings && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="5" r="3" stroke="#8B857C" strokeWidth="1.5" fill="none"/>
                  <path d="M4 18 Q4 12 10 12 Q16 12 16 18" stroke="#8B857C" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
                <ZineText size="md" style={{ color: '#8B857C' }}>{recipe.servings}</ZineText>
              </div>
            )}
          </div>
        )}

        {/* Ingredients */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <UnderlinedText>
              <ZineText size="lg" style={{ fontWeight: 'bold' }}>Ingredienti</ZineText>
            </UnderlinedText>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recipe.ingredients.map((ing, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '8px'
              }}>
                <span style={{ marginTop: '6px' }}><SketchStar size={10} /></span>
                <ZineText size="md" style={{ lineHeight: 1.5 }}>{ing}</ZineText>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <UnderlinedText>
              <ZineText size="lg" style={{ fontWeight: 'bold' }}>Preparazione</ZineText>
            </UnderlinedText>
          </div>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {recipe.steps.map((step, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <span style={{
                  fontFamily: "'Caveat', cursive",
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#2D2A26',
                  minWidth: '24px',
                }}>
                  {i + 1}.
                </span>
                <ZineText size="md" style={{ lineHeight: 1.6, flex: 1 }}>{step}</ZineText>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        {recipe.tips && Array.isArray(recipe.tips) && recipe.tips.length > 0 && (
          <section style={{
            marginBottom: '32px',
            padding: '16px',
            background: '#FFF9E6',
            borderRadius: '8px',
            border: '1px dashed #E8D5A3',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <ZineText size="md" style={{ fontWeight: 'bold' }}>Consigli</ZineText>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {recipe.tips.map((tip, i) => (
                <li key={i} style={{ marginBottom: '8px' }}>
                  <ZineText size="sm" style={{ lineHeight: 1.5, fontStyle: 'italic' }}>
                    {tip}
                  </ZineText>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
        <div style={{
          textAlign: 'center',
          padding: '24px',
          background: 'linear-gradient(135deg, #FAF7F2 0%, #F5F0E8 100%)',
          borderRadius: '12px',
          border: '1px dashed #E8E4DD',
        }}>
          <ZineText size="lg" style={{ display: 'block', marginBottom: '12px' }}>
            Scopri altre ricette
          </ZineText>
          <button
            onClick={onGoToApp}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '18px',
              padding: '12px 32px',
              background: '#2D2A26',
              color: '#FAF7F2',
              border: 'none',
              borderRadius: '24px',
              cursor: 'pointer',
            }}
          >
            Prova Gusto
          </button>
        </div>
      </main>
    </ZinePage>
  );
}
