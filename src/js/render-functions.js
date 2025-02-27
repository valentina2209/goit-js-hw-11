import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const galleryEl = document.querySelector(".gallery");
let lightbox = null;

export const clearGallery = () => {
  galleryEl.innerHTML = "";
};

export const renderImages = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
      <li class="photo-card">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes: ${likes}</b></p>
          <p class="info-item"><b>Views: ${views}</b></p>
          <p class="info-item"><b>Comments: ${comments}</b></p>
          <p class="info-item"><b>Downloads: ${downloads}</b></p>
        </div>
      </li>
      `;
      }
    )
    .join("");

  galleryEl.insertAdjacentHTML("beforeend", markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
};

export const showLoader = () => {
  document.querySelector(".loader").hidden = false;
};

export const hideLoader = () => {
  document.querySelector(".loader").hidden = true;
};

export const notifyError = message => {
  iziToast.error({
    title: "Error",
    message,
    position: "topRight",
  });
};

export const notifyInfo = message => {
  iziToast.info({
    title: "Info",
    message,
    position: "topRight",
  });
};
