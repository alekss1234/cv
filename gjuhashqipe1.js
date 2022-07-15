const inpfjaliaemer = document.querySelector("#inpfjaliaemer");
const perdoruesi = document.querySelector("#perdoruesi");
const btnemer = document.querySelector("#btnemer");
const titull1 = document.querySelector("#titull1");

let a1 = "Macja  luan ne oborr.";
let a2 = "Iliri  shkoi dje ne shkolle";
let a3 = "Marjo eshte infermier .";
let a4 = " Andi eshte 7 vjec.";
let a5 = "Erindi  luan futboll .";
let a6 = " Genci luan ne kompjuter .";
let a7 = " Korabi eshte shume i larte.";
let a8 = " Iliri eshte nxenes shembullor .";
let a9 = " Qeni leh kundrejt maces.";
let a10 = " Makinat  ecin me shpejtesi.";
let a11 = " Gjyshi  eshte doktor shume i mire.";
let a12 = " Pula rri ne kotec.";
let a13 = " Shqiponja fluturon ne qiell.";
let a14 = " Futbolli eshte loja ime e preferuar.";
let a15 = " Agroni  peshkon ne liqen.";
let a16 = " Alberti  luan playstation.";
let a17 = " Makina ime ka ngjyre te zeze.";
let a18 = " Rei  pelqen embelsirat.";
let a19 = " Lepuri hengri karroten.";
let a20 = " Lopa ben qumesht .";

let raem = Math.floor(Math.random() * 20) + 1;
let f = eval("a" + raem);

inpfjaliaemer.value = f;

let sa = 0,
  ga = 0;

btnemer.addEventListener("click", function () {
  if (raem == 1) {
    if (
      perdoruesi.value == "Macja" ||
      perdoruesi.value == "macja" ||
      perdoruesi.value == "MACJA"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Macja !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 2) {
    if (
      perdoruesi.value == "Iliri" ||
      perdoruesi.value == "iliri" ||
      perdoruesi.value == "ILIRI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Iliri !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 3) {
    if (
      perdoruesi.value == "Marjo" ||
      perdoruesi.value == "marjo" ||
      perdoruesi.value == "MARJO"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Marjo !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 5) {
    if (
      perdoruesi.value == "Erindi" ||
      perdoruesi.value == "erindi" ||
      perdoruesi.value == "ERINDI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Erindi !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 6) {
    if (
      perdoruesi.value == "Genci" ||
      perdoruesi.value == "genci" ||
      perdoruesi.value == "GENCI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Genci !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 7) {
    if (
      perdoruesi.value == "Korabi" ||
      perdoruesi.value == "korabi" ||
      perdoruesi.value == "KORABI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Korabi !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 8) {
    if (
      perdoruesi.value == "Iliri" ||
      perdoruesi.value == "iliri" ||
      perdoruesi.value == "ILIRI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Iliri !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 9) {
    if (
      perdoruesi.value == "Qeni" ||
      perdoruesi.value == "qeni" ||
      perdoruesi.value == "QENI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Qeni !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 10) {
    if (
      perdoruesi.value == "Makinat" ||
      perdoruesi.value == "makinat" ||
      perdoruesi.value == "MAKINAT"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Makinat !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 11) {
    if (
      perdoruesi.value == "Gjyshi" ||
      perdoruesi.value == "gjyshi" ||
      perdoruesi.value == "GJYSHI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Gjyshi !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 12) {
    if (
      perdoruesi.value == "Pula" ||
      perdoruesi.value == "pula" ||
      perdoruesi.value == "PULA"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Pula !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 13) {
    if (
      perdoruesi.value == "Shqiponja" ||
      perdoruesi.value == "shqiponja" ||
      perdoruesi.value == "SHQIPONJA"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Shqiponja !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 14) {
    if (
      perdoruesi.value == "Futbolli" ||
      perdoruesi.value == "futbolli" ||
      perdoruesi.value == "FUTBOLLI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Futbolli !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 15) {
    if (
      perdoruesi.value == "Agroni" ||
      perdoruesi.value == "agroni" ||
      perdoruesi.value == "AGRONI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Agroni !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 16) {
    if (
      perdoruesi.value == "Alberti" ||
      perdoruesi.value == "alberti" ||
      perdoruesi.value == "ALBERTI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Alberi !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 17) {
    if (
      perdoruesi.value == "Makina" ||
      perdoruesi.value == "makina" ||
      perdoruesi.value == "MAKINA"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Makina !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 18) {
    if (
      perdoruesi.value == "Rei" ||
      perdoruesi.value == "rei" ||
      perdoruesi.value == "REI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Rei !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 19) {
    if (
      perdoruesi.value == "Lepuri" ||
      perdoruesi.value == "lepuri" ||
      perdoruesi.value == "LEPURI"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Lepuri !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raem == 20) {
    if (
      perdoruesi.value == "Lopa" ||
      perdoruesi.value == "lopa" ||
      perdoruesi.value == "LOPA"
    ) {
      titull1.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi.value == "") {
      titull1.innerHTML = "Gjej kryefjalen tek fjalia";
      titull1.style.backgroundColor = "#3f2b86e8";
    } else {
      titull1.innerHTML = "Gabim ⛔️,Ishte= Lopa !";
      titull1.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  raem = Math.floor(Math.random() * 20) + 1;
  f = eval("a" + raem);
  inpfjaliaemer.value = f;
  perdoruesi.value = null;
});

//GJej kallezuesin

//Gjej kallezuesin

//Gjej kallezuesin

// Gjej kallezuesin

// Gjej kallezuesin

// Gjej kallezuesin

// Gjej kallezuesin

// Gjej kallezuesin

//Gjej kallezuesin

const inpfjaliaemer1 = document.querySelector("#inpfjaliaemer1");
const perdoruesi1 = document.querySelector("#perdoruesi1");
const btnemer1 = document.querySelector("#btnemer1");
const titull2 = document.querySelector("#titull2");

let b1 = "Macja  luan ne oborr.";
let b2 = "Iliri  shkoi dje ne shkolle";
let b3 = "Marjo eshte infermier .";
let b4 = " Andi eshte 7 vjec.";
let b5 = "Erindi  luan futboll .";
let b6 = " Genci luan ne kompjuter .";
let b7 = " Korabi eshte shume i larte.";
let b8 = " Iliri eshte nxenes shembullor .";
let b9 = " Qeni leh kundrejt maces.";
let b10 = " Makinat  ecin me shpejtesi.";
let b11 = " Gjyshi  eshte doktor shume i mire.";
let b12 = " Pula rri ne kotec.";
let b13 = " Shqiponja fluturon ne qiell.";
let b14 = " Futbolli eshte loja ime e preferuar.";
let b15 = " Agroni  peshkon ne liqen.";
let b16 = " Alberti  luan playstation.";
let b17 = " Makina ime ka ngjyre te zeze.";
let b18 = " Rei  pelqen embelsirat.";
let b19 = " Lepuri hengri karroten.";
let b20 = " Lopa ben qumesht .";

let raka = Math.floor(Math.random() * 20) + 1;
let d = eval("b" + raka);

inpfjaliaemer1.value = d;

btnemer1.addEventListener("click", function () {
  if (raka == 1) {
    if (
      perdoruesi1.value == "luan" ||
      perdoruesi1.value == "Luan" ||
      perdoruesi1.value == "LUAN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= luan !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 2) {
    if (
      perdoruesi1.value == "shkoi" ||
      perdoruesi1.value == "Shkoi" ||
      perdoruesi1.value == "SHKOI"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= shkoi !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 3) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi1.value == "Eshte" ||
      perdoruesi1.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 5) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi.value == "Eshte" ||
      perdoruesi.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 6) {
    if (
      perdoruesi1.value == "luan" ||
      perdoruesi1.value == "Luan" ||
      perdoruesi1.value == "LUAN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= Genci !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 7) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi.value == "Eshte" ||
      perdoruesi.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 8) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi.value == "Eshte" ||
      perdoruesi.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titutitull2ll1.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 9) {
    if (
      perdoruesi1.value == "leh" ||
      perdoruesi1.value == "Leh" ||
      perdoruesi1.value == "LEH"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= leh !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 10) {
    if (
      perdoruesi1.value == "ecin" ||
      perdoruesi1.value == "Ecin" ||
      perdoruesi1.value == "ECIN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= ecin !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 11) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi.value == "Eshte" ||
      perdoruesi.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 12) {
    if (
      perdoruesi1.value == "rri" ||
      perdoruesi1.value == "Rri" ||
      perdoruesi1.value == "RRI"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= rri !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 13) {
    if (
      perdoruesi1.value == "Fluturon" ||
      perdoruesi1.value == "fluturon" ||
      perdoruesi1.value == "FLUTURON"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= fluturon !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 14) {
    if (
      perdoruesi1.value == "eshte" ||
      perdoruesi.value == "Eshte" ||
      perdoruesi.value == "ESHTE"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= eshte !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 15) {
    if (
      perdoruesi1.value == "peshkon" ||
      perdoruesi1.value == "Peshkon" ||
      perdoruesi1.value == "PESHKON"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= peshkon !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 16) {
    if (
      perdoruesi1.value == "luan" ||
      perdoruesi1.value == "Luan" ||
      perdoruesi1.value == "LUAN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= luan !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 17) {
    if (
      perdoruesi1.value == "ka" ||
      perdoruesi1.value == "Ka" ||
      perdoruesi1.value == "KA"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= ka !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 18) {
    if (
      perdoruesi1.value == "pelqen" ||
      perdoruesi1.value == "Pelqen" ||
      perdoruesi1.value == "PELQEN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= pelqen !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 19) {
    if (
      perdoruesi1.value == "hengri" ||
      perdoruesi1.value == "Hengri" ||
      perdoruesi1.value == "HENGRI"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= hengri !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raka == 20) {
    if (
      perdoruesi1.value == "ben" ||
      perdoruesi1.value == "Ben" ||
      perdoruesi1.value == "BEN"
    ) {
      titull2.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull2.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi1.value == "") {
      titull2.innerHTML = "Gjej kallezuesin tek fjalia";
      titull2.style.backgroundColor = "#3f2b86e8";
    } else {
      titull2.innerHTML = "Gabim ⛔️,Ishte= ben !";
      titull2.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  raka = Math.floor(Math.random() * 20) + 1;
  d = eval("b" + raka);
  inpfjaliaemer1.value = d;
  perdoruesi1.value = null;
});

// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
// Gjej mbiemrin
const inpfjaliaemer2 = document.querySelector("#inpfjaliaemer2");
const perdoruesi2 = document.querySelector("#perdoruesi2");
const btnemer2 = document.querySelector("#btnemer2");
const titull3 = document.querySelector("#titull3");

let c1 = "Macja ime eshte e vogel.";
let c2 = "Iliri  eshte i gjate.";
let c3 = "Marjo eshte infermier i zoti .";
let c4 = " Anita ka floke te zeza.";
let c5 = "Erindi  eshte futbollist i shkelqyer .";
let c6 = " Shkolla ka akritekture te bukur .";
let c7 = " Korabi eshte mal i larte.";
let c8 = " Iliri eshte nxenes shembullor .";
let c9 = " Qeni leh kundrejt maces te bardhe.";
let c10 = " Makinat  ecin me shpejtesi te madhe.";
let c11 = " Gjyshi  eshte doktor  i mire.";
let c12 = " Lopa ben qumesht te bardhe.";
let c13 = " Shqiponja fluturon ne qiellin blu.";
let c14 = " Futbolli eshte loje e bukur.";
let c15 = " Agroni  peshkon ne liqenin e thelle.";
let c16 = " Alberti eshte i shendoshe .";
let c17 = " Roberti eshte shkodran.";
let c18 = " Rei  eshte mjek i ri.";
let c19 = " Arbenita eshte zemergjere.";
let c20 = " Rea eshte feministe .";

let ramb = Math.floor(Math.random() * 20) + 1;
let k = eval("c" + ramb);

inpfjaliaemer2.value = k;

let t;

btnemer2.addEventListener("click", function () {
  t = perdoruesi2.value;
  t = t.toLowerCase();
  t = t.replace(/\s/g, "");
  if (ramb == 1) {
    if (t == "evogel") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= e vogel !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 2) {
    if (t == "igjate") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i gjate !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 3) {
    if (t == "izoti") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i zoti !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 4) {
    if (t == "tezeza") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= te zeza !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 5) {
    if (t == "ishkelqyer") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i shkelqyer !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 6) {
    if (t == "tebukur") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= te bukur !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 7) {
    if (t == "ilarte") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i larte !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 8) {
    if (t == "shembullor") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= shembullor !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 9) {
    if (t == "te bardhe") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= te bardhe !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 10) {
    if (t == "temadhe") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= te madhe !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 11) {
    if (t == "imire") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i mire !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 12) {
    if (t == "tebardhe") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= te bardhe !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 13) {
    if (t == "blu") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= blu !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 14) {
    if (t == "ebukur") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= e bukur !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 15) {
    if (t == "ethelle") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= e thelle !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 16) {
    if (t == "ishendoshe") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i shendoshe !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 17) {
    if (t == "shkodran") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= shkodran !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 18) {
    if (t == "iri") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= i ri !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 19) {
    if (t == "zemergjere") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= zemergjere !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (ramb == 20) {
    if (t == "feministe") {
      titull3.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull3.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi2.value == "") {
      titull3.innerHTML = "Gjej mbiemrin tek fjalia";
      titull3.style.backgroundColor = "#3f2b86e8";
    } else {
      titull3.innerHTML = "Gabim ⛔️,Ishte= feministe !";
      titull3.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  ramb = Math.floor(Math.random() * 20) + 1;
  k = eval("c" + ramb);

  inpfjaliaemer2.value = k;
  perdoruesi2.value = "";
});

// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin
// Gjej rrethanorin

const inpfjaliaemer3 = document.querySelector("#inpfjaliaemer3");
const perdoruesi3 = document.querySelector("#perdoruesi3");
const btnemer3 = document.querySelector("#btnemer3");
const titull4 = document.querySelector("#titull4");

let cc1 = "Ne mengjes dola te shetis rrugeve te qytetit..";
let cc2 = "Ai te nesermen u takua me fshataret e tij.";
let cc3 = "Aktoret u ngjiten ne skene.";
let cc4 = " Ndalohet parkimi i vetures ne trotuar.";
let cc5 = "Kishin ardhur nga Tirana.";
let cc6 = " Vetura levizte ngadale per shkak te peshes se madhe.";
let cc7 = " Pullazi i shtepise ishte renduar nga bora e madhe qe kishte rene.";
let cc8 = " S’me zinte gjumi nga shqetesimi.";
let cc9 = " Pse pushoi muzika ?";
let cc10 = " Ç’ pate, pse u skuqe ?";
let cc11 = " Te gjithve na digjnin syte prej tymit.";

let cc12 = " Kemi punuar shume per zbukurimin e qytetit.";
let cc13 = " Shkoi ne postin e ndertuar për vrojtim.";
let cc14 = " Per çudi aeroplanet nuk erdhen per te bombarduar.";
let cc15 = " Per qellimin e tij, ne na la ne mes te rruges.";

let cc16 = " Pavaresisa e Shqiperise u shpall me 28 nentor 1912.";
let cc17 = " Banonim se bashku.";
let cc18 = " Hapat e njerezve gjemonin ne menyre te frikshme.";
let cc19 = " Ai punon shume.";
let cc20 = " Une kam dyzet e ca vjet qe punoj kete pune.";

let rare = Math.floor(Math.random() * 20) + 1;
let kk = eval("cc" + rare);

inpfjaliaemer3.value = kk;

let tt;

btnemer3.addEventListener("click", function () {
  tt = perdoruesi3.value;
  tt = tt.toLowerCase();
  tt = tt.replace(/\s/g, "");
  if (rare == 1) {
    if (tt == "nemengjes") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= Ne mengjes !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 2) {
    if (tt == "tenesermen") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= te nesermen !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 3) {
    if (tt == "neskene") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= ne skene !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 4) {
    if (tt == "netrotuar") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= ne trotuar !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 5) {
    if (tt == "ngatirana") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= nga tirana !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 6) {
    if (tt == "pershkaktepeshessemadhe") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= per shkak te peshes se madhe!";
      titull4.style.backgroundColor = "#8b2025";
      titull4.style.fontSize = "8px";
      ga++;
    }
  } else if (rare == 7) {
    if (tt == "ngaboraemadheqekishterene") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= nga bora e madhe qe kishte rene!";
      titull4.style.backgroundColor = "#8b2025";
      titull4.style.fontSize = "8px";
      ga++;
    }
  } else if (rare == 8) {
    if (tt == "ngashqetesimi") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= nga shqetesimi !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 9) {
    if (tt == "pse") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= pse !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 10) {
    if (tt == "pse") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= pse !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 11) {
    if (tt == "prejtymit") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= prej tymit !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 12) {
    if (tt == "perzbukurimineqytetit") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= per zbukurimin e qytetit !";
      titull4.style.backgroundColor = "#8b2025";
      titull4.style.fontSize = "9px";
      ga++;
    }
  } else if (rare == 13) {
    if (tt == "pervrojtim") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= per vrojtim !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 14) {
    if (tt == "pertebombarduar") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= per te bombarduar !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 15) {
    if (tt == "perqelliminetij") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= per qellimin e tij !";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 16) {
    if (tt == "me28nentor1912") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= me 28 nentor 1912!";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 17) {
    if (tt == "sebashku") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= se bashku!";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 18) {
    if (tt == "menyretefrikshme" || tt == "nemenyretefrikshme") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte=menyre te frikshme!";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 19) {
    if (tt == "shume") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= shume!";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rare == 20) {
    if (tt == "dyzetecavjet") {
      titull4.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titull4.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perdoruesi3.value == "") {
      titull4.innerHTML = "Gjej rrethanorin tek fjalia";
      titull4.style.backgroundColor = "#3f2b86e8";
    } else {
      titull4.innerHTML = "Gabim ⛔️,Ishte= dyzet e ca vjet!";
      titull4.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rare = Math.floor(Math.random() * 20) + 1;
  kk = eval("cc" + rare);

  inpfjaliaemer3.value = kk;
  perdoruesi3.value = "";
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
