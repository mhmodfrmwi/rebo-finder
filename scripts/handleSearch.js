import { setSearchResult } from "./setSearchResult";
import { messageElement, loaderElement } from "./elements";
import { preventEmptyField } from "./preventEmptyField";
import { setLoadingStat } from "./setLoadingStat";
export const handleSearch = async (inputData, isUserSellected) => {
  if (preventEmptyField(inputData)) {
    setLoadingStat(true);
    messageElement.textContent = "";
    const api = "https://api.github.com/search/users?q=";
    let typeOfSearch = isUserSellected ? "+type:user" : "+type:org";
    let status = fetch(`${api}${inputData}${typeOfSearch}`);
    fetch(`${api}${inputData}${typeOfSearch}`)
      .then((result) => result.json())
      .then((response) => {
        setSearchResult(response.items);
      })
      .finally(() => setLoadingStat(false));
  } else {
    messageElement.textContent = "please enter your search input👆";
  }
};
