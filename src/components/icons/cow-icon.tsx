import type { SVGProps } from "react";

export function CowIcon(props: SVGProps<SVGSVGElement>) {
  // A simple and modern representation of a cow's head
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16.5 8.5c1.5-1 2.5-3 2.5-5"/>
      <path d="M7.5 8.5c-1.5-1-2.5-3-2.5-5"/>
      <path d="M12 14h.01"/>
      <path d="M18.37 7.63c.4-1 .47-2.22.14-3.42A4.2 4.2 0 0 0 15 2a4.2 4.2 0 0 0-3.42 2.21c-.33 1.2-.26 2.42.14 3.42"/>
      <path d="M5.63 7.63c-.4-1-.47-2.22-.14-3.42A4.2 4.2 0 0 1 9 2a4.2 4.2 0 0 1 3.42 2.21c.33 1.2.26 2.42-.14 3.42"/>
      <path d="M12 18c-3.5 0-6.2-2.8-6.2-6.2 0-2.7 1.7-5.1 4.1-6"/>
      <path d="M12 18c3.5 0 6.2-2.8 6.2-6.2 0-2.7-1.7-5.1-4.1-6"/>
      <path d="M6 15h12"/>
    </svg>
  );
}
