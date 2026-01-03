// GlobeModal - Wrapper for GustoGlobe component
// The actual globe implementation is in GustoGlobe.jsx

import GustoGlobe from './GustoGlobe';

interface GlobeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCountry: (country: string, city?: string) => void;
}

export function GlobeModal({ isOpen, onClose, onSelectCountry }: GlobeModalProps) {
  return (
    <GustoGlobe
      isOpen={isOpen}
      onClose={onClose}
      onSelectCountry={onSelectCountry}
    />
  );
}
