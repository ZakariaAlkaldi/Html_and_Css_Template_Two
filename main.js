let toggle = document.querySelector("header nav .toggle-menu");
let ul = document.querySelector("header nav ul");

toggle.onclick = function () {
  ul.classList.toggle("hide");
};
