import { fetchImages } from './js/pixabay-api.js';
import {
    renderImages,
    clearGallery,
    showLoader,
    hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', async e => {
    e.preventDefault();
    const query = e.target.elements.searchQuery.value.trim();

    if (!query) {
        iziToast.error({ message: 'Please enter a search term!' });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await fetchImages(query);
        if (data.hits.length === 0) {
            iziToast.warning({
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        } else {
            renderImages(data.hits);
        }
    } catch (error) {
        iziToast.error({ message: `Error: ${error.message}` });
    } finally {
        hideLoader();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    loadDefaultImages();
});

async function loadDefaultImages() {
    const defaultQuery = 'nature';
    clearGallery();
    showLoader();

    try {
        const data = await fetchImages(defaultQuery);
        renderImages(data.hits);
    } catch (error) {
        iziToast.error({ message: `Error: ${error.message}` });
    } finally {
        hideLoader();
    }
}
