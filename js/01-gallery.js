import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryImages = document.querySelector('.gallery');
const galleryEm = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class=".gallery__item">
            <img class="gallery__image"
                src="${preview}"
                alt="${description}"/>
        </div>`;
    })
    .join("")
}

galleryImages.insertAdjacentHTML("beforeend", galleryEm(galleryItems))


galleryImages.addEventListener('click', event => {

})


console.log(galleryItems);


// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
