import React from 'react';

interface FlagIconProps {
  className?: string;
}

export function TexasFlag({ className = "w-6 h-4" }: FlagIconProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Blue section with star */}
      <rect x="0" y="0" width="8" height="16" fill="#002868" />
      <polygon
        points="4,4 4.8,6.4 7.2,6.4 5.2,7.6 6,10 4,8.8 2,10 2.8,7.6 0.8,6.4 3.2,6.4"
        fill="white"
      />
      {/* White stripe */}
      <rect x="8" y="0" width="16" height="8" fill="white" />
      {/* Red stripe */}
      <rect x="8" y="8" width="16" height="8" fill="#BF0A30" />
    </svg>
  );
}

export function MexicanFlag({ className = "w-6 h-4" }: FlagIconProps) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Green stripe */}
      <rect x="0" y="0" width="8" height="16" fill="#006847" />
      {/* White stripe with coat of arms */}
      <rect x="8" y="0" width="8" height="16" fill="white" />
      {/* Simplified coat of arms - eagle silhouette */}
      <circle cx="12" cy="8" r="2" fill="#8B4513" opacity="0.7" />
      <path
        d="M10.5,7 Q12,5.5 13.5,7 Q12,9.5 10.5,7"
        fill="#654321"
        opacity="0.8"
      />
      {/* Red stripe */}
      <rect x="16" y="0" width="8" height="16" fill="#CE1126" />
    </svg>
  );
}
