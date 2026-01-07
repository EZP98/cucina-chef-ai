import { ZinePage, ZineText, HandDrawnFrame } from '../../components/ui/ZineUI';
import { useSubscription } from '../../hooks/useSubscription';
import type { User } from '../../hooks/useAuth';

interface SettingsPageProps {
  user: User | null;
  isAuthenticated: boolean;
  onNavigate: (path: string) => void;
  onLogout: () => void;
}

// Plan badge icons
const PlanIcon = ({ planId }: { planId: string }) => {
  // Founder gets a crown icon
  if (planId === 'founder') {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M6 22L8 12L12 16L16 8L20 16L24 12L26 22H6Z"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M6 22H26V25C26 25.5 25.5 26 25 26H7C6.5 26 6 25.5 6 25V22Z"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="8" cy="12" r="2" fill="#D4AF37" />
        <circle cx="16" cy="8" r="2" fill="#D4AF37" />
        <circle cx="24" cy="12" r="2" fill="#D4AF37" />
      </svg>
    );
  }
  if (planId === 'premium') {
    // Chef hat with star (gold)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 24V20C8 18 10 16 16 16C22 16 24 18 24 20V24"
          stroke="#D4AF37"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="10" r="6" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="10" cy="12" r="3" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="3" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M16 4L17 6.5L19.5 7L17.5 9L18 11.5L16 10L14 11.5L14.5 9L12.5 7L15 6.5L16 4Z" fill="#D4AF37" />
      </svg>
    );
  }
  if (planId === 'pro') {
    // Chef hat (green)
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M8 24V20C8 18 10 16 16 16C22 16 24 18 24 20V24"
          stroke="#4A7C59"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="16" cy="10" r="6" stroke="#4A7C59" strokeWidth="2" />
        <circle cx="10" cy="12" r="3" stroke="#4A7C59" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="3" stroke="#4A7C59" strokeWidth="1.5" />
      </svg>
    );
  }
  // Lavapiatti - bowl/dish
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <ellipse cx="16" cy="20" rx="10" ry="4" stroke="#8B857C" strokeWidth="2" />
      <path d="M6 20C6 16 10 12 16 12C22 12 26 16 26 20" stroke="#8B857C" strokeWidth="2" />
      <path d="M12 8C12 8 14 10 16 10C18 10 20 8 20 8" stroke="#8B857C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// Settings icon
const SettingsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke="#2D2A26" strokeWidth="1.5" />
    <path
      d="M10 2V4M10 16V18M18 10H16M4 10H2M15.5 4.5L14 6M6 14L4.5 15.5M15.5 15.5L14 14M6 6L4.5 4.5"
      stroke="#2D2A26"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Logout icon
const LogoutIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M6 15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12L15 9M15 9L12 6M15 9H7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SettingsPage({
  user,
  isAuthenticated,
  onNavigate,
  onLogout,
}: SettingsPageProps) {
  const { subscription, usage, isLoading, openPortal } = useSubscription(isAuthenticated);

  // Get user initials for avatar
  const getInitials = () => {
    if (!user?.name) return user?.email?.substring(0, 2).toUpperCase() || '??';
    return user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  // Format date
  const formatDate = (timestamp?: number) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString('it-IT', {
      month: 'long',
      year: 'numeric',
    });
  };

  // Get plan color (founder appears as premium)
  const getPlanColor = (planId: string) => {
    if (planId === 'founder' || planId === 'premium') return '#D4AF37';
    if (planId === 'pro') return '#4A7C59';
    return '#8B857C';
  };

  // Get display name
  const getDisplayPlanName = (_planId: string, defaultName: string) => {
    return defaultName;
  };

  if (!isAuthenticated || !user) {
    return (
      <ZinePage>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 24px', textAlign: 'center' }}>
          <ZineText size="xl">Devi accedere per vedere le impostazioni</ZineText>
          <button
            onClick={() => onNavigate('/chat')}
            style={{
              marginTop: '24px',
              fontFamily: "'Caveat', cursive",
              fontSize: '18px',
              color: '#5C5A56',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Torna alla chat
          </button>
        </div>
      </ZinePage>
    );
  }

  const planId = subscription?.plan_id || 'free';
  const planName = getDisplayPlanName(planId, subscription?.plan?.display_name || 'Lavapiatti');

  return (
    <ZinePage>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <SettingsIcon />
          <ZineText size="xxl" style={{ display: 'block', marginTop: '8px' }}>
            Impostazioni
          </ZineText>
        </div>

        {/* Profile Section */}
        <HandDrawnFrame style={{ padding: '20px', marginBottom: '24px' }}>
          <ZineText size="lg" style={{ display: 'block', marginBottom: '16px', color: '#5C5A56' }}>
            Profilo
          </ZineText>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Avatar */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '2px solid #2D2A26',
                background: '#FAF7F2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Caveat', cursive",
                fontSize: '20px',
                color: '#2D2A26',
              }}
            >
              {getInitials()}
            </div>

            {/* User info */}
            <div style={{ flex: 1 }}>
              {user.name && (
                <ZineText size="lg" style={{ display: 'block' }}>
                  {user.name}
                </ZineText>
              )}
              <ZineText size="md" style={{ display: 'block', color: '#8B857C' }}>
                {user.email}
              </ZineText>
            </div>
          </div>
        </HandDrawnFrame>

        {/* Plan Section */}
        <HandDrawnFrame style={{ padding: '20px', marginBottom: '24px' }}>
          <ZineText size="lg" style={{ display: 'block', marginBottom: '16px', color: '#5C5A56' }}>
            Il tuo piano
          </ZineText>

          {isLoading ? (
            <ZineText size="md">Caricamento...</ZineText>
          ) : (
            <>
              {/* Plan badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                  padding: '12px 16px',
                  background: `${getPlanColor(planId)}10`,
                  borderRadius: '8px',
                }}
              >
                <PlanIcon planId={planId} />
                <div>
                  <ZineText
                    size="xl"
                    style={{ display: 'block', color: getPlanColor(planId) }}
                  >
                    {planName}
                  </ZineText>
                  {subscription?.current_period_end && planId !== 'free' && (
                    <ZineText size="sm" style={{ color: '#8B857C' }}>
                      Rinnovo: {formatDate(subscription.current_period_end)}
                    </ZineText>
                  )}
                </div>
              </div>

              {/* Usage meters */}
              {usage && (
                <div style={{ marginBottom: '20px' }}>
                  {/* Messages */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <ZineText size="md">
                        Messaggi {usage.messages.period === 'month' ? 'questo mese' : 'oggi'}
                      </ZineText>
                      <ZineText size="md" style={{ color: '#8B857C' }}>
                        {usage.messages.count}/{usage.messages.limit === -1 ? 'illimitati' : usage.messages.limit}
                      </ZineText>
                    </div>
                    {usage.messages.limit !== -1 && (
                      <div
                        style={{
                          height: '8px',
                          background: '#E8E6E2',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${Math.min(100, (usage.messages.count / usage.messages.limit) * 100)}%`,
                            height: '100%',
                            background: usage.messages.isLimitReached ? '#C44' : '#4A7C59',
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Recipes */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <ZineText size="md">Ricette salvate</ZineText>
                      <ZineText size="md" style={{ color: '#8B857C' }}>
                        {usage.recipes.count}/{usage.recipes.limit === -1 ? 'illimitate' : usage.recipes.limit}
                      </ZineText>
                    </div>
                    {usage.recipes.limit !== -1 && (
                      <div
                        style={{
                          height: '8px',
                          background: '#E8E6E2',
                          borderRadius: '4px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${Math.min(100, (usage.recipes.count / usage.recipes.limit) * 100)}%`,
                            height: '100%',
                            background: usage.recipes.isLimitReached ? '#C44' : '#4A7C59',
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {planId !== 'free' && subscription?.stripe_subscription_id && (
                  <button
                    onClick={() => openPortal()}
                    style={{
                      flex: 1,
                      minWidth: '140px',
                      padding: '10px 16px',
                      fontFamily: "'Caveat', cursive",
                      fontSize: '16px',
                      background: 'transparent',
                      color: '#2D2A26',
                      border: '1.5px solid #2D2A26',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                  >
                    Gestisci abbonamento
                  </button>
                )}
                <button
                  onClick={() => onNavigate('/pricing')}
                  style={{
                    flex: 1,
                    minWidth: '140px',
                    padding: '10px 16px',
                    fontFamily: "'Caveat', cursive",
                    fontSize: '16px',
                    background: '#4A7C59',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  {planId === 'free' ? 'Passa a Sous Chef' : 'Cambia piano'}
                </button>
              </div>
            </>
          )}
        </HandDrawnFrame>

        {/* Account Section */}
        <HandDrawnFrame style={{ padding: '20px', marginBottom: '24px' }}>
          <ZineText size="lg" style={{ display: 'block', marginBottom: '16px', color: '#5C5A56' }}>
            Account
          </ZineText>

          <button
            onClick={onLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              fontFamily: "'Caveat', cursive",
              fontSize: '16px',
              background: 'transparent',
              color: '#C44',
              border: '1.5px solid #C44',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <LogoutIcon />
            Esci dall'account
          </button>
        </HandDrawnFrame>

        {/* Back button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            onClick={() => onNavigate('/chat')}
            style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '18px',
              color: '#5C5A56',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Torna alla chat
          </button>
        </div>
      </div>
    </ZinePage>
  );
}
