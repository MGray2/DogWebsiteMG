const api_url = "https://random.dog/woof.json";
const body = document.body;
const button = document.querySelector(".actualButton");
const image = document.querySelector("#imageDisplay");

async function getInfo() {
  const response = await fetch(api_url);
  const translated = response.json();
  return translated;
}

async function setPicture() {
  let information = await getInfo();
  image.src = information.url;
}

button.addEventListener("click", setPicture);
button.addEventListener(
  "click",
  () => {
    image.style.border = "solid";
    image.style.borderColor = "black";
  },
  { once: true }
);
button.addEventListener("click", () => {
  switch (image.style.borderColor) {
    case "black":
      image.style.borderColor = "red";
      break;
    case "red":
      image.style.borderColor = "orange";
      break;
    case "orange":
      image.style.borderColor = "yellow";
      break;
    case "yellow":
      image.style.borderColor = "green";
      break;
    case "green":
      image.style.borderColor = "blue";
      break;
    case "blue":
      image.style.borderColor = "purple";
      break;
    case "purple":
      image.style.borderColor = "black";
  }
});
button.addEventListener(
  "click",
  () => {
    setTimeout(buildText, 2000);
    function buildText() {
      const errorText = document.querySelector("p");
      errorText.style.color = "black";
      errorText.style.position = "absolute";
      errorText.style.top = "35%";
      errorText.style.left = "38%";
      errorText.textContent = "Oops! The image did not load. Please try again.";
    }
  },
  { once: true }
);
