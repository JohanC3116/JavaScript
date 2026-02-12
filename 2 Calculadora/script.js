// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => {
//   item.onclick = () => {
//     if (item.id == "clear") {
//       display.innerText = "";
//     } else if (item.id == "backspace") {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") {
//       display.innerText = "Null";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });

// const themeToggleBtn = document.querySelector(".tema-toggler");
// const calculator = document.querySelector(".calculator");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (item.id == "equal" && display.innerText == "") {
      display.innerText = "Null";
    } else if (item.id == "equal" && display.innerText != "") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += item.id;
    }
  };
});

const tema = document.querySelector(".tema-toggler");
const cal = document.querySelector(".calculator");

let itsdark = true;
tema.onclick = () => {
  cal.classList.toggle("dark");
  tema.classList.toggle("active");
  itsdark = !itsdark;
};
