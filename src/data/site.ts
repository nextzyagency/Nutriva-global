import imgAlimentos from '../assets/category_alimentos.png';
import imgPlantbased from '../assets/category_plantbased.png';
import imgSuperfoods from '../assets/category_superfoods.png';
import imgGlobal from '../assets/category_global.png';
import productSnack from '../assets/product_snack.png';
import productBarra from '../assets/product_barra.png';
import productGranola from '../assets/product_granola.png';

/**
 * Las cifras, testimonios y certificaciones del sitio son contenido de ejemplo.
 * Mientras sea `true`, se muestra la nota «Datos de ejemplo» junto a ellos.
 * Ponlo en `false` cuando los reemplaces por datos reales.
 */
export const SHOW_EXAMPLE_NOTES = false;

export const contact = {
  phone: '+31 20 123 4567',
  whatsapp: 'https://wa.me/31201234567',
  whatsappWithText:
    'https://wa.me/31201234567?text=Hola%20Nutriva%20Global%2C%20me%20interesa%20conocer%20sus%20productos%20y%20condiciones%20de%20distribuci%C3%B3n.',
  email: 'info@nutrivaglobal.com',
  city: 'Ámsterdam, Países Bajos',
  instagram: 'https://www.instagram.com/nutrivaglobal',
  linkedin: 'https://www.linkedin.com/company/nutriva-global',
  formAction: 'https://formsubmit.co/info@nutrivaglobal.com',
};

/** Una tinta de campo por línea de producto: sostiene la fotografía de esa línea. */
export const lines = [
  { id: 'alimentos-saludables', name: 'Alimentos Saludables', short: 'Alimentos', field: 'var(--field-oat)', image: imgAlimentos },
  { id: 'plant-based', name: 'Plant-Based', short: 'Plant-Based', field: 'var(--field-sage)', image: imgPlantbased },
  { id: 'superfoods', name: 'Superfoods', short: 'Superfoods', field: 'var(--field-apricot)', image: imgSuperfoods },
  { id: 'linea-global', name: 'Línea Global', short: 'Línea Global', field: 'var(--field-sky)', image: imgGlobal },
] as const;

export const lineById = (id: string) => lines.find((l) => l.id === id)!;

export const images: Record<string, ImageMetadata> = {
  product_snack: productSnack,
  product_barra: productBarra,
  product_granola: productGranola,
  category_alimentos: imgAlimentos,
  category_plantbased: imgPlantbased,
  category_superfoods: imgSuperfoods,
  category_global: imgGlobal,
};
