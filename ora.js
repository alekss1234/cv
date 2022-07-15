const titullmuaji = document.querySelector("#titullmuaji");
const inmuaji1 = document.querySelector("#inmuaji1");
const inmuaji2 = document.querySelector("#inmuaji2");
const btnmuaji = document.querySelector("#btnmuaji");

let nrm = Math.floor(Math.random() * 12) + 1;
inmuaji1.value = nrm;

let sa = 0,
  ga = 0;

btnmuaji.addEventListener("click", function () {
  if (nrm == 1) {
    if (
      inmuaji2.value == "Janar" ||
      inmuaji2.value == "JANAR" ||
      inmuaji2.value == "janar"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Janar !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 2) {
    if (
      inmuaji2.value == "Shkurt" ||
      inmuaji2.value == "shkurt" ||
      inmuaji2.value == "SHKURT"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Shkurt !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 3) {
    if (
      inmuaji2.value == "Mars" ||
      inmuaji2.value == "mars" ||
      inmuaji2.value == "MARS"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Mars !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 4) {
    if (
      inmuaji2.value == "Prill" ||
      inmuaji2.value == "prill" ||
      inmuaji2.value == "PRILL"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Prill !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 5) {
    if (
      inmuaji2.value == "Maj" ||
      inmuaji2.value == "maj" ||
      inmuaji2.value == "MAJ"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Maj !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 6) {
    if (
      inmuaji2.value == "Qershor" ||
      inmuaji2.value == "QERSHOR" ||
      inmuaji2.value == "qershor"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      sa++;
      titullmuaji.style.backgroundColor = "#1d9768";
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Qershor !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 7) {
    if (
      inmuaji2.value == "Korrik" ||
      inmuaji2.value == "korrik" ||
      inmuaji2.value == "KORRIK"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Korrik !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 8) {
    if (
      inmuaji2.value == "Gusht" ||
      inmuaji2.value == "gusht" ||
      inmuaji2.value == "GUSHT"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Gusht !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 9) {
    if (
      inmuaji2.value == "Shtator" ||
      inmuaji2.value == "shtator" ||
      inmuaji2.value == "SHTATOR"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Shtator !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 10) {
    if (
      inmuaji2.value == "Tetor" ||
      inmuaji2.value == "tetor" ||
      inmuaji2.value == "TETOR"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Tetor !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 11) {
    if (
      inmuaji2.value == "Nentor" ||
      inmuaji2.value == "nentor" ||
      inmuaji2.value == "NENTOR"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Nentor !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrm == 12) {
    if (
      inmuaji2.value == "Dhjetor" ||
      inmuaji2.value == "dhjetor" ||
      inmuaji2.value == "DHJETOR"
    ) {
      titullmuaji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullmuaji.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inmuaji2.value == "") {
      titullmuaji.innerHTML = "Gjej muajin perkates me numrin";
      titullmuaji.style.backgroundColor = "#3f2b86e8";
    } else {
      titullmuaji.innerHTML = "Gabim ⛔️,Ishte= Dhjetor !";
      titullmuaji.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrm = Math.floor(Math.random() * 12) + 1;
  inmuaji1.value = nrm;
  inmuaji2.value = null;
});

// Gjej javen

// Gjej javen

// Gjej javen

// Gjej javen

// Gjej javen

// Gjej javen

// Gjej javen

// Gjej javen

const titulljava = document.querySelector("#titulljava");
const inpjava1 = document.querySelector("#inpjava1");
const inpjava2 = document.querySelector("#inpjava2");
const inpjava3 = document.querySelector("#inpjava3");
const inpjava4 = document.querySelector("#inpjava4");
const inpjava5 = document.querySelector("#inpjava5");
const inpjava6 = document.querySelector("#inpjava6");
const inpjava7 = document.querySelector("#inpjava7");
const btnjava = document.querySelector("#btnjava");

let nrj = Math.floor(Math.random() * 7) + 1;

if (nrj == 1) {
  inpjava1.value = null;
  inpjava2.value = "E marte";
  inpjava3.value = "E merkure";
  inpjava4.value = "E enjte";
  inpjava5.value = "E premte";
  inpjava6.value = "E shtune";
  inpjava7.value = "E diel";
} else if (nrj == 2) {
  inpjava1.value = "E hene";
  inpjava2.value = null;
  inpjava3.value = "E merkure";
  inpjava4.value = "E enjte";
  inpjava5.value = "E premte";
  inpjava6.value = "E shtune";
  inpjava7.value = "E diel";
} else if (nrj == 3) {
  inpjava1.value = "E hene";
  inpjava2.value = "E marte";
  inpjava3.value = null;
  inpjava4.value = "E enjte";
  inpjava5.value = "E premte";
  inpjava6.value = "E shtune";
  inpjava7.value = "E diel";
} else if (nrj == 4) {
  inpjava1.value = "E hene";
  inpjava2.value = "E marte";
  inpjava3.value = "E merkure";
  inpjava4.value = null;
  inpjava5.value = "E premte";
  inpjava6.value = "E shtune";
  inpjava7.value = "E diel";
} else if (nrj == 5) {
  inpjava1.value = "E hene";
  inpjava2.value = "E marte";
  inpjava3.value = "E merkure";
  inpjava4.value = "E enjte";
  inpjava5.value = null;
  inpjava6.value = "E shtune";
  inpjava7.value = "E diel";
} else if (nrj == 6) {
  inpjava1.value = "E hene";
  inpjava2.value = "E marte";
  inpjava3.value = "E merkure";
  inpjava4.value = "E enjte";
  inpjava5.value = "E premte";
  inpjava6.value = null;
  inpjava7.value = "E diel";
} else if (nrj == 7) {
  inpjava1.value = "E hene";
  inpjava2.value = "E marte";
  inpjava3.value = "E merkure";
  inpjava4.value = "E enjte";
  inpjava5.value = "E premte";
  inpjava6.value = "E shtune";
  inpjava7.value = null;
}

btnjava.addEventListener("click", function () {
  if (nrj == 1) {
    if (
      inpjava1.value == "E hene" ||
      inpjava1.value == "e hene" ||
      inpjava1.value == "E HENE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava1.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E hene !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 2) {
    if (
      inpjava2.value == "E marte" ||
      inpjava2.value == "e marte" ||
      inpjava2.value == "E MARTE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava2.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E marte !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 3) {
    if (
      inpjava3.value == "E merkure" ||
      inpjava3.value == "e merkure" ||
      inpjava3.value == "E MERKURE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava3.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E merkure !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 4) {
    if (
      inpjava4.value == "E enjte" ||
      inpjava4.value == "e enjte" ||
      inpjava4.value == "E ENJTE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava4.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E enjte !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 5) {
    if (
      inpjava5.value == "E premte" ||
      inpjava5.value == "e premte" ||
      inpjava5.value == "E PREMTE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava5.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E premte !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 6) {
    if (
      inpjava6.value == "E shtune" ||
      inpjava6.value == "e shtune" ||
      inpjava6.value == "E SHTUNE"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava6.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E shtune !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrj == 7) {
    if (
      inpjava7.value == "E diel" ||
      inpjava7.value == "e diel" ||
      inpjava7.value == "E DIEL"
    ) {
      titulljava.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titulljava.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpjava7.value == "") {
      titulljava.innerHTML = "Gjej diten qe mungon";
      titulljava.style.backgroundColor = "#3f2b86e8";
    } else {
      titulljava.innerHTML = "Gabim ⛔️,Ishte= E diel !";
      titulljava.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrj = Math.floor(Math.random() * 7) + 1;

  if (nrj == 1) {
    inpjava1.value = null;
    inpjava2.value = "E marte";
    inpjava3.value = "E merkure";
    inpjava4.value = "E enjte";
    inpjava5.value = "E premte";
    inpjava6.value = "E shtune";
    inpjava7.value = "E diel";
  } else if (nrj == 2) {
    inpjava1.value = "E hene";
    inpjava2.value = null;
    inpjava3.value = "E merkure";
    inpjava4.value = "E enjte";
    inpjava5.value = "E premte";
    inpjava6.value = "E shtune";
    inpjava7.value = "E diel";
  } else if (nrj == 3) {
    inpjava1.value = "E hene";
    inpjava2.value = "E marte";
    inpjava3.value = null;
    inpjava4.value = "E enjte";
    inpjava5.value = "E premte";
    inpjava6.value = "E shtune";
    inpjava7.value = "E diel";
  } else if (nrj == 4) {
    inpjava1.value = "E hene";
    inpjava2.value = "E marte";
    inpjava3.value = "E merkure";
    inpjava4.value = null;
    inpjava5.value = "E premte";
    inpjava6.value = "E shtune";
    inpjava7.value = "E diel";
  } else if (nrj == 5) {
    inpjava1.value = "E hene";
    inpjava2.value = "E marte";
    inpjava3.value = "E merkure";
    inpjava4.value = "E enjte";
    inpjava5.value = null;
    inpjava6.value = "E shtune";
    inpjava7.value = "E diel";
  } else if (nrj == 6) {
    inpjava1.value = "E hene";
    inpjava2.value = "E marte";
    inpjava3.value = "E merkure";
    inpjava4.value = "E enjte";
    inpjava5.value = "E premte";
    inpjava6.value = null;
    inpjava7.value = "E diel";
  } else if (nrj == 7) {
    inpjava1.value = "E hene";
    inpjava2.value = "E marte";
    inpjava3.value = "E merkure";
    inpjava4.value = "E enjte";
    inpjava5.value = "E premte";
    inpjava6.value = "E shtune";
    inpjava7.value = null;
  }
});

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

// Gjej emocionet

const titullemoji = document.querySelector("#titullemoji");
const fotoemoji = document.querySelector("#fotoemoji");
const btnemoji1 = document.querySelector("#btnemoji1");
const btnemoji2 = document.querySelector("#btnemoji2");
const btnemoji3 = document.querySelector("#btnemoji3");
const btnemoji4 = document.querySelector("#btnemoji4");
const btnemoji5 = document.querySelector("#btnemoji5");
const btnemoji6 = document.querySelector("#btnemoji6");
const btnemoji7 = document.querySelector("#btnemoji7");
const btnemoji8 = document.querySelector("#btnemoji8");

let rem = Math.floor(Math.random() * 7) + 1;
fotoemoji.src = `img-emoji/em${rem}.png`;

btnemoji1.addEventListener("click", function () {
  if (rem == 1) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;
  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji2.addEventListener("click", function () {
  if (rem == 2) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji3.addEventListener("click", function () {
  if (rem == 3) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji4.addEventListener("click", function () {
  if (rem == 4) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    sa++;
    titullemoji.style.backgroundColor = "#1d9768";
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji5.addEventListener("click", function () {
  if (rem == 5) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji6.addEventListener("click", function () {
  if (rem == 6) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji7.addEventListener("click", function () {
  if (rem == 7) {
    titullemoji.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullemoji.style.backgroundColor = "#1d9768";
    sa++;
  } else {
    titullemoji.innerHTML = "Gabim ⛔️,Provo perseri !";
    titullemoji.style.backgroundColor = "#8b2025";
    ga++;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

btnemoji8.addEventListener("click", function () {
  titullemoji.innerHTML = "Gjej gjendjen emocionale per foto";
  titullemoji.style.backgroundColor = "#3f2b86e8";

  rem = Math.floor(Math.random() * 7) + 1;
  fotoemoji.src = `img-emoji/em${rem}.png`;
});

//Gjej oren

//Gjej oren

//Gjej oren

//Gjej oren

//Gjej oren

//Gjej oren

//Gjej oren

const titullora = document.querySelector("#titullora");
const fotoora = document.querySelector("#fotoora");
const inpora1 = document.querySelector("#inpora1");
const inpora2 = document.querySelector("#inpora2");
const inpora3 = document.querySelector("#inpora3");
const btnora = document.querySelector("#btnora");

let raor = Math.floor(Math.random() * 18) + 1;
fotoora.src = `img-emoji/q${raor}.png`;
inpora2.value = "e";
btnora.addEventListener("click", function () {
  if (raor == 1) {
    if (
      (inpora1.value == "4" || inpora1.value == "04") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 2) {
    if (
      inpora1.value == "10" &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 3) {
    if (inpora1.value == "11" && inpora3.value == "55") {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 4) {
    if (inpora1.value == "10" && inpora3.value == "30") {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 5) {
    if (
      (inpora1.value == "5" || inpora1.value == "05") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 6) {
    if (
      (inpora1.value == "7" || inpora1.value == "07") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 7) {
    if (
      (inpora1.value == "3" || inpora1.value == "03") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 8) {
    if (
      inpora1.value == "11" &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 9) {
    if (
      (inpora1.value == "4" || inpora1.value == "04") &&
      inpora3.value == "30"
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 10) {
    if (
      inpora1.value == "10" &&
      (inpora3.value == "09" || inpora3.value == "9")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 11) {
    if (
      inpora1.value == "12" &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 12) {
    if (
      (inpora1.value == "6" || inpora1.value == "06") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 13) {
    if (
      (inpora1.value == "1" || inpora1.value == "01") &&
      (inpora3.value == "0" || inpora3.value == "" || inpora3.value == "00")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 14) {
    if (
      (inpora1.value == "2" || inpora1.value == "02") &&
      inpora3.value == "29"
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 15) {
    if (
      (inpora1.value == "2" || inpora1.value == "02") &&
      inpora3.value == "50"
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 16) {
    if (
      (inpora1.value == "3" || inpora1.value == "03") &&
      inpora3.value == "30"
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 17) {
    if (
      inpora1.value == "10" &&
      (inpora3.value == "07" || inpora3.value == "7")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (raor == 18) {
    if (
      inpora1.value == "12" &&
      (inpora3.value == "05" || inpora3.value == "5")
    ) {
      titullora.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullora.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpora1.value == "" && inpora3.value == "") {
      titullora.innerHTML = "Gjej oren  ne foto";
      titullora.style.backgroundColor = "#3f2b86e8";
    } else {
      titullora.innerHTML = "Gabim ⛔️,Provo perseri !";
      titullora.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  raor = Math.floor(Math.random() * 18) + 1;
  fotoora.src = `img-emoji/q${raor}.png`;
  inpora2.value = "e";

  inpora1.value = "";
  inpora3.value = "";
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
