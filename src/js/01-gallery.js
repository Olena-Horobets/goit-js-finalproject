import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const renderGallery = () => {
	return galleryItems
		.map((el) => {
			return `<li class="gallery__item">
                    <a class="gallery__link" href="large-image.jpg">
                        <img src="${el.preview}"
                            data-source="${el.original}"
                            alt="${el.description}" 
                            class="gallery__image"/>
                    </a>
                </li>`;
		})
		.join("");
};

list.innerHTML = renderGallery();
