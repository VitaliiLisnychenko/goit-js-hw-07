import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
  <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}"
  />
</a>
</li>`
  )
  .join("");

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener("click", onImageClick);


function onImageClick (event){
    event.preventDefault();

    if(event.target.nodeName !== "IMG"){
        return;
    }

    const src = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${src}" width="1040" height="600">
    </div>
    `);
    instance.show();

    galleryEl.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);