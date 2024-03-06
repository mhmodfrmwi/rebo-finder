import { inputField, searchButton, radioElement } from "./scripts/elements";
import { handleSearch } from "./scripts/handleSearch";

const isUserSellected = (radio) => {
  return radio.checked;
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleSearch(inputField.value, isUserSellected(radioElement));
});
