const WP_API_URL = "https://mateegoexplorers.com/wp-json/wp/v2/trip";

export interface WPTrip {
  id: number;
  slug: string;
  title: { rendered: string };
  description: string;
  price: string;
  sale_price: string;
  has_sale: boolean;
  currency: { code: string; symbol: string };
  duration: { days: number; nights: number };
  featured_image: { large?: string; medium?: string; thumbnail?: string } | Record<string, never>;
  is_featured: boolean;
  destination: number[];
  trip_types: number[];
}

export interface Trip {
  id: number;
  slug: string;
  title: string;
  image: string;
  duration: string;
  price: string;
  description: string;
}

function formatDuration(d: WPTrip["duration"]): string {
  if (!d) return "";
  const parts: string[] = [];
  if (d.days) parts.push(`${d.days} Day${d.days > 1 ? "s" : ""}`);
  if (d.nights) parts.push(`${d.nights} Night${d.nights > 1 ? "s" : ""}`);
  return parts.join(" / ") || "";
}

function getFeaturedImage(img: WPTrip["featured_image"]): string {
  if (img && typeof img === "object" && "large" in img && img.large) return img.large;
  if (img && typeof img === "object" && "medium" in img && img.medium) return img.medium;
  return "";
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export function mapWPTrip(t: WPTrip): Trip {
  const symbol = t.currency?.symbol || "$";
  const priceVal = t.has_sale && t.sale_price ? t.sale_price : t.price;
  return {
    id: t.id,
    slug: t.slug,
    title: t.title?.rendered ? stripHtml(t.title.rendered) : "",
    image: getFeaturedImage(t.featured_image),
    duration: formatDuration(t.duration),
    price: priceVal ? `${symbol}${Number(priceVal).toLocaleString()}` : "",
    description: t.description ? stripHtml(t.description).trim() : "",
  };
}

export async function fetchTrips(): Promise<Trip[]> {
  const res = await fetch(`${WP_API_URL}?per_page=50`);
  if (!res.ok) throw new Error(`Failed to fetch trips: ${res.status}`);
  const data: WPTrip[] = await res.json();
  return data.map(mapWPTrip);
}
