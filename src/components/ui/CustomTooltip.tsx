
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface TooltipProps {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactElement;
  className?: string;
}

const Tooltip = ({ 
  text, 
  position = 'top', 
  children, 
  className 
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
  };
  
  const arrowPositionClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-t-navy-900 border-l-transparent border-r-transparent',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-r-navy-900 border-t-transparent border-b-transparent',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-b-navy-900 border-l-transparent border-r-transparent',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-l-navy-900 border-t-transparent border-b-transparent',
  };
  
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div 
          className={cn(
            "absolute z-50 px-3 py-2 text-sm text-white bg-navy-900 rounded-lg shadow-md max-w-xs transition-opacity duration-300",
            positionClasses[position],
            className
          )}
          style={{ backdropFilter: 'blur(4px)' }}
        >
          {text}
          <div 
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowPositionClasses[position]
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
