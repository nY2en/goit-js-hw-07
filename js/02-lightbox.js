import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

function createGalleryMarkup(pictures) {
    return pictures
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
                        <a class="gallery__link" href="${original}">
                            <img class="gallery__image" src="${preview}" alt="${description}" />
                        </a>
                    </li>`;
        })
        .join('');
}

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryChange);

function onGalleryChange(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    let lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });
}
