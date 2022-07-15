const titullmes = document.querySelector("#titullmes");
const mesinp1 = document.querySelector("#mesinp1");
const mesinp2 = document.querySelector("#mesinp2");
const mesinp3 = document.querySelector("#mesinp3");
const mesinp4 = document.querySelector("#mesinp4");
const inpperdoruesi = document.querySelector("#inpperdoruesi");
const btnmes = document.querySelector("#btnmes");

let nnm1 = Math.floor(Math.random() * 16) + 1;
let nnm2 = Math.floor(Math.random() * 16) + 1;
let nnm3 = Math.floor(Math.random() * 16) + 1;
let nnm4 = Math.floor(Math.random() * 16) + 1;
let nm1, nm2, nm3, nm4, mess;

let sa = 0,
  ga = 0;

for (let i = 0; i < 20000; i++) {
  mess = (nnm1 + nnm2 + nnm3 + nnm4) / 4;

  if (mess % 4 == 0) {
    nm1 = nnm1;
    nm2 = nnm2;
    nm3 = nnm3;
    nm4 = nnm4;
    break;
  }

  nnm1 = Math.floor(Math.random() * 16) + 1;
  nnm2 = Math.floor(Math.random() * 16) + 1;
  nnm3 = Math.floor(Math.random() * 16) + 1;
  nnm4 = Math.floor(Math.random() * 16) + 1;
}

mesinp1.value = nm1;
mesinp2.value = nm2;
mesinp3.value = nm3;
mesinp4.value = nm4;

let mes = (nm1 + nm2 + nm3 + nm4) / 4;

btnmes.addEventListener("click", function () {
  if (inpperdoruesi.value == mes) {
    titullmes.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmes.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi.value == "") {
    titullmes.innerHTML = " Gjej mesataren e kater numrave";
    titullmes.style.backgroundColor = " #3f2b86e8";
  } else {
    titullmes.innerHTML = "Gabim ⛔️ ishte : " + mes + " Provo perseri!";
    titullmes.style.backgroundColor = "#8b2025";
    ga++;
  }

  nnm1 = Math.floor(Math.random() * 16) + 1;
  nnm2 = Math.floor(Math.random() * 16) + 1;
  nnm3 = Math.floor(Math.random() * 16) + 1;
  nnm4 = Math.floor(Math.random() * 16) + 1;
  for (let i = 0; i < 20000; i++) {
    mess = (nnm1 + nnm2 + nnm3 + nnm4) / 4;

    if (mess % 4 == 0) {
      nm1 = nnm1;
      nm2 = nnm2;
      nm3 = nnm3;
      nm4 = nnm4;
      break;
    }

    nnm1 = Math.floor(Math.random() * 16) + 1;
    nnm2 = Math.floor(Math.random() * 16) + 1;
    nnm3 = Math.floor(Math.random() * 16) + 1;
    nnm4 = Math.floor(Math.random() * 16) + 1;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  mesinp1.value = nm1;
  mesinp2.value = nm2;
  mesinp3.value = nm3;
  mesinp4.value = nm4;

  mes = (nm1 + nm2 + nm3 + nm4) / 4;
  inpperdoruesi.value = null;
});

// Vendos nr ne rend rrites

// Vendos nr ne rend rrites

// Vendos nr ne rend rrites

// Vendos nr ne rend rrites

// Vendos nr ne rend rrites

// Vendos nr ne rend rrites
const titullrr = document.querySelector("#titullrr");
const inpr1 = document.querySelector("#inpr1");
const inpr2 = document.querySelector("#inpr2");
const inpr3 = document.querySelector("#inpr3");
const inpr4 = document.querySelector("#inpr4");
const inprf1 = document.querySelector("#inprf1");
const inprf2 = document.querySelector("#inprf2");
const inprf3 = document.querySelector("#inprf3");
const inprf4 = document.querySelector("#inprf4");
const btnrr = document.querySelector("#btnrr");

let nr11 = Math.floor(Math.random() * 100) + 1;
let nr22 = Math.floor(Math.random() * 100) + 1;
let nr33 = Math.floor(Math.random() * 100) + 1;
let nr44 = Math.floor(Math.random() * 100) + 1;

let nr1, nr2, nr3, nr4;
for (let i = 0; i < 1000; i++) {
  if (
    nr11 != nr22 &&
    nr11 != nr33 &&
    nr11 != nr44 &&
    nr22 != nr33 &&
    nr22 != nr44 &&
    nr33 != nr44
  ) {
    nr1 = nr11;
    nr2 = nr22;
    nr3 = nr33;
    nr4 = nr44;

    break;
  }
  nr11 = Math.floor(Math.random() * 100) + 1;
  nr22 = Math.floor(Math.random() * 100) + 1;
  nr33 = Math.floor(Math.random() * 100) + 1;
  nr44 = Math.floor(Math.random() * 100) + 1;
}
inpr1.value = nr1;
inpr2.value = nr2;
inpr3.value = nr3;
inpr4.value = nr4;

btnrr.addEventListener("click", function () {
  if (
    (inprf1.value == nr1 ||
      inprf1.value == nr2 ||
      inprf1.value == nr3 ||
      inprf1.value == nr4) &&
    (inprf2.value == nr1 ||
      inprf2.value == nr2 ||
      inprf2.value == nr3 ||
      inprf2.value == nr4) &&
    (inprf3.value == nr1 ||
      inprf3.value == nr2 ||
      inprf3.value == nr3 ||
      inprf3.value == nr4) &&
    (inprf4.value == nr1 ||
      inprf4.value == nr2 ||
      inprf4.value == nr3 ||
      inprf4.value == nr4)
  ) {
    if (
      inprf1.value < inprf2.value &&
      inprf2.value < inprf3.value &&
      inprf3.value < inprf4.value
    ) {
      titullrr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullrr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (
      inprf1.value == "" &&
      inprf2.value == "" &&
      inprf3.value == "" &&
      inprf4.value == ""
    ) {
      titullrr.innerHTML = " Vendos numrat ne rend rrites";
      titullrr.style.backgroundColor = " #3f2b86e8";
    } else {
      titullrr.innerHTML = "Gabim ⛔️, Provo perseri!";
      titullrr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (
    inprf1.value == "" &&
    inprf2.value == "" &&
    inprf3.value == "" &&
    inprf4.value == ""
  ) {
    titullrr.innerHTML = " Vendos numrat ne rend rrites";
    titullrr.style.backgroundColor = " #3f2b86e8";
  } else {
    titullrr.innerHTML = "Gabim ⛔️,vendos numrat e dhene";
    titullrr.style.backgroundColor = "#8b2025";
    ga++;
  }

  nr11 = Math.floor(Math.random() * 100) + 1;
  nr22 = Math.floor(Math.random() * 100) + 1;
  nr33 = Math.floor(Math.random() * 100) + 1;
  nr44 = Math.floor(Math.random() * 100) + 1;

  for (let i = 0; i < 1000; i++) {
    if (
      nr11 != nr22 &&
      nr11 != nr33 &&
      nr11 != nr44 &&
      nr22 != nr33 &&
      nr22 != nr44 &&
      nr33 != nr44
    ) {
      nr1 = nr11;
      nr2 = nr22;
      nr3 = nr33;
      nr4 = nr44;

      break;
    }
    nr11 = Math.floor(Math.random() * 100) + 1;
    nr22 = Math.floor(Math.random() * 100) + 1;
    nr33 = Math.floor(Math.random() * 100) + 1;
    nr44 = Math.floor(Math.random() * 100) + 1;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  inpr1.value = nr1;
  inpr2.value = nr2;
  inpr3.value = nr3;
  inpr4.value = nr4;

  inprf1.value = null;
  inprf2.value = null;
  inprf3.value = null;
  inprf4.value = null;
});

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

// Gjej moden e numrave te dhene

const titullmoda = document.querySelector("#titullmoda");
const modainp1 = document.querySelector("#modainp1");
const modainp2 = document.querySelector("#modainp2");
const modainp3 = document.querySelector("#modainp3");
const modainp4 = document.querySelector("#modainp4");
const modainp5 = document.querySelector("#modainp5");
const inpperdoruesi1 = document.querySelector("#inpperdoruesi1");
const btnmoda = document.querySelector("#btnmoda");

let rnm1 = Math.floor(Math.random() * 5) + 1;
let rnm2 = Math.floor(Math.random() * 5) + 1;
let rnm3 = Math.floor(Math.random() * 5) + 1;
let rnm4 = Math.floor(Math.random() * 5) + 1;
let rnm5 = Math.floor(Math.random() * 5) + 1;

modainp1.value = rnm1;
modainp2.value = rnm2;
modainp3.value = rnm3;
modainp4.value = rnm4;
modainp5.value = rnm5;

let k1 = 1,
  k2 = 1,
  k3 = 1,
  k4 = 1,
  k5 = 1;

if (modainp1.value == modainp2.value) {
  k1++;
}
if (modainp1.value == modainp3.value) {
  k1++;
}
if (modainp1.value == modainp4.value) {
  k1++;
}
if (modainp1.value == modainp5.value) {
  k1++;
}
if (modainp2.value == modainp1.value) {
  k2++;
}
if (modainp2.value == modainp3.value) {
  k2++;
}
if (modainp2.value == modainp4.value) {
  k2++;
}
if (modainp2.value == modainp5.value) {
  k2++;
}
if (modainp3.value == modainp2.value) {
  k3++;
}
if (modainp3.value == modainp1.value) {
  k3++;
}
if (rnm3 == rnm4) {
  k3 = k3 + 1;
}
if (modainp3.value == modainp5.value) {
  k3++;
}
if (modainp4.value == modainp2.value) {
  k4++;
}
if (modainp4.value == modainp1.value) {
  k4++;
}
if (modainp4.value == modainp3.value) {
  k4++;
}
if (modainp4.value == modainp5.value) {
  k4++;
}
if (modainp5.value == modainp2.value) {
  k5++;
}
if (modainp5.value == modainp1.value) {
  k5++;
}
if (modainp5.value == modainp3.value) {
  k5++;
}
if (modainp5.value == modainp4.value) {
  k5++;
}

btnmoda.addEventListener("click", function () {
  if (inpperdoruesi1.value == rnm1 && k1 >= 3) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inpperdoruesi1.value == rnm1 &&
    k1 == 2 &&
    k2 != 3 &&
    k3 != 3 &&
    k4 != 3 &&
    k5 != 3
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi1.value == rnm2 && k2 >= 3) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inpperdoruesi1.value == rnm2 &&
    k2 == 2 &&
    k1 != 3 &&
    k3 != 3 &&
    k4 != 3 &&
    k5 != 3
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi1.value == rnm3 && k3 >= 3) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inpperdoruesi1.value == rnm3 &&
    k3 == 2 &&
    k2 != 3 &&
    k1 != 3 &&
    k4 != 3 &&
    k5 != 3
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi1.value == rnm4 && k4 >= 3) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inpperdoruesi1.value == rnm4 &&
    k4 == 2 &&
    k2 != 3 &&
    k3 != 3 &&
    k2 != 3 &&
    k5 != 3
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi1.value == rnm5 && k5 >= 3) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inpperdoruesi1.value == rnm5 &&
    k5 == 2 &&
    k2 != 3 &&
    k3 != 3 &&
    k4 != 3 &&
    k1 != 3
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    (inpperdoruesi1.value == rnm1 ||
      inpperdoruesi1.value == rnm2 ||
      inpperdoruesi1.value == rnm3 ||
      inpperdoruesi1.value == rnm5 ||
      inpperdoruesi1.value == rnm4) &&
    k1 == 1 &&
    k2 == 1 &&
    k3 == 1 &&
    k4 == 1 &&
    k5 == 1
  ) {
    titullmoda.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmoda.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi1.value == "") {
    titullmoda.innerHTML = " Gjej moden e numrave te dhene";
    titullmoda.style.backgroundColor = " #3f2b86e8";
    sa++;
  } else {
    titullmoda.innerHTML = "Gabim ⛔️,vendos moden e sakte";
    titullmoda.style.backgroundColor = "#8b2025";
    sa++;
  }
  k1 = 1;
  k2 = 1;
  k3 = 1;
  k4 = 1;
  k5 = 1;

  rnm1 = Math.floor(Math.random() * 5) + 1;
  rnm2 = Math.floor(Math.random() * 5) + 1;
  rnm3 = Math.floor(Math.random() * 5) + 1;
  rnm4 = Math.floor(Math.random() * 5) + 1;
  rnm5 = Math.floor(Math.random() * 5) + 1;

  modainp1.value = rnm1;
  modainp2.value = rnm2;
  modainp3.value = rnm3;
  modainp4.value = rnm4;
  modainp5.value = rnm5;

  if (modainp1.value == modainp2.value) {
    k1++;
  }
  if (modainp1.value == modainp3.value) {
    k1++;
  }
  if (modainp1.value == modainp4.value) {
    k1++;
  }
  if (modainp1.value == modainp5.value) {
    k1++;
  }
  if (modainp2.value == modainp1.value) {
    k2++;
  }
  if (modainp2.value == modainp3.value) {
    k2++;
  }
  if (modainp2.value == modainp4.value) {
    k2++;
  }
  if (modainp2.value == modainp5.value) {
    k2++;
  }
  if (modainp3.value == modainp2.value) {
    k3++;
  }
  if (modainp3.value == modainp1.value) {
    k3++;
  }
  if (rnm3 == rnm4) {
    k3 = k3 + 1;
  }
  if (modainp3.value == modainp5.value) {
    k3++;
  }
  if (modainp4.value == modainp2.value) {
    k4++;
  }
  if (modainp4.value == modainp1.value) {
    k4++;
  }
  if (modainp4.value == modainp3.value) {
    k4++;
  }
  if (modainp4.value == modainp5.value) {
    k4++;
  }
  if (modainp5.value == modainp2.value) {
    k5++;
  }
  if (modainp5.value == modainp1.value) {
    k5++;
  }
  if (modainp5.value == modainp3.value) {
    k5++;
  }
  if (modainp5.value == modainp4.value) {
    k5++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  inpperdoruesi1.value = null;
});

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren

// GJej MEsoren
const titullmesore = document.querySelector("#titullmesore");
const mesoreinp1 = document.querySelector("#mesoreinp1");
const mesoreinp2 = document.querySelector("#mesoreinp2");
const mesoreinp3 = document.querySelector("#mesoreinp3");
const mesoreinp4 = document.querySelector("#mesoreinp4");
const mesoreinp5 = document.querySelector("#mesoreinp5");
const inpperdoruesi2 = document.querySelector("#inpperdoruesi2");
const btnmoesore = document.querySelector("#btnmoesore");

let nme1 = Math.floor(Math.random() * 10) + 1;
let nme2 = Math.floor(Math.random() * 10) + 1;
let nme3 = Math.floor(Math.random() * 10) + 1;
let nme4 = Math.floor(Math.random() * 10) + 1;
let nme5 = Math.floor(Math.random() * 10) + 1;
let vec = [nme1, nme2, nme3, nme4, nme5];
let temp;
mesoreinp1.value = nme1;
mesoreinp2.value = nme2;
mesoreinp3.value = nme3;
mesoreinp4.value = nme4;
mesoreinp5.value = nme5;

for (let f = 0; f < vec.length; f++) {
  console.log(" v1 : " + vec[f]);
}

for (let i = 0; i < vec.length; i++) {
  for (let j = i + 1; j < vec.length; j++) {
    if (vec[i] < vec[j]) {
      temp = vec[i];
      vec[i] = vec[j];
      vec[j] = temp;
    }
  }
}

for (let d = 0; d < vec.length; d++) {
  console.log(" v2 : " + vec[d]);
}

btnmoesore.addEventListener("click", function () {
  if (inpperdoruesi2.value == vec[2]) {
    titullmesore.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmesore.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpperdoruesi2.value == "") {
    titullmesore.innerHTML = " Gjej mesoren e numrave te dhene";
    titullmesore.style.backgroundColor = " #3f2b86e8";
  } else {
    titullmesore.innerHTML = "Gabim ⛔️,ishte:" + vec[2] + " ,Provo perseri!";
    titullmesore.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nme1 = Math.floor(Math.random() * 10) + 1;
  nme2 = Math.floor(Math.random() * 10) + 1;
  nme3 = Math.floor(Math.random() * 10) + 1;
  nme4 = Math.floor(Math.random() * 10) + 1;
  nme5 = Math.floor(Math.random() * 10) + 1;
  vec = [nme1, nme2, nme3, nme4, nme5];
  mesoreinp1.value = nme1;
  mesoreinp2.value = nme2;
  mesoreinp3.value = nme3;
  mesoreinp4.value = nme4;
  mesoreinp5.value = nme5;
  vec.sort();
  inpperdoruesi2.value = null;
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
