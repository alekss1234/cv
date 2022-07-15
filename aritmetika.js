let nr1 = Math.floor(Math.random() * 20) + 1;
let nr2 = Math.floor(Math.random() * 20) + 1;

document.querySelector(".nr1").value = nr1;
document.querySelector(".nr2").value = nr2;
let kot = nr1 + nr2;

let s = 0,
  g = 0;

document.querySelector("#bm").addEventListener("click", function () {
  let sh = document.querySelector(".rezultati").value;

  if (sh == kot) {
    document.querySelector(".titulli ").innerHTML =
      "BRAVO PERGJIGJE E SAKTE 🎉";
    document.querySelector(".titulli").style.backgroundColor = "#1d9768";
    s++;
  } else if (sh == "") {
    document.querySelector(".titulli ").innerHTML = "Mbledhje";
    document.querySelector(".titulli").style.backgroundColor = " #3f2b86e8";
  } else {
    document.querySelector(".titulli ").innerHTML =
      "Gabim ⛔️,Ishte= " + kot + " Provo perseri!";
    document.querySelector(".titulli").style.backgroundColor = "#8b2025";
    g++;
  }
  sh = document.querySelector(".rezultati").value = null;
  nr1 = Math.floor(Math.random() * 20) + 1;
  nr2 = Math.floor(Math.random() * 20) + 1;

  let hm = (s / (s + g)) * 100;
  document.querySelector("#p").textContent = hm;

  document.querySelector(".nr1").value = nr1;
  document.querySelector(".nr2").value = nr2;
  kot = nr1 + nr2;
});
//------------------------------------------------------------
//-------------------------------------------------------------

//-------------------------------------------------------------

let nz1 = 0;
let nz2 = 0;
let nr2z = 0;
let nr1z = 0;
for (let j = 0; j < 10000; j++) {
  nz1 = Math.floor(Math.random() * 20) + 1;
  nz2 = Math.floor(Math.random() * 20) + 1;

  if (nz1 > nz2) {
    nr2z = nz2;
    nr1z = nz1;

    break;
  }
}
document.querySelector("#nr1z").value = nr1z;
document.querySelector("#nr2z").value = nr2z;
let dif = nr1z - nr2z;

document.querySelector("#bz").addEventListener("click", function () {
  let f = document.querySelector("#rezultatiz").value;

  if (f == dif) {
    document.querySelector("#titulliz ").innerHTML =
      "BRAVO PERGJIGJE E SAKTE 🎉";
    document.querySelector("#titulliz").style.backgroundColor = "#1d9768";
    s++;
  } else if (f == "") {
    document.querySelector("#titulliz ").innerHTML = "Zbritje";
    document.querySelector("#titulliz").style.backgroundColor = " #3f2b86e8";
  } else {
    document.querySelector("#titulliz ").innerHTML =
      "Gabim ⛔️,Ishte= " + dif + " Provo perseri!";
    document.querySelector("#titulliz").style.backgroundColor = "#8b2025";
    g++;
  }
  f = document.querySelector("#rezultatiz").value = null;

  let hz = (s / (s + g)) * 100;
  document.querySelector("#p").textContent = hz;

  for (let k = 0; k < 10000; k++) {
    nz1 = Math.floor(Math.random() * 20) + 1;
    nz2 = Math.floor(Math.random() * 20) + 1;

    if (nz1 > nz2) {
      nr2z = nz2;
      nr1z = nz1;

      break;
    }
  }

  document.querySelector("#nr1z").value = nr1z;
  document.querySelector("#nr2z").value = nr2z;
  dif = nr1z - nr2z;
});
/*  ---------------------------------------
--------------------------------------------

--------------------------------------------*/
let nr1sh = Math.floor(Math.random() * 20) + 1;
let nr2sh = Math.floor(Math.random() * 20) + 1;

document.querySelector("#nr1sh").value = nr1sh;
document.querySelector("#nr2sh").value = nr2sh;
let dsh = nr1sh * nr2sh;

document.querySelector("#bsh").addEventListener("click", function () {
  let rsh = document.querySelector("#rezultatish").value;

  if (rsh == dsh) {
    document.querySelector("#titullish ").innerHTML =
      "BRAVO PERGJIGJE E SAKTE 🎉";
    document.querySelector("#titullish").style.backgroundColor = "#1d9768";
    s++;
  } else if (rsh == "") {
    document.querySelector("#titullish ").innerHTML = "Shumezimi";
    document.querySelector("#titullish").style.backgroundColor = " #3f2b86e8";
  } else {
    document.querySelector("#titullish ").innerHTML =
      "Gabim ⛔️,Ishte= " + dsh + " Provo perseri!";
    document.querySelector("#titullish").style.backgroundColor = "#8b2025";
    g++;
  }

  let hsh = (s / (s + g)) * 100;
  document.querySelector("#p").textContent = hsh;
  rsh = document.querySelector("#rezultatish").value = null;

  nr1sh = Math.floor(Math.random() * 20) + 1;
  nr2sh = Math.floor(Math.random() * 20) + 1;

  document.querySelector("#nr1sh").value = nr1sh;
  document.querySelector("#nr2sh").value = nr2sh;
  dsh = nr1sh * nr2sh;
});

/*  ---------------------------------------
--------------------------------------------

--------------------------------------------*/

let np1 = 0;
let np2 = 0;
let nr2p = 0;
let nr1p = 0;
for (let i = 0; i < 10000; i++) {
  np1 = Math.floor(Math.random() * 30) + 1;
  np2 = Math.floor(Math.random() * 10) + 1;

  if (np1 % np2 == 0) {
    nr2p = np2;
    nr1p = np1;

    break;
  }
}
document.querySelector("#nr1p").value = nr1p;
document.querySelector("#nr2p").value = nr2p;
let hr = nr1p / nr2p;

document.querySelector("#bp").addEventListener("click", function () {
  let rp = document.querySelector("#rezultatip").value;

  if (rp == hr) {
    document.querySelector("#titullip ").innerHTML =
      "BRAVO PERGJIGJE E SAKTE 🎉";
    document.querySelector("#titullip").style.backgroundColor = "#1d9768";
    s++;
  } else if (rp == "") {
    document.querySelector("#titullip ").innerHTML = "Pjestimi";
    document.querySelector("#titullip").style.backgroundColor = " #3f2b86e8";
  } else {
    document.querySelector("#titullip ").innerHTML =
      "Gabim ⛔️,Ishte= " + hr + " Provo perseri!";
    document.querySelector("#titullip").style.backgroundColor = "#8b2025";
    g++;
  }
  rp = document.querySelector("#rezultatip").value = null;

  for (let i = 0; i < 10000; i++) {
    np1 = Math.floor(Math.random() * 30) + 1;
    np2 = Math.floor(Math.random() * 10) + 1;

    if (np1 % np2 == 0) {
      nr2p = np2;
      nr1p = np1;

      break;
    }
  }

  let hp = (s / (s + g)) * 100;
  document.querySelector("#p").textContent = hp;

  document.querySelector("#nr1p").value = nr1p;
  document.querySelector("#nr2p").value = nr2p;
  hr = nr1p / nr2p;
});

// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie
// kodi qe ben reset % e saktesie

document.querySelector("#resets").addEventListener("click", function () {
  s = 0;
  g = 0;
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
