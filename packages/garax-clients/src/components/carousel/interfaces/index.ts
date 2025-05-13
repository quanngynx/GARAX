import { CSSProperties, MouseEventHandler } from "react";

export interface ArrowsProps { 
    className?: string; 
    style?: CSSProperties; 
    onClick?: MouseEventHandler<HTMLDivElement>; 
}