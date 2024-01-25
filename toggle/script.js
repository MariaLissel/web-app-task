const buttonJs = document.querySelector("button"); // Variable für die .class Button gemacht

let state = "night";

function render() {
  if (state == "morning") {
    document.title = "Good Morning";
    document.body.classList.remove("night");
    document.body.classList.add("morning");
  } else if (state == "night") {
    document.title = "Good Night";
    document.body.classList.remove("morning");
    document.body.classList.add("night");
  }
}

buttonJs.addEventListener("click", (event) => {
  if (state == "morning") {
    state = "night";
  } else {
    state = "morning";
  }
  render();
});

render();

buttonJs.removeAttribute("hidden");
