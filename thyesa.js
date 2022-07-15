const inpa11 = document.querySelector("#ina1a");
const inpa12 = document.querySelector("#ina1b");
const inpa21 = document.querySelector("#ina2a");
const inpa22 = document.querySelector("#ina2b");
const inpa31 = document.querySelector("#ina3a");
const inpa32 = document.querySelector("#ina3b");
const btnaa = document.querySelector("#btnsh1");
const tit = document.querySelector("#ttitulldele1");

let a = Math.floor(Math.random() * 10) + 1;
let b = Math.floor(Math.random() * 10) + 1;
let a1 = Math.floor(Math.random() * 10) + 1;
let b1 = a1;
inpa11.value = a;
inpa12.value = a1;
inpa21.value = b;
inpa22.value = b1;
let aa1 = a + b;

let sa = 0,
  ga = 0;

btnaa.addEventListener("click", function () {
  if (
    (inpa31.value == aa1 && inpa32.value == b1) ||
    inpa31.value / inpa32.value == a / a1 + b / b1
  ) {
    tit.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    tit.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpa31.value == "" && inpa32.value == "") {
    tit.innerHTML = " Gjej shumen e thyesave";
    tit.style.backgroundColor = " #3f2b86e8";
  } else {
    tit.innerHTML = "Gabim ⛔️  Provo perseri!";
    tit.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  a1 = Math.floor(Math.random() * 10) + 1;
  b1 = a1;

  inpa11.value = a;
  inpa12.value = a1;
  inpa21.value = b;
  inpa22.value = b1;
  inpa31.value = null;
  inpa32.value = null;
  aa1 = a + b;
});

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

//Thyesa pjestimi

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
    sa++;
  } else if (i31.value == "" && i32.value == "") {
    titullpjestimi.innerHTML = " Gjej pjestimin e thyesave";
    titullpjestimi.style.backgroundColor = " #3f2b86e8";
  } else {
    titullpjestimi.innerHTML = "Gabim ⛔️  Provo perseri!";
    titullpjestimi.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

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

/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
//thyesa shumezimi

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
    sa++;
  } else if (i31.value == "" && i32.value == "") {
    titullshumezimi.innerHTML = " Gjej shumezimin e thyesave";
    titullshumezimi.style.backgroundColor = " #3f2b86e8";
  } else {
    titullshumezimi.innerHTML = "Gabim ⛔️  Provo perseri!";
    titullshumezimi.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

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

/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/

// thyesa zbritja
const ia1 = document.querySelector("#ina1a2");
const ia2 = document.querySelector("#ina1b2");
const ib1 = document.querySelector("#ina2a2");
const ib2 = document.querySelector("#ina2b2");
const ic1 = document.querySelector("#ina3a3");
const ic2 = document.querySelector("#ina3b3");
const btnzbr = document.querySelector("#btnzbri");
const titzb = document.querySelector("#titullemrifg1z");

let zaa = Math.floor(Math.random() * 10) + 1;
let zbb = Math.floor(Math.random() * 10) + 1;
let za1 = Math.floor(Math.random() * 10) + 1;
let zb1 = za1;
ia1.value = zaa;
ia2.value = za1;
ib1.value = zbb;
ib2.value = zb1;

let pj1 = zaa / za1;
let pj2 = zbb / zb1;
let dif = pj1 - pj2;
let aa2 = zaa - zbb;

btnzbr.addEventListener("click", function () {
  if (
    (ic1.value == aa2 && ic2.value == za1) ||
    pj1 - pj2 == ic1.value / ic2.value
  ) {
    titzb.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titzb.style.backgroundColor = "#1d9768";
    sa++;
  } else if (ic1.value == "" && ic2.value == "") {
    titzb.innerHTML = " Gjej diferencen e thyesave";
    titzb.style.backgroundColor = " #3f2b86e8";
  } else {
    titzb.innerHTML = "Gabim ⛔️  Provo perseri!";
    titzb.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  zaa = Math.floor(Math.random() * 10) + 1;
  zbb = Math.floor(Math.random() * 10) + 1;
  za1 = Math.floor(Math.random() * 10) + 1;
  zb1 = za1;
  ia1.value = zaa;
  ia2.value = za1;
  ib1.value = zbb;
  ib2.value = zb1;
  pj1 = zaa / za1;
  pj2 = zbb / zb1;
  dif = pj1 - pj2;
  aa2 = zaa - zbb;
  ic1.value = null;
  ic2.value = null;
});

/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/
/*  ---------------------------
  --------------------------------*/

// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie

document.querySelector("#resets").addEventListener("click", function () {
  sa = 0;
  ga = 0;
  document.querySelector("#p").textContent = "";
});
// Kodi per shfaqjen e infos
// kodi per shfaqjen e infos
// kodi per shfaqjen e infos

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
