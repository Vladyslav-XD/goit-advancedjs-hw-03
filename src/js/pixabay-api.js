import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50537892-ac7a1ace2e3791ae5c3aa87a3';

export async function fetchImages(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
}

