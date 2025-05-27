import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
let lightbox;

export function clearGallery() {
    galleryEl.innerHTML = '';
}

export function renderImages(images) {
    const markup = images
        .map(img => {
            return `
        <li>
          <a class="gallery__item" href="${img.largeImageURL}">
            <img class="gallery__image" src="${img.webformatURL}" alt="${img.tags}" />
            <div class="info">
              <p><b>Likes:</b> ${img.likes}</p>
              <p><b>Views:</b> ${img.views}</p>
              <p><b>Comments:</b> ${img.comments}</p>
              <p><b>Downloads:</b> ${img.downloads}</p>
            </div>
          </a>
        </li>
      `;
        })
        .join('');


    galleryEl.insertAdjacentHTML('beforeend', markup);
    if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a');
    } else {
        lightbox.refresh();
    }
}
