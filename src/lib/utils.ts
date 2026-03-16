import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/5547988449215?text=Olá! Gostaria de saber mais sobre os serviços da IZG.";
