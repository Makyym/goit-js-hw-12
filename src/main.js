import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";
import { searchFetch } from "./js/pixabay-api.js";
import { createGallery } from "./js/render-functions.js";

export const divEl = document.querySelector(".gallery-section");
const fetchPostsBtn = document.querySelector(".load-btn");
const formEl = document.querySelector("form");
const inputEl = formEl.elements.input;
const buttonEl = formEl.elements.button;
const loaderEl = document.querySelector(".loader-element");
const galleryGrid = new SimpleLightbox('.gallery-section a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
let page = 1;
let userSearch = "";
let totalHits = 0;

async function handleSearch(event) {
    event.preventDefault();
    page = 1;
    fetchPostsBtn.classList.replace("is-visible", "non-visible");
    if (inputEl.value.trim() === "") {
        iziToast.error({
            backgroundColor: "#EF4040",
            progressBarColor: "#FFBEBE",
            position: "topCenter",
            messageColor: "#FFFFFF",
            icon: "",
            message: `Please fill in the input field`,
            position: `topRight`,
        });
    } else {
        divEl.textContent = "";
        loaderEl.classList.replace("non-visible", "is-visible");
        const searchValue = inputEl.value.trim();
        try {
            let data = await searchFetch(searchValue, page);
            if (data.hits.length === 0) {
                iziToast.error({
                    backgroundColor: "#EF4040",
                    progressBarColor: "#FFBEBE",
                    position: "topCenter",
                    messageColor: "#FFFFFF",
                    icon: false,
                    position: `topRight`,
                    message: "Sorry, there are no images matching your search query. Please try again!",
                });
                loaderEl.classList.replace("is-visible", "non-visible");
                return;
            } else {
                divEl.insertAdjacentHTML("beforeend", createGallery(data.hits));
                galleryGrid.refresh();
                loaderEl.classList.replace("is-visible", "non-visible");
                userSearch = searchValue;
                totalHits = data.totalHits;
                divEl.insertAdjacentElement("afterend", loaderEl);
                if (totalHits < 15) {
                    iziToast.error({
                        backgroundColor: "#EF4040",
                        progressBarColor: "#FFBEBE",
                        position: "topCenter",
                        messageColor: "#FFFFFF",
                        icon: false,
                        position: `topRight`,
                        message: "We're sorry, but you've reached the end of search results.",
                    });
                    fetchPostsBtn.classList.replace("is-visible", "non-visible");
                    return;
                }
                fetchPostsBtn.classList.replace("non-visible", "is-visible");
            }
        } catch (error) {
            console.log(error);
        }
    }
}


formEl.addEventListener("submit", () => handleSearch(event));

fetchPostsBtn.addEventListener("click", async () => {
    try {
        loaderEl.classList.replace("non-visible", "is-visible");
        let elementPerPage = 15;
        const totalPages = Math.ceil(totalHits / elementPerPage);
        page += 1;
        const gallery = await searchFetch(userSearch, page);
        loaderEl.classList.replace("is-visible", "non-visible");
        divEl.insertAdjacentHTML("beforeend", createGallery(gallery.hits));
        const galleryBox = document.querySelector(".img-card");
        const imgCardHeight = 2 * galleryBox.getBoundingClientRect().height;
        window.scrollBy({
            top: imgCardHeight,
            left: 0,
            behavior: "smooth",
        });
        galleryGrid.refresh();
        if (page === totalPages) {
            iziToast.error({
                backgroundColor: "#EF4040",
                progressBarColor: "#FFBEBE",
                position: "topCenter",
                messageColor: "#FFFFFF",
                icon: false,
                position: `topRight`,
                message: "We're sorry, but you've reached the end of search results.",
            })
            fetchPostsBtn.classList.replace("is-visible", "non-visible");
            return;
        }
    } catch (error) {
        console.log(error);
    }
});