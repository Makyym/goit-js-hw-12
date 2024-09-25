import { divEl } from "../main.js";

export function createGallery(values) {
    const gallery = values.reduce((acc, value) => {
        const galleryItem = `<li class="img-card">
        <a href="${value.largeImageURL}">
        <img src="${value.webformatURL}" alt="${value.tags}" />
        <ul>
        <li>
        <h3>Likes</h3>
        <p>${value.likes}</p>
        </li>
        <li>
        <h3>Views</h3>
        <p>${value.views}</p>
        </li>
        <li>
        <h3>Comments</h3>
        <p>${value.comments}</p>
        </li>
        <li>
        <h3>Downloads</h3>
        <p>${value.downloads}</p>
        </li>
        </ul>
        </a>
        </li>`;
        return acc + galleryItem;
    }, ``);
    return gallery;
};