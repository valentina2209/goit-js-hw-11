import { fetchImages } from "./js/pixabay-api.js";
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
  notifyError,
} from "./js/render-functions.js";

const form = document.querySelector(".search-form");

form.addEventListener("submit", async event => {
  event.preventDefault();

  const query = event.currentTarget.query.value.trim();
  if (query === "") {
    notifyError("Please enter a search query.");
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await fetchImages(query);
    hideLoader();

    if (data.hits.length === 0) {
      notifyError(
        "Sorry, there are no images matching your search query. Please try again!"
      );
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    hideLoader();
    notifyError("Something went wrong. Please try again later.");
    console.error(error);
  }
});

