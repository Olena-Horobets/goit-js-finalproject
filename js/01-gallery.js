import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const renderGallery = () => {
	return galleryItems
		.map((el) => {
			return `<li class="gallery__item">
                    <a class="gallery__link" href="${el.original}">
                        <img src="${el.preview}"
                            data-source="${el.original}"
                            alt="${el.description}" 
                            class="gallery__image"/>
                    </a>
                </li>`;
		})
		.join("");
};

const galleryItemClickHandler = (e) => {
	e.preventDefault();

	if (e.target === e.currentTarget) return;

	const img = e.target.closest("[href]");
	const instance = basicLightbox.create(`
	    <img src="${img}" width="800" height="600">
	`);
	const close = (e) => {
		if (e.key === "Escape") instance.close();
		document.removeEventListener("keydown", close);
	};

	instance.show();
	document.addEventListener("keydown", close);
};

list.innerHTML = renderGallery();
list.addEventListener("click", galleryItemClickHandler);
