'use client';

import React from 'react';

export function DoodleAnimation() {
  const svgString = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 80' width='150' height='120'>
      <style>
        path, line, circle { 
          fill: none; 
          stroke: hsl(33 100% 50% / 0.4); 
          stroke-width: 2; 
          stroke-linecap: round; 
          stroke-linejoin: round; 
        }
      </style>
      <path d='M10,40 C20,25 50,25 90,40' />
      <path d='M10,40 Q20,55 50,55 T90,40' />
      <path d='M75,40 C75,25 95,25 95,40' />
      <circle cx='81' cy='32' r='1' fill='hsl(33 100% 50% / 0.4)' stroke='none'/>
      <circle cx='89' cy='32' r='1' fill='hsl(33 100% 50% / 0.4)' stroke='none'/>
      <line x1='30' y1='55' x2='28' y2='65' />
      <line x1='40' y1='55' x2='38' y2='65' />
      <line x1='65' y1='55' x2='63' y2='65' />
      <line x1='75' y1='55' x2='73' y2='65' />
      <path d='M10,40 C0,45 5,55 5,55' />
    </svg>
  `;

  return (
    <div
      className="doodle-animation"
      dangerouslySetInnerHTML={{ __html: svgString }}
    />
  );
}
