import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 
 * @param  {...any} inputs 
 * @returns 
 * @example1 className={cn('p-4 text-lg', isPrimary ? styles.primary )}
 */ 

export function cn(...inputs: (string | undefined | null | boolean | number)[]): string {
  return twMerge(clsx(inputs));
}
