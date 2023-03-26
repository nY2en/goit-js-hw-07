import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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

const galleryContainer = document.querySelector('.gallery');

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', onGalleryChange);

function onGalleryChange(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const instance = basicLightbox.create(
        `
    <img src="${e.target.dataset.source}">
    `,
        {
            closable: true,
            className: '',
            onShow: instance => {
                window.addEventListener('keydown', onKeyChange);
            },
            onClose: instance => {
                window.removeEventListener('keydown', onKeyChange);
            },
        }
    );

    instance.show();

    function onKeyChange(e) {
        const ESCAPE = 'Escape';

        if (e.code === ESCAPE) {
            instance.close();
        }
    }
}
