
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = true }) => {
  return (
    <div className={`flex flex-col items-start leading-none ${className}`}>
      <span className={`font-heading font-black tracking-tighter text-2xl md:text-3xl ${light ? 'text-white' : 'text-navy-dark'}`}>
        THERANCE
      </span>
      <span className="font-heading font-bold tracking-[0.4em] text-[10px] md:text-xs text-blue-500 mt-1 uppercase">
        Group
      </span>
    </div>
  );
};

export default Logo;
