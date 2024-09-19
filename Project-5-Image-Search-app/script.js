const accessKey = "57FStjqPyZMLQRdnZqG8OQ5Xr6wGXOJBxcz_A8Gm0H0";

var getForm = document.querySelector("#form");
var getInput = document.querySelector("#searchInput");
var getButton = document.querySelector("#searchBtn");
var getResult = document.querySelector(".search-results");
var showMore = document.querySelector("#showMore");

var inputData = "";
var page = 1;

async function searchImages() {
    inputData = getInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&per_page=24&client_id=${accessKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      
      const results = data.results;
      results.forEach((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("images","search-results");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        const linkText = document.createTextNode(result.alt_description);
        imageLink.appendChild(linkText);
        
        console.log(linkText)
  
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        getResult.appendChild(imageWrapper);
      });
  
      if (data.total_pages > page) {
        showMore.style.display = "block";
      } else {
        showMore.style.display = "none";
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
getForm.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
  showMore.style.display = "block";
  getResult.innerHTML = ""
});

showMore.addEventListener("click", () => {
  page++;
  searchImages();
});