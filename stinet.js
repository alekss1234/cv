const fotosem = document.querySelector("#fotosem");
const titullsemafori = document.querySelector("#titullsemafori");
const btnstina1 = document.querySelector("#btnstina1");
const btnstina2 = document.querySelector("#btnstina2");
const btnstina3 = document.querySelector("#btnstina3");
const btnstina4 = document.querySelector("#btnstina4");

let a = Math.floor(Math.random() * 3) + 1;
fotosem.src = `img-stinet/s${a}.png`;

let sa = 0,
  ga = 0;
btnstina1.addEventListener("click", function () {
  if (a == 2) {
    titullsemafori.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullsemafori.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullsemafori.innerHTML = "Gabim ⛔️, Provo perseri!";
    titullsemafori.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;
  a = Math.floor(Math.random() * 3) + 1;
  fotosem.src = `img-stinet/s${a}.png`;
});

btnstina2.addEventListener("click", function () {
  if (a == 3) {
    titullsemafori.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullsemafori.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullsemafori.innerHTML = "Gabim ⛔️, Provo perseri!";
    titullsemafori.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;
  a = Math.floor(Math.random() * 3) + 1;
  fotosem.src = `img-stinet/s${a}.png`;
});

btnstina3.addEventListener("click", function () {
  if (a == 1) {
    titullsemafori.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullsemafori.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullsemafori.innerHTML = "Gabim ⛔️, Provo perseri!";
    titullsemafori.style.backgroundColor = "#8b2025";
    ga++;
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;
  a = Math.floor(Math.random() * 3) + 1;
  fotosem.src = `img-stinet/s${a}.png`;
});
btnstina4.addEventListener("click", function () {
  titullsemafori.innerHTML = "Cfare tregon semafori?";
  titullsemafori.style.backgroundColor = "#3f2b86e8";

  a = Math.floor(Math.random() * 3) + 1;
  fotosem.src = `img-stinet/s${a}.png`;
});
// Gjej stinen

// Gjej stinen

// Gjej stinen

// Gjej stinen

// Gjej stinen

// Gjej stinen

// Gjej stinen
const fotostina = document.querySelector("#fotostina");
const inpstina = document.querySelector("#inpstina");
const btnstina = document.querySelector("#btnstina");
const titullstina = document.querySelector("#titullstina");

let rs = Math.floor(Math.random() * 4) + 1;
fotostina.src = `img-stinet/st${rs}.png`;

btnstina.addEventListener("click", function () {
  if (rs == 4) {
    if (
      inpstina.value == "Dimer" ||
      inpstina.value == "dimer" ||
      inpstina.value == "DIMER" ||
      inpstina.value == "dimri" ||
      inpstina.value == "DIMRI" ||
      inpstina.value == "Dimri"
    ) {
      titullstina.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullstina.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpstina.value == "") {
      titullstina.innerHTML = "Gjej stinen ne foto";
      titullstina.style.backgroundColor = "#3f2b86e8";
    } else {
      titullstina.innerHTML = "Gabim ⛔️,Ishte= Dimer !";
      titullstina.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rs == 3) {
    if (
      inpstina.value == "Vjeshte" ||
      inpstina.value == "vjeshte" ||
      inpstina.value == "VJESHTE" ||
      inpstina.value == "vjeshta" ||
      inpstina.value == "VJESHTA" ||
      inpstina.value == "Vjeshta"
    ) {
      titullstina.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      sa++;
      titullstina.style.backgroundColor = "#1d9768";
    } else if (inpstina.value == "") {
      titullstina.innerHTML = "Gjej stinen ne foto";
      titullstina.style.backgroundColor = "#3f2b86e8";
    } else {
      titullstina.innerHTML = "Gabim ⛔️,Ishte= Vjeshte !";
      titullstina.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rs == 2) {
    if (
      inpstina.value == "Vere" ||
      inpstina.value == "vere" ||
      inpstina.value == "VERE" ||
      inpstina.value == "vera" ||
      inpstina.value == "VERA" ||
      inpstina.value == "Vera"
    ) {
      titullstina.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullstina.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpstina.value == "") {
      titullstina.innerHTML = "Gjej stinen ne foto";
      titullstina.style.backgroundColor = "#3f2b86e8";
    } else {
      titullstina.innerHTML = "Gabim ⛔️,Ishte= Vere !";
      titullstina.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rs == 1) {
    if (
      inpstina.value == "Pranvere" ||
      inpstina.value == "pranvere" ||
      inpstina.value == "PRANVERE" ||
      inpstina.value == "pranvera" ||
      inpstina.value == "PRANVERA" ||
      inpstina.value == "Pranvera"
    ) {
      titullstina.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullstina.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpstina.value == "") {
      titullstina.innerHTML = "Gjej stinen ne foto";
      titullstina.style.backgroundColor = "#3f2b86e8";
    } else {
      titullstina.innerHTML = "Gabim ⛔️,Ishte= Pranvere !";
      titullstina.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rs = Math.floor(Math.random() * 4) + 1;
  fotostina.src = `img-stinet/st${rs}.png`;
  inpstina.value = null;
});

//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin
//Gjej profesionin//Gjej profesionin

//Gjej profesionin

const fotoprofesioni = document.querySelector("#fotoprofesioni");
const inpprofesioni = document.querySelector("#inpprofesioni");
const btnprofesioni = document.querySelector("#btnprofesioni");
const titullprofesioni = document.querySelector("#titullprofesioni");

let rp = Math.floor(Math.random() * 14) + 1;
fotoprofesioni.src = `img-stinet/pr${rp}.png`;

btnprofesioni.addEventListener("click", function () {
  if (rp == 1) {
    if (
      inpprofesioni.value == "Doktor" ||
      inpprofesioni.value == "doktor" ||
      inpprofesioni.value == "DOKTOR" ||
      inpprofesioni.value == "doktori" ||
      inpprofesioni.value == "DOKTORI" ||
      inpprofesioni.value == "Doktori"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Doktor !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 2) {
    if (
      inpprofesioni.value == "Mesues" ||
      inpprofesioni.value == "MESUES" ||
      inpprofesioni.value == "MESUESI" ||
      inpprofesioni.value == "mesues" ||
      inpprofesioni.value == "Mesuesi" ||
      inpprofesioni.value == "mesuesi"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Mesues !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 3) {
    if (
      inpprofesioni.value == "Stilist" ||
      inpprofesioni.value == "STILISTI" ||
      inpprofesioni.value == "stilisti" ||
      inpprofesioni.value == "Stilist" ||
      inpprofesioni.value == "STILIST" ||
      inpprofesioni.value == "stlist" ||
      inpprofesioni.value == "Rrobaqepes" ||
      inpprofesioni.value == "rrobaqepes" ||
      inpprofesioni.value == "RROBAQEPES" ||
      inpprofesioni.value == "Rrobaqepesi" ||
      inpprofesioni.value == "RROBAQEPESI" ||
      inpprofesioni.value == "rrobaqepesi"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Stilist !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 4) {
    if (
      inpprofesioni.value == "Shofer" ||
      inpprofesioni.value == "SHOFER" ||
      inpprofesioni.value == "shofer" ||
      inpprofesioni.value == "shoferi" ||
      inpprofesioni.value == "Shoferi" ||
      inpprofesioni.value == "SHOFERI"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Shofer !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 5) {
    if (
      inpprofesioni.value == "Fermer" ||
      inpprofesioni.value == "FERMER" ||
      inpprofesioni.value == "fermer" ||
      inpprofesioni.value == "FERMERI" ||
      inpprofesioni.value == "Fermeri" ||
      inpprofesioni.value == "fermeri"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Fermer !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 6) {
    if (
      inpprofesioni.value == "Berber" ||
      inpprofesioni.value == "BERBER" ||
      inpprofesioni.value == "berber" ||
      inpprofesioni.value == "BERBERI" ||
      inpprofesioni.value == "Berberi" ||
      inpprofesioni.value == "berberi"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Berber  !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 7) {
    if (
      inpprofesioni.value == "Kengetar" ||
      inpprofesioni.value == "KENGETAR" ||
      inpprofesioni.value == "kengetar" ||
      inpprofesioni.value == "KENGETARE" ||
      inpprofesioni.value == "kengetare" ||
      inpprofesioni.value == "Kengetare"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Kengetare !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 8) {
    if (
      inpprofesioni.value == "Kuzhinier" ||
      inpprofesioni.value == "KUZHINIER" ||
      inpprofesioni.value == "kuzhinier" ||
      inpprofesioni.value == "kuzhinieri" ||
      inpprofesioni.value == "Kuzhinieri" ||
      inpprofesioni.value == "KUZHINIERI" ||
      inpprofesioni.value == "Shef kuzhine" ||
      inpprofesioni.value == "shef kuzhine" ||
      inpprofesioni.value == "SHEF KUZHINE"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Kuzhinier !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 9) {
    if (
      inpprofesioni.value == "Polic" ||
      inpprofesioni.value == "POLIC" ||
      inpprofesioni.value == "polic" ||
      inpprofesioni.value == "POLICI" ||
      inpprofesioni.value == "Polici" ||
      inpprofesioni.value == "polici"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Polic !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 10) {
    if (
      inpprofesioni.value == "Kamarier" ||
      inpprofesioni.value == "KAMARIER" ||
      inpprofesioni.value == "kamarier" ||
      inpprofesioni.value == "KAMARIERI" ||
      inpprofesioni.value == "kamarieri" ||
      inpprofesioni.value == "Kamarieri"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Kamarier !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 11) {
    if (
      inpprofesioni.value == "Punetor" ||
      inpprofesioni.value == "PUNETOR" ||
      inpprofesioni.value == "punetor" ||
      inpprofesioni.value == "PUNETOR" ||
      inpprofesioni.value == "Punetor" ||
      inpprofesioni.value == "punetor"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Punetor !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 12) {
    if (
      inpprofesioni.value == "Futbollist" ||
      inpprofesioni.value == "FUTBOLLIST" ||
      inpprofesioni.value == "futbollist" ||
      inpprofesioni.value == "FUTBOLLISTI" ||
      inpprofesioni.value == "futbollisti" ||
      inpprofesioni.value == "Futbollisti"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Futbollist !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 13) {
    if (
      inpprofesioni.value == "Dentist" ||
      inpprofesioni.value == "DENTIST" ||
      inpprofesioni.value == "dentist" ||
      inpprofesioni.value == "DENTISTI" ||
      inpprofesioni.value == "Dentisti" ||
      inpprofesioni.value == "dentisti"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Dentist !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rp == 14) {
    if (
      inpprofesioni.value == "Pastrues" ||
      inpprofesioni.value == "PASTRUES" ||
      inpprofesioni.value == "pastrues" ||
      inpprofesioni.value == "PASTRUESI" ||
      inpprofesioni.value == "Pastruesi" ||
      inpprofesioni.value == "pastruesi" ||
      inpprofesioni.value == "Sanitar" ||
      inpprofesioni.value == "SANITAR" ||
      inpprofesioni.value == "sanitar" ||
      inpprofesioni.value == "SANITARI" ||
      inpprofesioni.value == "sanitari" ||
      inpprofesioni.value == "sanitari"
    ) {
      titullprofesioni.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullprofesioni.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpprofesioni.value == "") {
      titullprofesioni.innerHTML = "Gjej profesionin ne foto";
      titullprofesioni.style.backgroundColor = "#3f2b86e8";
    } else {
      titullprofesioni.innerHTML = "Gabim ⛔️,Ishte= Sanitar !";
      titullprofesioni.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rp = Math.floor(Math.random() * 14) + 1;
  fotoprofesioni.src = `img-stinet/pr${rp}.png`;
  inpprofesioni.value = null;
});

//Gjej ngjyren

//Gjej ngjyren

//Gjej ngjyren

//Gjej ngjyren

//Gjej ngjyren

//Gjej ngjyren

//Gjej ngjyren

const fotongjyra = document.querySelector("#fotongjyra");
const inpngjyra = document.querySelector("#inpngjyra");
const btnngjyra = document.querySelector("#btnngjyra");
const titullngjyra = document.querySelector("#titullngjyra");

let rn = Math.floor(Math.random() * 8) + 1;
fotongjyra.src = `img-stinet/n${rn}.png`;

btnngjyra.addEventListener("click", function () {
  if (rn == 1) {
    if (
      inpngjyra.value == "Blu" ||
      inpngjyra.value == "BLU" ||
      inpngjyra.value == "blu" ||
      inpngjyra.value == "E blu" ||
      inpngjyra.value == "e blu" ||
      inpngjyra.value == "E BLU"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= Blu !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 2) {
    if (
      inpngjyra.value == "Vjollce" ||
      inpngjyra.value == "vjollce" ||
      inpngjyra.value == "VJOLLCE" ||
      inpngjyra.value == "E vjollce" ||
      inpngjyra.value == "e vjollce" ||
      inpngjyra.value == "E VJOLLCE" ||
      inpngjyra.value == "Lejla" ||
      inpngjyra.value == "lejla" ||
      inpngjyra.value == "lejla"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= Vjollce !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 3) {
    if (
      inpngjyra.value == "Roze" ||
      inpngjyra.value == "ROZE" ||
      inpngjyra.value == "roze" ||
      inpngjyra.value == "E roze" ||
      inpngjyra.value == "e roze" ||
      inpngjyra.value == "E ROZE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= Roze !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 4) {
    if (
      inpngjyra.value == "E verdhe" ||
      inpngjyra.value == "e verdhe" ||
      inpngjyra.value == "E VERDHE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= E verdhe !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 5) {
    if (
      inpngjyra.value == "Portokalli" ||
      inpngjyra.value == "PORTOKALLI" ||
      inpngjyra.value == "portokalli" ||
      inpngjyra.value == "E portokalli" ||
      inpngjyra.value == "e portokalli" ||
      inpngjyra.value == "E PORTOKALLI" ||
      inpngjyra.value == "Portokalle" ||
      inpngjyra.value == "PORTOKALLE" ||
      inpngjyra.value == "portokalle" ||
      inpngjyra.value == "E portokalle" ||
      inpngjyra.value == "e portokalle" ||
      inpngjyra.value == "E PORTOKALLE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= Portokalli !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 6) {
    if (
      inpngjyra.value == "E zeze" ||
      inpngjyra.value == "e zeze" ||
      inpngjyra.value == "E ZEZE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= E zeze !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 7) {
    if (
      inpngjyra.value == "E jeshile" ||
      inpngjyra.value == "e jeshile" ||
      inpngjyra.value == "E JESHILE" ||
      inpngjyra.value == "Jeshile" ||
      inpngjyra.value == "jeshile" ||
      inpngjyra.value == "JESHILE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= Jeshile !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rn == 8) {
    if (
      inpngjyra.value == "E kuqe" ||
      inpngjyra.value == "e kuqe" ||
      inpngjyra.value == "E KUQE"
    ) {
      titullngjyra.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullngjyra.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpngjyra.value == "") {
      titullngjyra.innerHTML = "Gjej ngjyren ne foto";
      titullngjyra.style.backgroundColor = "#3f2b86e8";
    } else {
      titullngjyra.innerHTML = "Gabim ⛔️,Ishte= E kuqe !";
      titullngjyra.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rn = Math.floor(Math.random() * 8) + 1;
  fotongjyra.src = `img-stinet/n${rn}.png`;
  inpngjyra.value = null;
});

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
