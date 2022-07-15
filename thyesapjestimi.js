const in11 = document.querySelector("#in11");
const in12 = document.querySelector("#in12");
const in21 = document.querySelector("#in21");
const in22 = document.querySelector("#in22");
const in31 = document.querySelector("#in31");
const in32 = document.querySelector("#in32");
const btnpjestim = document.querySelector("#btnpjestim");
const titullpjestimi = document.querySelector("#titullpjestimi");

let rrnd11 = Math.floor(Math.random() * 10) + 1;
let rrnd12 = Math.floor(Math.random() * 10) + 1;
let rrnd21 = Math.floor(Math.random() * 10) + 1;
let rrnd22 = Math.floor(Math.random() * 10) + 1;

in11.value = rrnd11;
in12.value = rrnd12;
in21.value = rrnd21;
in22.value = rrnd22;

let thy1 = rrnd11 / rrnd12;
let thy2 = rrnd21 / rrnd22;
let totali = thy1 / thy2;

btnpjestim.addEventListener("click", function () {
  if (
    (in31.value == rrnd11 * rrnd22 && in32.value == rrnd21 * rrnd12) ||
    totali == in31.value / in32.value
  ) {
    titullpjestimi.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullpjestimi.style.backgroundColor = "#1d9768";
  } else if (i31.value == "" && i32.value == "") {
    titullpjestimi.innerHTML = " Gjej pjestimin e thyesave";
    titullpjestimi.style.backgroundColor = " #3f2b86e8";
  } else {
    titullpjestimi.innerHTML = "Gabim ⛔️  Provo perseri!";
    titullpjestimi.style.backgroundColor = "#8b2025";
  }

  rrnd11 = Math.floor(Math.random() * 10) + 1;
  rrnd12 = Math.floor(Math.random() * 10) + 1;
  rrnd21 = Math.floor(Math.random() * 10) + 1;
  rrnd22 = Math.floor(Math.random() * 10) + 1;

  in11.value = rrnd11;
  in12.value = rrnd12;
  in21.value = rrnd21;
  in22.value = rrnd22;

  thy1 = rrnd11 / rrnd12;
  thy2 = rrnd21 / rrnd22;
  totali = thy1 / thy2;

  in31.value = null;
  in32.value = null;
});
