const titullgjinia = document.querySelector("#titullgjinia");
const inputgjinia = document.querySelector("#emripp");
const btnfem = document.querySelector("#pervecem");
const btnmash = document.querySelector("#pergjithshem");
const btnfillim = document.querySelector("#fillim1");

const f1 = "mali";
const f2 = "dielli";
const f3 = "avioni";
const f4 = "tigri";
const f5 = "Pogradeci";
const f6 = "termometri";
const f7 = "miu";
const f8 = "ariu";
const f9 = "oborri";
const f10 = "akrepi";
const f11 = "lopa";
const f12 = "lavatricja";
const f13 = "shkolla";
const f14 = "mesuesja";
const f15 = "ciftelia";
const f16 = "kuzhina";
const f17 = "zyra";
const f18 = "pashaporta";
const f19 = "Tirana";
const f20 = "soba";

let ragj = Math.floor(Math.random() * 20) + 1;
let g = eval("f" + ragj);

inputgjinia.value = g;

let sa = 0,
  ga = 0;

btnfem.addEventListener("click", function () {
  if (ragj > 10) {
    titullgjinia.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullgjinia.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullgjinia.innerHTML = "Gabim ⛔️,Ishte= gjinia mashkullore !";
    titullgjinia.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  ragj = Math.floor(Math.random() * 20) + 1;
  g = eval("f" + ragj);
  inputgjinia.value = g;
});

btnmash.addEventListener("click", function () {
  if (ragj < 11) {
    titullgjinia.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullgjinia.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullgjinia.innerHTML = "Gabim ⛔️,Ishte= gjinia femerore !";
    titullgjinia.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  ragj = Math.floor(Math.random() * 20) + 1;
  g = eval("f" + ragj);
  inputgjinia.value = g;
});

btnfillim.addEventListener("click", function () {
  titullgjinia.innerHTML = "Gjej gjinine e fjales";
  titullgjinia.style.backgroundColor = "#3f2b86e8";

  ragj = Math.floor(Math.random() * 20) + 1;
  g = eval("f" + ragj);
  inputgjinia.value = g;
});

//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit
//Fjalia sipas kumtimit

const titullmenyrafj = document.querySelector("#titullmenyrafj");
const inpkum = document.querySelector("#inpkum");
const btndeftore = document.querySelector("#btnk22");
const btnpyetsore = document.querySelector("#btnk2");
const btnnxitese = document.querySelector("#btnk3");
const btndeshirore = document.querySelector("#btnk4");
const btnfillim1 = document.querySelector("#btnk5");

const a1 = "Makina ime eshte e kuqe.";
const a2 = "Luani eshte kafshe e eger.";
const a3 = "Iliri nuk meson si duhet ne shkolle.";
const a4 = "Suela eshte 7 vjec";
const a5 = "Roberti eshte nxenes shembullor.";
const a6 = " Ishe sot te mjeku?";
const a7 = "C’muaj eshte tani?";
const a8 = "C’te presesh nga ti?";
const a9 = "Sa vjec je ti ?";
const a10 = "Cfare detyra dha mesuesja?";
const a11 = "Ti duhet te shkosh me patjeter ne kurs privat!";
const a12 = "Mos na pengoni!";
const a13 = "Pusho!";
const a14 = "Hapni rrugen!";
const a15 = "Nisu!";
const a16 = "Te marrte zoti mendte!";
const a17 = "Te lente zoti pa sy!";
const a18 = "I pacim urraten!";
const a19 = "U rritshin djemte!";
const a20 = "U martofshin cupat!";

let rakum = Math.floor(Math.random() * 20) + 1;
let aa = eval("a" + rakum);

inpkum.value = aa;

btndeftore.addEventListener("click", function () {
  if (rakum < 6) {
    titullmenyrafj.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmenyrafj.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullmenyrafj.innerHTML = "Gabim ⛔️,Ishte= fjali deftore !";
    titullmenyrafj.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rakum = Math.floor(Math.random() * 20) + 1;

  aa = eval("a" + rakum);

  inpkum.value = aa;
});

btnpyetsore.addEventListener("click", function () {
  if (rakum < 11 && rakum > 5) {
    titullmenyrafj.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmenyrafj.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullmenyrafj.innerHTML = "Gabim ⛔️,Ishte= fjali pyetsore !";
    titullmenyrafj.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rakum = Math.floor(Math.random() * 20) + 1;

  aa = eval("a" + rakum);

  inpkum.value = aa;
});

btnnxitese.addEventListener("click", function () {
  if (rakum < 16 && rakum > 10) {
    titullmenyrafj.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmenyrafj.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullmenyrafj.innerHTML = "Gabim ⛔️,Ishte= fjali nxitese !";
    titullmenyrafj.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rakum = Math.floor(Math.random() * 20) + 1;

  aa = eval("a" + rakum);

  inpkum.value = aa;
});

btndeshirore.addEventListener("click", function () {
  if (rakum > 15) {
    titullmenyrafj.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullmenyrafj.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullmenyrafj.innerHTML = "Gabim ⛔️,Ishte= fjali deshirore !";
    titullmenyrafj.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rakum = Math.floor(Math.random() * 20) + 1;

  aa = eval("a" + rakum);

  inpkum.value = aa;
});

btnfillim1.addEventListener("click", function () {
  titullmenyrafj.innerHTML = " Percakto fjalite sipas kumtimit";
  titullmenyrafj.style.backgroundColor = "#3f2b86e8";

  rakum = Math.floor(Math.random() * 20) + 1;

  aa = eval("a" + rakum);

  inpkum.value = aa;
});

// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes
// shkronjat sipas rradhes

const titullshkrnj = document.querySelector("#titullshkrnj");
const inpr1 = document.querySelector("#inpr1");
const inpr2 = document.querySelector("#inpr2");
const inpr3 = document.querySelector("#inpr3");
const inpr4 = document.querySelector("#inpr4");
const inprf1 = document.querySelector("#inprf1");
const inprf2 = document.querySelector("#inprf2");
const inprf3 = document.querySelector("#inprf3");
const inprf4 = document.querySelector("#inprf4");
const btnrr = document.querySelector("#btnrr");

const b1 = "a";
const b2 = "b";
const b3 = "c";
const b4 = "d";
const b5 = "dh";
const b6 = "e";
const b7 = "f";
const b8 = "g";
const b9 = "gj";
const b10 = "h";
const b11 = "i";
const b12 = "j";
const b13 = "k";
const b14 = "l";
const b15 = "ll";
const b16 = "m";
const b17 = "n";
const b18 = "nj";
const b19 = "o";
const b20 = "p";
const b21 = "q";
const b22 = "r";
const b23 = "rr";
const b24 = "s";
const b25 = "sh";
const b26 = "t";
const b27 = "th";
const b28 = "u";
const b29 = "v";
const b30 = "x";
const b31 = "xh";
const b32 = "y";
const b33 = "z";
const b34 = "zh";

let rashk1 = Math.floor(Math.random() * 34) + 1;
let rashk2 = Math.floor(Math.random() * 34) + 1;
let rashk3 = Math.floor(Math.random() * 34) + 1;
let rashk4 = Math.floor(Math.random() * 34) + 1;
let bb1 = eval("b" + rashk1);
let bb2 = eval("b" + rashk2);
let bb3 = eval("b" + rashk3);
let bb4 = eval("b" + rashk4);

for (let i = 0; i < 10000; i++) {
  rashk1 = Math.floor(Math.random() * 34) + 1;
  rashk2 = Math.floor(Math.random() * 34) + 1;
  rashk3 = Math.floor(Math.random() * 34) + 1;
  rashk4 = Math.floor(Math.random() * 34) + 1;
  bb1 = eval("b" + rashk1);
  bb2 = eval("b" + rashk2);
  bb3 = eval("b" + rashk3);
  bb4 = eval("b" + rashk4);
  if (
    rashk1 != rashk2 &&
    rashk1 != rashk3 &&
    rashk1 != rashk4 &&
    rashk3 != rashk2 &&
    rashk4 != rashk2 &&
    rashk3 != rashk4
  ) {
    inpr1.value = bb1;
    inpr2.value = bb2;
    inpr3.value = bb3;
    inpr4.value = bb4;
    break;
  }
}

let vec = [bb1, bb2, bb3, bb4];
vec.sort();

btnrr.addEventListener("click", function () {
  inprf1.value = inprf1.value.toLowerCase();
  inprf1.value = inprf1.value.replace(/\s/g, "");

  inprf2.value = inprf2.value.toLowerCase();
  inprf2.value = inprf2.value.replace(/\s/g, "");

  inprf3.value = inprf3.value.toLowerCase();
  inprf3.value = inprf3.value.replace(/\s/g, "");

  inprf4.value = inprf4.value.toLowerCase();
  inprf4.value = inprf4.value.replace(/\s/g, "");
  if (
    vec[0] == inprf1.value &&
    vec[1] == inprf2.value &&
    vec[2] == inprf3.value &&
    vec[3] == inprf4.value
  ) {
    titullshkrnj.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullshkrnj.style.backgroundColor = "#1d9768";
    sa++;
  } else if (
    inprf1.value == "" &&
    inprf2.value == "" &&
    inprf3.value == "" &&
    inprf4.value == ""
  ) {
    titullshkrnj.innerHTML = " Vendos shkronjat sipas rradhes";
    titullshkrnj.style.backgroundColor = "#3f2b86e8";
  } else {
    titullshkrnj.innerHTML = "Gabim ⛔️, Provo perseri !";
    titullshkrnj.style.backgroundColor = "#8b2025";
    ga++;
  }

  rashk1 = Math.floor(Math.random() * 34) + 1;
  rashk2 = Math.floor(Math.random() * 34) + 1;
  rashk3 = Math.floor(Math.random() * 34) + 1;
  rashk4 = Math.floor(Math.random() * 34) + 1;
  bb1 = eval("b" + rashk1);
  bb2 = eval("b" + rashk2);
  bb3 = eval("b" + rashk3);
  bb4 = eval("b" + rashk4);

  for (let i = 0; i < 10000; i++) {
    rashk1 = Math.floor(Math.random() * 34) + 1;
    rashk2 = Math.floor(Math.random() * 34) + 1;
    rashk3 = Math.floor(Math.random() * 34) + 1;
    rashk4 = Math.floor(Math.random() * 34) + 1;
    bb1 = eval("b" + rashk1);
    bb2 = eval("b" + rashk2);
    bb3 = eval("b" + rashk3);
    bb4 = eval("b" + rashk4);
    if (
      rashk1 != rashk2 &&
      rashk1 != rashk3 &&
      rashk1 != rashk4 &&
      rashk3 != rashk2 &&
      rashk4 != rashk2 &&
      rashk3 != rashk4
    ) {
      inpr1.value = bb1;
      inpr2.value = bb2;
      inpr3.value = bb3;
      inpr4.value = bb4;
      break;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  vec = [bb1, bb2, bb3, bb4];
  vec.sort();

  inprf1.value = "";
  inprf2.value = "";
  inprf3.value = "";
  inprf4.value = "";
});

// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit

// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit
// Vendos shenjen e piksimit

const titullshenja = document.querySelector("#titullshenja");
const inputfjalia = document.querySelector("#inpfjaliaemer");
const inputperdoruesi = document.querySelector("#perdoruesi");
const btnshenja = document.querySelector("#btnemer");

const y1 = "Sa vjec eshte Aresi ";
const y2 = "Si quheni ";
const y3 = "A hengret ushqim sot ";
const y4 = "Cfare do te vizatoni ";
const y5 = "Sa lek kushtojn keto biskotat ";
const y6 = "Sa ore shkon trajnimi ";
const y7 = "Une sapo mbarova detyrat";
const y8 = "Tani po bie shi";
const y9 = " Lopa po ha bar";
const y10 = "Altini eshte 27 vjec";
const y11 = "Makina ime eshte ngjyre e kuqe";
const y12 = "Dritani eshte futbollist";
const y13 = "Pusho";
const y14 = "Mos bej zhurme";
const y15 = "Sa bukur";
const y16 = "Mos me prek";
const y17 = "Sa qenke rritur more djale";
const y18 = "Vini re";

let rashe = Math.floor(Math.random() * 18) + 1;
let yy = eval("y" + rashe);

inputfjalia.value = yy;

btnshenja.addEventListener("click", function () {
  inputperdoruesi.value = inputperdoruesi.value.replace(/\s/g, "");

  if (
    (rashe < 7 && inputperdoruesi.value == "?") ||
    (rashe < 13 && rashe > 6 && inputperdoruesi.value == ".") ||
    (rashe > 12 && inputperdoruesi.value == "!")
  ) {
    titullshenja.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullshenja.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inputperdoruesi.value == "") {
    titullshenja.innerHTML = "Vendos shenjen e duhur te pikesimit";
    titullshenja.style.backgroundColor = "#3f2b86e8";
  } else {
    titullshenja.innerHTML = "Gabim ⛔️, Provo perseri !";
    titullshenja.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rashe = Math.floor(Math.random() * 18) + 1;
  yy = eval("y" + rashe);

  inputfjalia.value = yy;

  inputperdoruesi.value = null;
});

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
