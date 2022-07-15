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
  } else if (ic1.value == "" && ic2.value == "") {
    titzb.innerHTML = " Gjej diferencen e thyesave";
    titzb.style.backgroundColor = " #3f2b86e8";
  } else {
    titzb.innerHTML = "Gabim ⛔️  Provo perseri!";
    titzb.style.backgroundColor = "#8b2025";
  }
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

/*
//zbritja
//zbritja
//zbritja
//zbritja
//zbritja
//zbritja
//zbritja
//zbritja

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
let za, zb;
for (let i = 0; i < 20000; i++) {
  if (zaa > zbb) {
    za = zaa;
    zb = zbb;
    break;
  }
}
ia1.value = za;
ia2.value = za1;
ib1.value = zb;
ib2.value = zb1;

let pj1 = za / za1;
let pj2 = zb / zb1;
let dif = pj1 - pj2;
let aa2 = za - zb;
btnzbr.addEventListener("click", function () {
  if (
    (ic1.value == aa2 && ic2.value == za1) ||
    pj1 - pj2 == ic1.value / ic2.value
  ) {
    titzb.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titzb.style.backgroundColor = "#1d9768";
  } else if (ic1.value == "" && ic2.value == "") {
    titzb.innerHTML = " Gjej diferencen e thyesave";
    titzb.style.backgroundColor = " #3f2b86e8";
  } else {
    titzb.innerHTML = "Gabim ⛔️  Provo perseri!";
    titzb.style.backgroundColor = "#8b2025";
  }

  zaa = Math.floor(Math.random() * 10) + 1;
  zbb = Math.floor(Math.random() * 10) + 1;
  za1 = Math.floor(Math.random() * 10) + 1;
  zb1 = za1;

  for (let i = 0; i < 20000; i++) {
    if (zaa > zbb) {
      za = zaa;
      zb = zbb;
      break;
    }
  }

  ia1.value = za;
  ia2.value = za1;
  ib1.value = zb;
  ib2.value = zb1;

  pj1 = za / za1;
  pj2 = zb / zb1;
  dif = pj1 - pj2;

  ic1.value = null;
  ic2.value = null;
}); 
*/
