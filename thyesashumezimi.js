const i11 = document.querySelector("#i11");
const i12 = document.querySelector("#i12");
const i21 = document.querySelector("#i21");
const i22 = document.querySelector("#i22");
const i31 = document.querySelector("#i31");
const i32 = document.querySelector("#i32");
const btnshmz = document.querySelector("#btnshmz");
const titullshumezimi = document.querySelector("#titullshumezimi");

let rnd11 = Math.floor(Math.random() * 10) + 1;
let rnd12 = Math.floor(Math.random() * 10) + 1;
let rnd21 = Math.floor(Math.random() * 10) + 1;
let rnd22 = Math.floor(Math.random() * 10) + 1;

i11.value = rnd11;
i12.value = rnd12;
i21.value = rnd21;
i22.value = rnd22;

let th1 = rnd11 / rnd12;
let th2 = rnd21 / rnd22;
let total = th1 * th2;

btnshmz.addEventListener("click", function () {
  if (
    (i31.value == rnd11 * rnd12 && i32.value == rnd21 * rnd22) ||
    total == i31.value / i32.value
  ) {
    titullshumezimi.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullshumezimi.style.backgroundColor = "#1d9768";
  } else if (i31.value == "" && i32.value == "") {
    titullshumezimi.innerHTML = " Gjej shumezimin e thyesave";
    titullshumezimi.style.backgroundColor = " #3f2b86e8";
  } else {
    titullshumezimi.innerHTML = "Gabim ⛔️  Provo perseri!";
    titullshumezimi.style.backgroundColor = "#8b2025";
  }

  rnd11 = Math.floor(Math.random() * 10) + 1;
  rnd12 = Math.floor(Math.random() * 10) + 1;
  rnd21 = Math.floor(Math.random() * 10) + 1;
  rnd22 = Math.floor(Math.random() * 10) + 1;

  i11.value = rnd11;
  i12.value = rnd12;
  i21.value = rnd21;
  i22.value = rnd22;

  th1 = rnd11 / rnd12;
  th2 = rnd21 / rnd22;
  total = th1 * th2;

  i31.value = null;
  i32.value = null;
});
