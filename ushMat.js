//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift
//Nr tek apo cift

const titullict = document.querySelector("#ttc");
const inputc = document.querySelector("#inpct");
const btncf = document.querySelector(".btncf");
const btnte = document.querySelector(".btnte");

let nrct = Math.floor(Math.random() * 50) + 1;
inputc.value = nrct;

let sa = 0,
  ga = 0;

btncf.addEventListener("click", function () {
  if (nrct % 2 == 0) {
    titullict.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullict.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullict.innerHTML = "Gabim ⛔️,Ishte tek Provo perseri!";
    titullict.style.backgroundColor = "#8b2025";
    ga++;
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrct = Math.floor(Math.random() * 50) + 1;
  inputc.value = nrct;
});

btnte.addEventListener("click", function () {
  if (nrct % 2 != 0) {
    titullict.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullict.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullict.innerHTML = "Gabim ⛔️,Ishte cift Provo perseri!";
    titullict.style.backgroundColor = "#8b2025";
    ga++;
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrct = Math.floor(Math.random() * 50) + 1;
  inputc.value = nrct;
});
document.querySelector(".fillim").addEventListener("click", function () {
  titullict.innerHTML = "Gjej eshte numer tek apo cift";
  titullict.style.backgroundColor = " #3f2b86e8";
  nrct = Math.floor(Math.random() * 50) + 1;
  inputc.value = nrct;
});
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
//  Me e madhe me e vogel
const titullshenja = document.querySelector("#titullshenja");
const nr1shenja = document.querySelector("#nr1shenja");
const nr2shenja = document.querySelector("#nr2shenja");
const shenja = document.querySelector("#shenja");
const btnshenja = document.querySelector("#btnshenja");

let nrr1sh = Math.floor(Math.random() * 50) + 1;
let nrr2sh = Math.floor(Math.random() * 50) + 1;
nr1shenja.value = nrr1sh;
nr2shenja.value = nrr2sh;

btnshenja.addEventListener("click", function () {
  if (nrr1sh > nrr2sh) {
    if (shenja.value == ">") {
      titullshenja.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullshenja.style.backgroundColor = "#1d9768";
      sa++;
    } else if (shenja.value == "") {
      titullshenja.innerHTML = "Vendos shenjen e duhur";
      titullshenja.style.backgroundColor = " #3f2b86e8";
    } else {
      titullshenja.innerHTML = "Gabim ⛔️, Provo perseri!";
      titullshenja.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrr1sh < nrr2sh) {
    if (shenja.value == "<") {
      titullshenja.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullshenja.style.backgroundColor = "#1d9768";
      sa++;
    } else if (shenja.value == "") {
      titullshenja.innerHTML = "Vendos shenjen e duhur";
      titullshenja.style.backgroundColor = " #3f2b86e8";
    } else {
      titullshenja.innerHTML = "Gabim ⛔️, Provo perseri!";
      titullshenja.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrr1sh == nrr2sh) {
    if (shenja.value == "=") {
      titullshenja.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullshenja.style.backgroundColor = "#1d9768";
      sa++;
    } else if (shenja.value == "") {
      titullshenja.innerHTML = "Vendos shenjen e duhur";
      titullshenja.style.backgroundColor = " #3f2b86e8";
    } else {
      titullshenja.innerHTML = "Gabim ⛔️, Provo perseri!";
      titullshenja.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrr1sh = Math.floor(Math.random() * 50) + 1;
  nrr2sh = Math.floor(Math.random() * 50) + 1;
  nr1shenja.value = nrr1sh;
  nr2shenja.value = nrr2sh;
  shenja.value = null;
});
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve
//Numerimi i deleve

const fotodele = document.querySelector("#fodele");
const inpdele = document.querySelector("#inpdele");
const btndele = document.querySelector("#btndele");
const titulldele = document.querySelector("#titulldele");
let ndele = Math.floor(Math.random() * 10) + 1;

fotodele.src = `img-matematike/dl${ndele}.png`;

btndele.addEventListener("click", function () {
  if (inpdele.value == ndele) {
    titulldele.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titulldele.style.backgroundColor = "#1d9768";
    sa++;
  } else if (inpdele.value == "") {
    titulldele.innerHTML = " Jep numrin e sakte te deleve";
    titulldele.style.backgroundColor = " #3f2b86e8";
  } else {
    titulldele.innerHTML = "Gabim ⛔️,Ishte nr " + ndele + ", Provo perseri!";
    titulldele.style.backgroundColor = "#8b2025";
    ga++;
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  ndele = Math.floor(Math.random() * 10) + 1;
  fotodele.src = `img-matematike/dl${ndele}.png`;
  inpdele.value = null;
});
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
// Gjej trupin  ose figuren gjeometrike
const titullemrifg = document.querySelector("#titullemrifg");
const fotoemrifg = document.querySelector("#fotoemrifg");
const inpemrifg = document.querySelector("#inpemrifg");
const btnemrifg = document.querySelector("#btnemrifg");

let nemrifg = Math.floor(Math.random() * 15) + 1;
fotoemrifg.src = `img-matematike/fg${nemrifg}.png`;

btnemrifg.addEventListener("click", function () {
  if (nemrifg == 1) {
    if (
      inpemrifg.value == "Prizmi" ||
      inpemrifg.value == "PRIZMI" ||
      inpemrifg.value == "prizmi" ||
      inpemrifg.value == "prizem" ||
      inpemrifg.value == "Prizem" ||
      inpemrifg.value == "Prizem"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  prizmi, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  //NR 2 kubi
  //NR 2 kubi
  //NR 2 kubi
  //NR 2 kubi
  else if (nemrifg == 2) {
    if (
      inpemrifg.value == "Kubi" ||
      inpemrifg.value == "KUBI" ||
      inpemrifg.value == "kubi" ||
      inpemrifg.value == "Kub" ||
      inpemrifg.value == "KUB" ||
      inpemrifg.value == "kub"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  kubi, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  // Nr 3 kuboidi
  // Nr 3 kuboidi
  // Nr 3 kuboidi
  // Nr 3 kuboidi
  else if (nemrifg == 3) {
    if (
      inpemrifg.value == "Kuboidi" ||
      inpemrifg.value == "KUBOIDI" ||
      inpemrifg.value == "kuboidi" ||
      inpemrifg.value == "Kuboid" ||
      inpemrifg.value == "KUBOID" ||
      inpemrifg.value == "kuboid"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  kuboidi, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  // Nr4 koni
  // Nr4 koni
  // Nr4 koni
  // Nr4 koni
  // Nr4 koni
  else if (nemrifg == 4) {
    if (
      inpemrifg.value == "Koni" ||
      inpemrifg.value == "KONI" ||
      inpemrifg.value == "koni" ||
      inpemrifg.value == "Kon" ||
      inpemrifg.value == "KON" ||
      inpemrifg.value == "kon"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  koni, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr 5 cilindri
  //nr 5 cilindri
  //nr 5 cilindri
  //nr 5 cilindri
  //nr 5 cilindri
  else if (nemrifg == 5) {
    if (
      inpemrifg.value == "Cilindri" ||
      inpemrifg.value == "CILINDRI" ||
      inpemrifg.value == "cilindri" ||
      inpemrifg.value == "Cilinder" ||
      inpemrifg.value == "CILINDER" ||
      inpemrifg.value == "cilinder"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  cilindri, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr6 Sfera
  //nr6 Sfera
  //nr6 Sfera
  //nr6 Sfera
  //nr6 Sfera
  else if (nemrifg == 6) {
    if (
      inpemrifg.value == "Sfera" ||
      inpemrifg.value == "SFERA" ||
      inpemrifg.value == "sfera" ||
      inpemrifg.value == "Sfere" ||
      inpemrifg.value == "sfere" ||
      inpemrifg.value == "SFERE"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  sfera, Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr 7 piramida
  //nr 7 piramida
  //nr 7 piramida
  //nr 7 piramida
  else if (nemrifg == 7) {
    if (
      inpemrifg.value == "Piramida" ||
      inpemrifg.value == "PIRAMIDA" ||
      inpemrifg.value == "piramida" ||
      inpemrifg.value == "Piramide" ||
      inpemrifg.value == "PIRAMIDE" ||
      inpemrifg.value == "piramide"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  piramida , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  // Nr8 Rrethi
  // Nr8 Rrethi
  // Nr8 Rrethi
  // Nr8 Rrethi
  else if (nemrifg == 8) {
    if (
      inpemrifg.value == "Rreth" ||
      inpemrifg.value == "RRETH" ||
      inpemrifg.value == "rreth" ||
      inpemrifg.value == "Rrethi" ||
      inpemrifg.value == "RRETHI" ||
      inpemrifg.value == "rrethi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  rrethi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  // nr 9 trekendeshi
  // nr 9 trekendeshi
  // nr 9 trekendeshi
  // nr 9 trekendeshi
  // nr 9 trekendeshi
  else if (nemrifg == 9) {
    if (
      inpemrifg.value == "Trekendesh" ||
      inpemrifg.value == "TREKENDESH" ||
      inpemrifg.value == "trekendesh" ||
      inpemrifg.value == "Trekendeshi" ||
      inpemrifg.value == "TREKENDESHI" ||
      inpemrifg.value == "trekendeshi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  trekendeshi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr10 katrori
  //nr10 katrori
  //nr10 katrori
  //nr10 katrori
  //nr10 katrori
  else if (nemrifg == 10) {
    if (
      inpemrifg.value == "Katror" ||
      inpemrifg.value == "KATROR" ||
      inpemrifg.value == "katror" ||
      inpemrifg.value == "KATRORI" ||
      inpemrifg.value == "Katrori" ||
      inpemrifg.value == "katrori"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  katrori , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  //nr11 drejtkendeshi
  //nr11 drejtkendeshi
  //nr11 drejtkendeshi
  //nr11 drejtkendeshi
  else if (nemrifg == 11) {
    if (
      inpemrifg.value == "Drejtkendesh" ||
      inpemrifg.value == "DREJTKENDESH" ||
      inpemrifg.value == "drejtkendesh" ||
      inpemrifg.value == "DREJTKENDESHI" ||
      inpemrifg.value == "Drejtkendeshi" ||
      inpemrifg.value == "drejtkendeshi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML =
        "Gabim ⛔️,Ishte  drejtkendeshi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr12 paralelogram
  //nr12 paralelogram
  //nr12 paralelogram
  //nr12 paralelogram
  //nr12 paralelogram
  else if (nemrifg == 12) {
    if (
      inpemrifg.value == "Paralelogram" ||
      inpemrifg.value == "PARALELOGRAM" ||
      inpemrifg.value == "paralelogram" ||
      inpemrifg.value == "PARALELOGRAMI" ||
      inpemrifg.value == "Paralelogrami" ||
      inpemrifg.value == "paralelogrami"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML =
        "Gabim ⛔️,Ishte  paralelogrami , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr13 Trapezi
  //nr13 Trapezi
  //nr13 Trapezi
  //nr13 Trapezi
  //nr13 Trapezi
  //nr13 Trapezi
  else if (nemrifg == 13) {
    if (
      inpemrifg.value == "Trapez" ||
      inpemrifg.value == "TRAPEZ" ||
      inpemrifg.value == "trapez" ||
      inpemrifg.value == "TRAPEZI" ||
      inpemrifg.value == "Trapezi" ||
      inpemrifg.value == "trapezi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  trapezi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  //nr 14 Pesekendeshi
  //nr 14 Pesekendeshi
  //nr 14 Pesekendeshi
  //nr 14 Pesekendeshi
  //nr 14 Pesekendeshi
  else if (nemrifg == 14) {
    if (
      inpemrifg.value == "Pesekendesh" ||
      inpemrifg.value == "PESEKENDESH" ||
      inpemrifg.value == "pesekendesh" ||
      inpemrifg.value == "PESEKENDESHI" ||
      inpemrifg.value == "Pesekendeshi" ||
      inpemrifg.value == "pesekendeshi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML = "Gabim ⛔️,Ishte  pesekendeshi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  // nr 15 gjatekendeshi
  // nr 15 gjatekendeshi
  // nr 15 gjatekendeshi
  // nr 15 gjatekendeshi
  // nr 15 gjatekendeshi
  // nr 15 gjatekendeshi
  else if (nemrifg == 15) {
    if (
      inpemrifg.value == "Gjashtekendesh" ||
      inpemrifg.value == "GJASHTEKENDESH" ||
      inpemrifg.value == "gjashtekendesh" ||
      inpemrifg.value == "GJASHTEKENDESHI" ||
      inpemrifg.value == "Gjashtekendeshi" ||
      inpemrifg.value == "gjashtekendeshi"
    ) {
      titullemrifg.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullemrifg.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpemrifg.value == "") {
      titullemrifg.innerHTML = " Gjej figuren/trupin gjeometrik";
      titullemrifg.style.backgroundColor = " #3f2b86e8";
    } else {
      titullemrifg.innerHTML =
        "Gabim ⛔️,Ishte  gjashtekendeshi , Provo perseri!";
      titullemrifg.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nemrifg = Math.floor(Math.random() * 15) + 1;
  fotoemrifg.src = `img-matematike/fg${nemrifg}.png`;
  inpemrifg.value = null;
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
