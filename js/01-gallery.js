import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery');
const galleryEm = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}

"/>
 </a>
        </div>`;
    })
        .join("")
}

const addGalleryMarkup = galleryEm(galleryItems);
galleryImages.innerHTML = addGalleryMarkup;



galleryImages.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.nodeName !== "IMG") {
        return
    }
    const selectedImages = e.target.getAttribute("data-source")
    const instance = basicLightbox.create(`
    <img src="${selectedImages}" width="800" height="600">
`)

    instance.show()

})




