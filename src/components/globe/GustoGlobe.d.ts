// Type declarations for GustoGlobe

interface GustoGlobeProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSelectCountry?: (country: string) => void;
}

declare function GustoGlobe(props: GustoGlobeProps): JSX.Element | null;
export default GustoGlobe;
