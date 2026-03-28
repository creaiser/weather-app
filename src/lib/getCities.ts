export type City = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  elevation?: number;
  feature_code?: string;
  country_code: string;
  admin1_id?: number;
  admin2_id?: number;
  admin3_id?: number;
  timezone: string;
  population?: number;
  postcodes?: string[];
  country: string;
  admin1?: string;
  admin2?: string;
  admin3?: string;
};

export type CitiesResponse = {
  results?: City[];
};

export async function getCities(query: string): Promise<City[]> {
  if (!query) return [];

  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=ru`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch cities');
  }

  const data: CitiesResponse = await res.json();
  return data.results || [];
}
