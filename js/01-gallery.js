import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(pictures) {
    return pictures
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                    </a>
                </li>`
        )
        .join('');
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryChange);

function onGalleryChange(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
    `);

    instance.show();

    window.addEventListener('keydown', onKeyChange);

    function onKeyChange(e) {
        const ESCAPE = 'Escape';

        if (e.code === ESCAPE) {
            instance.close();

            window.removeEventListener('keydown', onKeyChange);
        }
    }
}
