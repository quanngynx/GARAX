import { ReactNode } from "react";

export interface delaySuspenseInterface {
  delay: number; 
  fallback: ReactNode; 
  children: ReactNode; 
}