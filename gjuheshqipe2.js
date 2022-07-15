const titullbsh = document.querySelector("#titullbsh");
const shkronja = document.querySelector("#shkronja");
const btnbsh = document.querySelector("#btnbsh");
const btnzanore = document.querySelector("#btnzanore");
const btnfillim = document.querySelector("#btnfillim");

const a1 = "a";
const a2 = "b";
const a3 = "c";
const a4 = "ç";
const a5 = "d";
const a6 = "dh";
const a7 = "e";
const a8 = "ë";
const a9 = "f";
const a10 = "g";
const a11 = "gj";
const a12 = "h";
const a13 = "i";
const a14 = "j";
const a15 = "k";
const a16 = "l";
const a17 = "ll";
const a18 = "m";
const a19 = "n";
const a20 = "nj";
const a21 = "o";
const a22 = "p";
const a23 = "q";
const a24 = "r";
const a25 = "rr";
const a26 = "s";
const a27 = "sh";
const a28 = "t";
const a29 = "th";
const a30 = "u";
const a31 = "v";
const a32 = "x";
const a33 = "xh";
const a34 = "y";
const a35 = "z";
const a36 = "zh";

let rabsh = Math.floor(Math.random() * 36) + 1;
let k = eval("a" + rabsh);
let t;
shkronja.value = k;

let sa = 0,
  ga = 0;

btnbsh.addEventListener("click", function () {
  t = shkronja.value;
  t = t.toLowerCase();
  t = t.replace(/\s/g, "");

  if (
    t == "a" ||
    t == "e" ||
    t == "ë" ||
    t == "i" ||
    t == "o" ||
    t == "u" ||
    t == "y"
  ) {
    titullbsh.innerHTML = "Gabim ⛔️,Ishte zanore !";
    titullbsh.style.backgroundColor = "#8b2025";
    ga++;
  } else {
    titullbsh.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullbsh.style.backgroundColor = "#1d9768";
    sa++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rabsh = Math.floor(Math.random() * 36) + 1;
  k = eval("a" + rabsh);
  shkronja.value = k;
});

btnzanore.addEventListener("click", function () {
  t = shkronja.value;
  t = t.toLowerCase();
  t = t.replace(/\s/g, "");

  if (
    t == "a" ||
    t == "e" ||
    t == "ë" ||
    t == "i" ||
    t == "o" ||
    t == "u" ||
    t == "y"
  ) {
    titullbsh.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullbsh.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullbsh.innerHTML = "Gabim ⛔️,Ishte bashtingellore !";
    titullbsh.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rabsh = Math.floor(Math.random() * 36) + 1;
  k = eval("a" + rabsh);
  shkronja.value = k;
});

btnfillim.addEventListener("click", function () {
  titullbsh.innerHTML = " Gjej bashtingelloren ose zanoren";
  titullbsh.style.backgroundColor = "#3f2b86e8";

  rabsh = Math.floor(Math.random() * 36) + 1;
  k = eval("a" + rabsh);
  shkronja.value = k;
});

//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin
//Gjej peremrin

const titullperemri = document.querySelector("#titullperemri");
const inpfjaliaemer = document.querySelector("#inpfjaliaemer");
const perdoruesi = document.querySelector("#perdoruesi");
const btnemer = document.querySelector("#btnemer");

const b1 = "Makina blu eshte e imja .";
const b2 = "Futbolli eshte sporti im i preferuar.";
const b3 = "Une jam 22 vjec.";
const b4 = "Ai e ka emrin Frenkli.";
const b5 = "Dikush me therriti ne emer .";
const b6 = "Askush nuk noton aq bukur.";
const b7 = "Rrobat jane te tuat.";
const b8 = "Kush eshte shoku i Marjos ?";
const b9 = "Cili eshte nxenesi me i mire ?";
const b10 = "Pijaneci demton veten.";
const b11 = "Ajo ka floke te kuqe.";
const b12 = "Ata jane duke luajtur volleyboll.";

let raper = Math.floor(Math.random() * 12) + 1;
let d = eval("b" + raper);

inpfjaliaemer.value = d;
let r;
btnemer.addEventListener("click", function () {
  r = perdoruesi.value;
  r = r.toLowerCase();
  r = r.replace(/\s/g, "");

  if (raper == 1) {
    if (r == "eimja") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= e imja !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 2) {
    if (r == "im") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= im !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 3) {
    if (r == "une") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= une !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 4) {
    if (r == "ai") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= ai !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 5) {
    if (r == "dikush") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= dikush !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 6) {
    if (r == "askush") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= askush !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 7) {
    if (r == "tetuat") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= te tuat !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 8) {
    if (r == "kush") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= kush !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 9) {
    if (r == "cili") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= cili !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 10) {
    if (r == "veten") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= veten !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 11) {
    if (r == "ajo") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= ajo !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raper == 12) {
    if (r == "ata") {
      titullperemri.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullperemri.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titullperemri.innerHTML = "Gjej peremrin tek fjalia";
      titullperemri.style.backgroundColor = "#3f2b86e8";
    } else {
      titullperemri.innerHTML = "Gabim ⛔️,Ishte= ata !";
      titullperemri.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  raper = Math.floor(Math.random() * 12) + 1;
  d = eval("b" + raper);

  inpfjaliaemer.value = d;
  perdoruesi.value = "";
});

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin

//Gjej antonimin
//Gjej antonimin

const titullantonim = document.querySelector("#titullantonim");
const inpfj = document.querySelector("#inpfj");
const inpanto = document.querySelector("#inpanto");
const btnant = document.querySelector("#btnant");

const c1 = "lumturi";
const c2 = "e zeze";
const c3 = "e keqe";
const c4 = "i varfer";
const c5 = "dite";
const c6 = "armik";
const c7 = "i vjeter";
const c8 = "dashuri";
const c9 = "qesh";
const c10 = "i madh";
const c11 = "i trashe";
const c12 = "i ftohte";

let raant = Math.floor(Math.random() * 12) + 1;
let l = eval("c" + raant);

inpfj.value = l;
let e;

btnant.addEventListener("click", function () {
  e = inpanto.value;
  e = e.toLowerCase();
  e = e.replace(/\s/g, "");

  if (raant == 1) {
    if (e == "fatkeqesi") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= fatkeqesi !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 2) {
    if (e == "ebardhe") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= e bardhe !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 3) {
    if (e == "emire") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= e mire !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 4) {
    if (e == "ipasur") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= i pasur!";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 5) {
    if (e == "nate") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= nate !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 6) {
    if (e == "mik") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= mik !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  if (raant == 7) {
    if (e == "iri") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= i ri !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 8) {
    if (e == "urretje") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= urretje !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 9) {
    if (e == "qaj") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= qaj !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 10) {
    if (e == "ivogel") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= i vogel !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 11) {
    if (e == "iholle") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= i holle !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  if (raant == 12) {
    if (e == "inxehte") {
      titullantonim.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullantonim.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpanto.value == "") {
      titullantonim.innerHTML = "Gjej mbiemrin tek fjalia";
      titullantonim.style.backgroundColor = "#3f2b86e8";
    } else {
      titullantonim.innerHTML = "Gabim ⛔️,Ishte= i nxehte !";
      titullantonim.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  raant = Math.floor(Math.random() * 12) + 1;
  l = eval("c" + raant);

  inpfj.value = l;
  inpanto.value = "";
});

// pervecem
// pervecem
// pervecem
// pervecem
// pervecem
// pervecem
// pervecem

// pervecem // pervecem
// pervecem
// pervecem
// pervecem
// pervecem
// pervecem

// pervecem
// pervecem

const titullpervcm = document.querySelector("#titullpervcm");
const emripp = document.querySelector("#emripp");
const pervecem = document.querySelector("#pervecem");
const pergjithshem = document.querySelector("#pergjithshem");
const fillim1 = document.querySelector("#fillim1");

const aa1 = "mali";
const aa2 = "lopa";
const aa3 = "shtet";
const aa4 = "qytet";
const aa5 = "fshat";
const aa6 = "njerez";
const aa7 = "lagje";
const aa8 = "celular";
const aa9 = "Korabi";
const aa10 = "Alberta";
const aa11 = "Anglia";
const aa12 = "Pogradeci";
const aa13 = "Rruga Bashkim Shehu";
const aa14 = "Iphone";
const aa15 = "Samsung";
const aa16 = "vaji olim";

let rapr = Math.floor(Math.random() * 16) + 1;
let g = eval("aa" + rapr);

emripp.value = g;

pervecem.addEventListener("click", function () {
  if (rapr > 8) {
    titullpervcm.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullpervcm.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullpervcm.innerHTML = "Gabim ⛔️,Ishte= emer i pergjithshem !";
    titullpervcm.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rapr = Math.floor(Math.random() * 16) + 1;
  g = eval("aa" + rapr);
  emripp.value = g;
});

pergjithshem.addEventListener("click", function () {
  if (rapr < 9) {
    titullpervcm.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullpervcm.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullpervcm.innerHTML = "Gabim ⛔️,Ishte= emer i pervecem !";
    titullpervcm.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rapr = Math.floor(Math.random() * 16) + 1;
  g = eval("aa" + rapr);
  emripp.value = g;
});

fillim1.addEventListener("click", function () {
  titullpervcm.innerHTML = "Gjej emrin e pervecem ose te pergjithshem";
  titullpervcm.style.backgroundColor = "#3f2b86e8";

  rapr = Math.floor(Math.random() * 16) + 1;
  g = eval("aa" + rapr);
  emripp.value = g;
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
