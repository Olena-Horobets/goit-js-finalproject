import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const renderGallery = () => {
	return galleryItems
		.map((el) => {
			return `<li class="gallery__item">
                    <a class="gallery__link" href="${el.original}">
                        <img src="${el.preview}"
                            src="${el.original}"
                            alt="${el.description}"
                            class="gallery__image"/>
                    </a>
                </li>`;
		})
		.join("");
};

list.innerHTML = renderGallery();

new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
	overlayOpacity: 0.85,
});
