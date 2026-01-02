import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a monetary value using the given locale and currency.
 *
 * @param amount - Numeric value (can be null/undefined)
 * @param currency - ISO currency code (default: "BRL")
 * @param locale - Formatting locale (default: "pt-BR")
 * @returns Formatted string (e.g., "R$ 5,999.99")
 */
export function formatPrice(
  amount: number | null | undefined,
  currency: string = "BRL",
  locale: string = "pt-BR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount ?? 0);
}
