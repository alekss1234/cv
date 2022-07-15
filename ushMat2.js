const fotothyesa = document.querySelector("#fodele1");
const inth1 = document.querySelector("#inpdele1");
const inth2 = document.querySelector("#inpdele12");
const btnthy = document.querySelector("#btndele1");
const titullthy = document.querySelector("#titulldele1");

let nrth = Math.floor(Math.random() * 16) + 1;

fotothyesa.src = `img-ushMat2/t${nrth}.png`;

let sa = 0,
  ga = 0;

btnthy.addEventListener("click", function () {
  if (nrth == 1) {
    if (inth1.value == 2 && inth2.value == 4) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 2/4, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 2) {
    if (inth1.value == 2 && inth2.value == 3) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 2/3, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 3) {
    if (inth1.value == 3 && inth2.value == 8) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 3/8, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 4) {
    if (inth1.value == 6 && inth2.value == 8) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 6/8, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 5) {
    if (inth1.value == 1 && inth2.value == 2) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 1/2, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 6) {
    if (inth1.value == 5 && inth2.value == 8) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 5/8, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 7) {
    if (inth1.value == 4 && inth2.value == 8) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 4/8, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 8) {
    if (inth1.value == 4 && inth2.value == 4) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 4/4, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 9) {
    if (inth1.value == 1 && inth2.value == 2) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 1/2, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 10) {
    if (inth1.value == 3 && inth2.value == 4) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 3/4, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 11) {
    if (inth1.value == 2 && inth2.value == 3) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 2/3, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 12) {
    if (inth1.value == 6 && inth2.value == 9) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 6/9, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 13) {
    if (inth1.value == 4 && inth2.value == 12) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 4/12, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 14) {
    if (inth1.value == 2 && inth2.value == 6) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 2/6, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 15) {
    if (inth1.value == 1 && inth2.value == 5) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 1/5, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrth == 16) {
    if (inth1.value == 2 && inth2.value == 10) {
      titullthy.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullthy.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inth1.value == "" && inth2.value == "") {
      titullthy.innerHTML = " Vendos numeruesin dhe emeruesin";
      titullthy.style.backgroundColor = " #3f2b86e8";
    } else {
      titullthy.innerHTML = "Gabim ⛔️,Ishte 2/10, Provo perseri!";
      titullthy.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrth = Math.floor(Math.random() * 16) + 1;

  fotothyesa.src = `img-ushMat2/t${nrth}.png`;
  inth1.value = null;
  inth2.value = null;
});

// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
// GJej nr e shkruar
const titullgn = document.querySelector("#titullemrifg1");
const fotogn = document.querySelector("#fotoemrifg1");
const inpgn = document.querySelector("#inpemrifg1");
const btngn = document.querySelector("#btnemrifg1");

let nrgn = Math.floor(Math.random() * 20) + 1;

fotogn.src = `img-ushMat2/q${nrgn}.png`;

btngn.addEventListener("click", function () {
  if (nrgn == 1) {
    if (inpgn.value == 1) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:1, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 2) {
    if (inpgn.value == 2) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:2, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 3) {
    if (inpgn.value == 3) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:3, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 4) {
    if (inpgn.value == 4) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:4, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 5) {
    if (inpgn.value == 5) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:5, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 6) {
    if (inpgn.value == 6) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:6, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 7) {
    if (inpgn.value == 7) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:7, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 8) {
    if (inpgn.value == 8) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:8, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 9) {
    if (inpgn.value == 9) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:9, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 10) {
    if (inpgn.value == 10) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:10, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 11) {
    if (inpgn.value == 11) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:11, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 12) {
    if (inpgn.value == 12) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:12, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 13) {
    if (inpgn.value == 13) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:13, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 14) {
    if (inpgn.value == 14) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:14, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 15) {
    if (inpgn.value == 15) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:15, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 16) {
    if (inpgn.value == 16) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:16, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 17) {
    if (inpgn.value == 17) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:17, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 18) {
    if (inpgn.value == 18) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:18, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 19) {
    if (inpgn.value == 19) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:19, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (nrgn == 20) {
    if (inpgn.value == 20) {
      titullgn.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullgn.style.backgroundColor = "#1d9768";
      sa++;
    } else if (inpgn.value == "") {
      titullgn.innerHTML = "  Gjej numrin e shkruar ne foto";
      titullgn.style.backgroundColor = " #3f2b86e8";
    } else {
      titullgn.innerHTML = "Gabim ⛔️,Ishte nr:20, Provo perseri!";
      titullgn.style.backgroundColor = "#8b2025";
      ga++;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  nrgn = Math.floor(Math.random() * 20) + 1;
  inpgn.value = null;
  fotogn.src = `img-ushMat2/q${nrgn}.png`;
});

// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene
// rendit ne rendes zbrites numrat e dhene

const titullrz = document.querySelector("#titullshenja1");
const edhena1 = document.querySelector("#nr1shenja1");
const edhena2 = document.querySelector("#nr2shenja1");
const edhena3 = document.querySelector("#nr3shenja1");
const edhena4 = document.querySelector("#nr4shenja1");
const inrz1 = document.querySelector("#nnr1shenja1");
const inrz2 = document.querySelector("#nnr2shenja1");
const inrz3 = document.querySelector("#nnr3shenja1");
const inrz4 = document.querySelector("#nnr4shenja1");
const btnrz = document.querySelector("#btnshenja1");

let nrz11 = Math.floor(Math.random() * 100) + 1;
let nrz22 = Math.floor(Math.random() * 100) + 1;
let nrz33 = Math.floor(Math.random() * 100) + 1;
let nrz44 = Math.floor(Math.random() * 100) + 1;

let nrz1, nrz2, nrz3, nrz4;
for (let i = 0; i < 1000; i++) {
  if (
    nrz11 != nrz22 &&
    nrz11 != nrz33 &&
    nrz11 != nrz44 &&
    nrz22 != nrz33 &&
    nrz22 != nrz44 &&
    nrz33 != nrz44
  ) {
    nrz1 = nrz11;
    nrz2 = nrz22;
    nrz3 = nrz33;
    nrz4 = nrz44;

    break;
  }
  nrz11 = Math.floor(Math.random() * 100) + 1;
  nrz22 = Math.floor(Math.random() * 100) + 1;
  nrz33 = Math.floor(Math.random() * 100) + 1;
  nrz44 = Math.floor(Math.random() * 100) + 1;
}
edhena1.value = nrz1;
edhena2.value = nrz2;
edhena3.value = nrz3;
edhena4.value = nrz4;

btnrz.addEventListener("click", function () {
  if (
    (inrz1.value == nrz1 ||
      inrz1.value == nrz2 ||
      inrz1.value == nrz3 ||
      inrz1.value == nrz4) &&
    (inrz2.value == nrz1 ||
      inrz2.value == nrz2 ||
      inrz2.value == nrz3 ||
      inrz2.value == nrz4) &&
    (inrz3.value == nrz1 ||
      inrz3.value == nrz2 ||
      inrz3.value == nrz3 ||
      inrz3.value == nrz4) &&
    (inrz4.value == nrz1 ||
      inrz4.value == nrz2 ||
      inrz4.value == nrz3 ||
      inrz4.value == nrz4)
  ) {
    if (
      inrz1.value > inrz2.value &&
      inrz2.value > inrz3.value &&
      inrz3.value > inrz4.value
    ) {
      titullrz.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
      titullrz.style.backgroundColor = "#1d9768";
      sa++;
    } else if (
      inrz1.value == "" &&
      inrz2.value == "" &&
      inrz3.value == "" &&
      inrz4.value == ""
    ) {
      titullrz.innerHTML = " Vendos numrat ne rend zbrites";
      titullrz.style.backgroundColor = " #3f2b86e8";
    } else {
      titullrz.innerHTML = "Gabim ⛔️, Provo perseri!";
      titullrz.style.backgroundColor = "#8b2025";
      ga++;
    }
  } else if (
    inrz1.value == "" &&
    inrz2.value == "" &&
    inrz3.value == "" &&
    inrz4.value == ""
  ) {
    titullrz.innerHTML = " Vendos numrat ne rend zbrites";
    titullrz.style.backgroundColor = " #3f2b86e8";
    s;
  } else {
    titullrz.innerHTML = "Gabim ⛔️,vendos numrat e dhene";
    titullrz.style.backgroundColor = "#8b2025";
    ga++;
  }

  nrz11 = Math.floor(Math.random() * 100) + 1;
  nrz22 = Math.floor(Math.random() * 100) + 1;
  nrz33 = Math.floor(Math.random() * 100) + 1;
  nrz44 = Math.floor(Math.random() * 100) + 1;

  for (let i = 0; i < 1000; i++) {
    if (
      nrz11 != nrz22 &&
      nrz11 != nrz33 &&
      nrz11 != nrz44 &&
      nrz22 != nrz33 &&
      nrz22 != nrz44 &&
      nrz33 != nrz44
    ) {
      nrz1 = nrz11;
      nrz2 = nrz22;
      nrz3 = nrz33;
      nrz4 = nrz44;

      break;
    }
    nrz11 = Math.floor(Math.random() * 100) + 1;
    nrz22 = Math.floor(Math.random() * 100) + 1;
    nrz33 = Math.floor(Math.random() * 100) + 1;
    nrz44 = Math.floor(Math.random() * 100) + 1;
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  edhena1.value = nrz1;
  edhena2.value = nrz2;
  edhena3.value = nrz3;
  edhena4.value = nrz4;

  inrz1.value = null;
  inrz2.value = null;
  inrz3.value = null;
  inrz4.value = null;
});

//Rregull 3
//Rregull 3
//Rregull 3
//Rregull 3
//Rregull 3
//Rregull 3
//Rregull 3
//Rregull 3
const titullrt = document.querySelector("#ttc1");
const inprt1 = document.querySelector("#inpct1");
const inprt2 = document.querySelector("#inpct2");
const inprt3 = document.querySelector("#inpct3");
const vlx = document.querySelector("#inpct4");
const btnrt = document.querySelector("#btnrt");

let nrrt1 = Math.floor(Math.random() * 20) + 1;
let nrrt2 = Math.floor(Math.random() * 20) + 1;
let nrrt3 = Math.floor(Math.random() * 20) + 1;

for (let i = 0; i < 1000; i++) {
  nrrt1 = Math.floor(Math.random() * 20) + 1;
  nrrt2 = Math.floor(Math.random() * 20) + 1;
  nrrt3 = Math.floor(Math.random() * 20) + 1;
  if ((nrrt2 * nrrt3) % nrrt1 == 0) {
    break;
  }
}

inprt1.value = nrrt1;
inprt2.value = nrrt2;
inprt3.value = nrrt3;

btnrt.addEventListener("click", function () {
  if (vlx.value == (nrrt2 * nrrt3) / nrrt1) {
    titullrt.innerHTML = "BRAVO PERGJIGJE E SAKTE 🎉";
    titullrt.style.backgroundColor = "#1d9768";
    sa++;
  } else if (vlx.value == "") {
    titullrt.innerHTML = "Gjej vleren me rregullen e 3";
    titullrt.style.backgroundColor = " #3f2b86e8";
  } else {
    titullrt.innerHTML =
      "Gabim ⛔️,ishte " + (nrrt2 * nrrt3) / nrrt1 + " ,Provo perseri!";
    titullrt.style.backgroundColor = "#8b2025";
    ga++;
  }

  nrrt1 = Math.floor(Math.random() * 20) + 1;
  nrrt2 = Math.floor(Math.random() * 20) + 1;
  nrrt3 = Math.floor(Math.random() * 20) + 1;

  for (let i = 0; i < 1000; i++) {
    nrrt1 = Math.floor(Math.random() * 20) + 1;
    nrrt2 = Math.floor(Math.random() * 20) + 1;
    nrrt3 = Math.floor(Math.random() * 20) + 1;
    if ((nrrt2 * nrrt3) % nrrt1 == 0) {
      break;
    }
  }

  let hp = (sa / (sa + ga)) * 100;
  document.querySelector("#p").textContent = hp;

  inprt1.value = nrrt1;
  inprt2.value = nrrt2;
  inprt3.value = nrrt3;
  vlx.value = null;
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
