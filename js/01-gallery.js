import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(pictures) {
    return pictures
        .map(
            picture =>
                `<li class="gallery__item"><a "href="${picture.original}" class="gallery__link"><img src="${picture.preview}" data-source="${picture.original}" alt="${picture.description}" class="gallery__image"/></a></li>`
        )
        .join('');
}

gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', onGalleryChange);

function onGalleryChange(e) {
    e.preventDefault();

    const pictures = [...gallery.querySelectorAll('.gallery__image')];

    if (!pictures.includes(e.target)) {
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
