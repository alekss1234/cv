const titullipk = document.querySelector("#tik1");
const titullisk = document.querySelector("#tik2");
const titullipd = document.querySelector("#tid1");
const titullisd = document.querySelector("#tid2");
const titullipt = document.querySelector("#tit1");
const titullist = document.querySelector("#tit2");
const titullipr = document.querySelector("#tir1");
const titullisr = document.querySelector("#tir2");
/*  ---------------------------
--------------------------------*/
const inperk = document.querySelector("#inperk");
const insipk = document.querySelector("#insipk");
const inperd = document.querySelector("#inperd");
const insipd = document.querySelector("#insipd");
const inpert = document.querySelector("#inpert");
const insipt = document.querySelector("#insipt");
const inperr = document.querySelector("#inperr");
const insipr = document.querySelector("#insipr");
/*  ---------------------------
--------------------------------*/
const btnpsk = document.querySelector("#btnpsk");
const btnpsd = document.querySelector("#btnpsd");
const btnpst = document.querySelector("#btnpst");
const btnpsr = document.querySelector("#btnpsr");
/*  ---------------------------
--------------------------------*/

const fotok = document.querySelector("#fotok");
const fotod = document.querySelector("#fotod");
const fotot = document.querySelector("#fotot");
const fotor = document.querySelector("#fotor");

let rnk = Math.floor(Math.random() * 12) + 1;

fotok.src = `img-gjeometri/k${rnk}.PNG`;

let sa = 0,
  ga = 0;

btnpsk.addEventListener("click", function () {
  let sipk = insipk.value;
  let perk = inperk.value;

  /*  ---------------------------
--------------------------------
---------------------------------
-------------------------------
----------------------------*/
  if (rnk == 1) {
    if (perk == 4) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 4 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 1) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 1 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 2) {
    /*  ---------------------------
--------------------------------
---------------------------------
-------------------------------
----------------------------*/
    if (perk == 8) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 8 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 4) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 4 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 3) {
    /*  ---------------------------
--------------------------------
---------------------------------
-------------------------------
----------------------------*/
    if (perk == 12) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 9) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 9 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/ else if (rnk == 4) {
    if (perk == 16) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 16 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 16) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 16 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 5) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 20) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 20 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 25) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 25 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 6) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 24) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 24 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 36) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 36 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 7) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 28) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 28 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 49) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 49 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 8) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 32) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 32 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 64) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 64 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 9) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 36) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 36 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 81) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 81 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 10) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 40) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 40 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 100) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 100 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 11) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 44) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 44 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 121) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 121 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnk == 12) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perk == 48) {
      titullipk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perk == "") {
      titullipk.innerHTML = "Gjej perimetrin e katrorit";
      titullipk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipk.innerHTML = "Gabim ⛔️,Ishte= " + 48 + " Provo perseri!";
      titullipk.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
--------------------------------*/

    if (sipk == 144) {
      titullisk.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisk.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipk == "") {
      titullisk.innerHTML = "Gjej siperfaqen e katrorit";
      titullisk.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisk.innerHTML = "Gabim ⛔️,Ishte= " + 144 + " Provo perseri!";
      titullisk.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rnk = Math.floor(Math.random() * 12) + 1;

  fotok.src = `img-gjeometri/k${rnk}.PNG`;
  sipk = insipk.value = null;
  perk = inperk.value = null;
});
/*  ---------------------------
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi
Drejtkendeshi

--------------------------------*/

let rnd = Math.floor(Math.random() * 12) + 1;

fotod.src = `img-gjeometri/d${rnd}.PNG`;

btnpsd.addEventListener("click", function () {
  let sipd = insipd.value;
  let perd = inperd.value;

  /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
  if (rnd == 1) {
    if (perd == 6) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 6 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 2) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 2 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 2) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perd == 8) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 8 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 3) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 3 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 3) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perd == 10) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 10 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 4) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 4 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/ else if (rnd == 4) {
    if (perd == 12) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 5) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 5 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 5) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 14) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 14 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 10) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 10 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 6) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 16) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 16 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 15) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 15 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 7) {
    /*  --------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 18) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 20) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 20 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 8) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 10) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 10 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 6) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 6 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 9) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 12) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 8) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 8 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 10) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 14) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 14 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 12) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 11) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 16) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 16 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 12) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnd == 12) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perd == 18) {
      titullipd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perd == "") {
      titullipd.innerHTML = "Gjej perimetrin e katrorit";
      titullipd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipd.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullipd.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipd == 18) {
      titullisd.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisd.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipd == "") {
      titullisd.innerHTML = "Gjej siperfaqen e katrorit";
      titullisd.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisd.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullisd.style.backgroundColor = "#8b2025";
      ga++;
    }
  }
  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rnd = Math.floor(Math.random() * 12) + 1;

  fotod.src = `img-gjeometri/d${rnd}.PNG`;
  sipd = insipd.value = null;
  perd = inperd.value = null;
});

/*  ---------------------------
Trekendeshi
Trekendeshi
Trekendeshi
Trelendesi
Trekendeshi
Trekendeshi
Trekendeshi
Trelendesi
Trekendeshi
Trekendeshi
Trekendeshi
Trelendesi
Trekendeshi
Trekendeshi
Trekendeshi
Trelendesi
  --------------------------------*/

let rnt = Math.floor(Math.random() * 10) + 1;

fotot.src = `img-gjeometri/t${rnt}.PNG`;

btnpst.addEventListener("click", function () {
  let sipt = insipt.value;
  let pert = inpert.value;

  /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
  if (rnt == 1) {
    if (pert == 6) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 6 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 1) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 1 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 2) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (pert == 9) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 9 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 3) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 3 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 3) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (pert == 12) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 6) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 6 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/ else if (rnt == 4) {
    if (pert == 15) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 15 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 10) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 10 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 5) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 18) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 9) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 9 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 6) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 18) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 12) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 12 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 7) {
    /*  --------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 18) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 18 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 15) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 15 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 8) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 21) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 21 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 14) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 14 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 9) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 24) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 24 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 24) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 24 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnt == 10) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (pert == 24) {
      titullipt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipt.style.backgroundColor = "#1d9768";
      sa++;
    } else if (pert == "") {
      titullipt.innerHTML = "Gjej perimetrin e katrorit";
      titullipt.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipt.innerHTML = "Gabim ⛔️,Ishte= " + 24 + " Provo perseri!";
      titullipt.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipt == 20) {
      titullist.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullist.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipt == "") {
      titullist.innerHTML = "Gjej siperfaqen e katrorit";
      titullist.style.backgroundColor = "#3f2b86e8";
    } else {
      titullist.innerHTML = "Gabim ⛔️,Ishte= " + 20 + " Provo perseri!";
      titullist.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rnt = Math.floor(Math.random() * 10) + 1;

  fotot.src = `img-gjeometri/t${rnt}.PNG`;
  sipt = insipt.value = null;
  pert = inpert.value = null;
});
/*  ---------------------------
rreth
rreth
rreth
rreth
rreth
rreth
rreth
rreth
rreth
rreth
rreth
rreth
  --------------------------------*/

let rnr = Math.floor(Math.random() * 10) + 1;

fotor.src = `img-gjeometri/r${rnr}.PNG`;

btnpsr.addEventListener("click", function () {
  let sipr = insipr.value;
  let perr = inperr.value;

  /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
  if (rnr == 1) {
    if (perr == 6.28) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 6.28 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 3.14) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 3.14 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 2) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perr == 12.56) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 12.56 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 12.56) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 12.56 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 3) {
    /*  ---------------------------
  --------------------------------
  ---------------------------------
  -------------------------------
  ----------------------------*/
    if (perr == 18.84) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 18.84 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 28.26) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 28.26 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/ else if (rnr == 4) {
    if (perr == 25.12) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 25.12 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 50.24) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 50.24 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 5) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 31.4) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 31.4 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 78.5) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 78.5 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 6) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 37.68) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 37.68 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 113.04) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 113.04 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 7) {
    /*  --------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 43.96) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 43.96 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 153.86) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 153.86 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 8) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 50.24) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 50.24 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 200.96) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 200.96 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 9) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 56.52) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 56.52 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 254.34) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 254.34 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (rnr == 10) {
    /*  ---------------------------
    --------------------------------
    ---------------------------------
    -------------------------------
    ----------------------------*/
    if (perr == 62.8) {
      titullipr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullipr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (perr == "") {
      titullipr.innerHTML = "Gjej perimetrin e katrorit";
      titullipr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullipr.innerHTML = "Gabim ⛔️,Ishte= " + 62.8 + " Provo perseri!";
      titullipr.style.backgroundColor = "#8b2025";
      ga++;
    }

    /*  ---------------------------
  --------------------------------*/

    if (sipr == 314) {
      titullisr.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullisr.style.backgroundColor = "#1d9768";
      sa++;
    } else if (sipr == "") {
      titullisr.innerHTML = "Gjej siperfaqen e katrorit";
      titullisr.style.backgroundColor = "#3f2b86e8";
    } else {
      titullisr.innerHTML = "Gabim ⛔️,Ishte= " + 314 + " Provo perseri!";
      titullisr.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rnr = Math.floor(Math.random() * 10) + 1;

  fotor.src = `img-gjeometri/r${rnr}.PNG`;
  sipr = insipr.value = null;
  perr = inperr.value = null;
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
