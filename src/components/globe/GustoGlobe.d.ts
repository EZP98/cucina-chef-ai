// Type declarations for GustoGlobe

interface GustoGlobeProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSelectCountry?: (country: string) => void;
  onAskQuestion?: (question: string, context?: { country?: string; item?: string; type?: string }) => void;
  inline?: boolean;
}

declare function GustoGlobe(props: GustoGlobeProps): JSX.Element | null;
export default GustoGlobe;
