import { cardElement } from "./elements";
export const setSearchResult = (response) => {
  cardElement.innerHTML = null;
  let result = "";
  if (response?.length === 0) {
    result = `<p>No result found</p>`;
  } else {
    console.log(response);
    response.forEach((element) => {
      result += `
      <article class="card">
      <img class="img" loading="lazy" src="${element.avatar_url}"/>
      <h2 class="name">${element.login}</h2>
      </article>
      `;
    });
  }
  console.log(result);
  cardElement.innerHTML = result;
};
