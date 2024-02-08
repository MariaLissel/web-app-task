const rgbValue = document.getElementById("rgb");
const background = document.querySelector("body");

const mixerRed = document.getElementById("red");
const mixerGreen = document.getElementById("green");
const mixerBlue = document.getElementById("blue");

const randomColor = document.getElementById("random-color");

let state = {
  r: 96,
  g: 0,
  b: 255,
};

function numberToHex(num) {
  return num.toString(16).padStart(2, "0");
}

const savedState = localStorage.getItem("color-mixer-state");
if (savedState) {
  state = JSON.parse(savedState);
}

function render() {
  // Save state in localStorage
  localStorage.setItem("color-mixer-state", JSON.stringify(state));

  background.style.backgroundColor = `rgb(${state.r}, ${state.g}, ${state.b})`;

  rgbValue.textContent =
    "#" + numberToHex(state.r) + numberToHex(state.g) + numberToHex(state.b);

  mixerRed.value = state.r;
  mixerGreen.value = state.g;
  mixerBlue.value = state.b;
}

// Event Listener
red.addEventListener("input", () => {
  state.r = Number(mixerRed.value);
  render();
});

green.addEventListener("input", () => {
  state.g = Number(mixerGreen.value);
  render();
});

blue.addEventListener("input", () => {
  state.b = Number(mixerBlue.value);
  render();
});

randomColor.addEventListener("click", () => {
  const p = fetch("https://dummy-apis.netlify.app/api/color");
  p.then((response) => {
    if (response.ok) {
      return response.json();
    }
  }).then((data) => {
    console.log(data);
    state.r = data.rgb.r;
    state.g = data.rgb.g;
    state.b = data.rgb.b;
    render();
  });
});

render();
