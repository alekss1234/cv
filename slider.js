let counter = 1;
setInterval(function () {
  document.getElementById("r" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 3500);

let image = 1;
setInterval(function () {
  document.getElementById("i" + image).checked = true;
  image++;
  if (image > 3) {
    image = 1;
  }
}, 3000);
// per pjesen e headerit qe te behet scroll
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

/*






*/
