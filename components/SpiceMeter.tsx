import React from 'react';
import { Flame } from 'lucide-react';

interface SpiceMeterProps {
  level: number; // 1-5
}

export const SpiceMeter: React.FC<SpiceMeterProps> = ({ level }) => {
  return (
    <div className="flex items-center space-x-2 mt-2">
      <span className="text-xs uppercase tracking-widest text-gold">Spice Level</span>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Flame
            key={i}
            size={14}
            className={`${
              i <= level ? 'fill-gold text-gold' : 'text-gray-600'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};
