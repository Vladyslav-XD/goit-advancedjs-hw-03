const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50537892-ac7a1ace2e3791ae5c3aa87a3';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    return response.json();
  });
}
