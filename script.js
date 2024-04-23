const screen = document.querySelector("#screen");
const btn = document.querySelectorAll(".btn");

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;

    if (btnText === "×") btnText = "*";
    if (btnText === "÷") btnText = "/";
    screen.value += btnText;
  });
});

function sin() {
  screen.value = Math.sin(screen.value);
}
function cos() {
  screen.value = Math.cos(screen.value);
}
function tan() {
  screen.value = Math.tan(screen.value);
}
function pow() {
  screen.value = Math.pow(screen.value, 2);
}
function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}
function pi() {
  screen.value = 3.1415926535;
}
function euler() {
  screen.value = 2.71828;
}
function factorial() {
  let i, num, f;
  f = 1;
  num = screen.value;

  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screen.value = f;
}

function backspc () {
    screen.value = screen.value.substr(0, screen.value.length - 1)
}
