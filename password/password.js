/*
Modus 1
type="password" 
input.removeAttribute("password")
input.setAttribute("type", "text")

button.textContent = "Show Password"

Modus 2
type="text"
input.removeAttribute("text")
input.setAttribute("type", "password")

button.textContent = "Hide Password"
*/

const button = document.querySelector("button");
const input = document.querySelector("input");

let state = "hidePassword";

function render() {
  if (state == "showPassword") {
    // Wo findet diese Definition statt?
    input.removeAttribute("type");
    input.setAttribute("type", "text");
    button.textContent = "Hide Password";
  } else if (state == "hidePassword") {
    input.removeAttribute("type");
    input.setAttribute("type", "password");
    button.textContent = "Show Password";
  }
}

button.addEventListener("click", (event) => {
  // event Variable wird definiert aber nicht ausgeführt
  // Code ab hier wird ausgeführt, sobald der Button geklickt wird
  if (state == "showPassword") {
    state = "hidePassword";
  } else {
    state = "showPassword";
  }
  render();
  // render ist dafür verantwortlich, das Aussehen der Webseite entsprechend dem neuen Zustand anzupassen.
});

render();
