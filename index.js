// selectors

let headtext = document.querySelector(".header");
let btnEl = document.querySelector(".btn");
let inpt = document.querySelector("#text");
let btnRan = document.querySelector(".btn-random");
let colorPick = document.querySelector("#color");
let btnReset = document.querySelector("#reset");
let img = document.querySelector(".img");
let bd = document.querySelector(".main");
let select = document.querySelector("#sl");

//eventListeners
let colorRandom = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let color = [
  "#",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

btnEl.addEventListener("click", function changeHead() {
  let valIn = inpt.value;
  valIn = valIn.toLowerCase();
  if (valIn[0] === "#" && (valIn.length === 7 || valIn.length === 4)) {
    if (valIn.split("").every((item) => color.includes(item))) {
      headtext.innerHTML = "This is your HEX color ";
      headtext.style.color = valIn;
      colorPick.value = valIn;
      bd.style.backgroundColor = valIn;
      // checking for element
      let check = document.querySelector(".info") || false;
      //info div
      if (!check) {
        let myDiv = document.createElement("div");
        myDiv.classList.add("info");
        // info text
        let infoText = document.createElement("h4");
        infoText.innerHTML = `You can copy the color: ${valIn};`;
        infoText.classList.add("textInfo");
        //append
        bd.appendChild(myDiv);
        myDiv.appendChild(infoText);
        // remove btn
        let btnRemove = document.createElement("button");
        btnRemove.classList.add("rmvBtn");
        btnRemove.innerHTML = "x";
        myDiv.appendChild(btnRemove);
      }
      let form = document.querySelector(".textInfo");
      form.innerHTML = `You can copy the color: ${valIn};`;
    } else {
      headtext.innerHTML = "Not valid";
      headtext.style.color = "red";
      colorPick.value = "#fd2121";
    }
  } else {
    headtext.innerHTML =
      "first element must be # and should have 7 or 4 character";
    headtext.style.color = "red";
    colorPick.value = "#fd2121";
  }
  let move = document.querySelector(".info");
  let btnR = document.querySelector(".rmvBtn") || false;
  let b = document.querySelector(".rmvBtn");

  if (btnR) {
    b.addEventListener("click", function () {
      move.classList.add("opac");
      move.addEventListener("transitionend", function () {
        move.remove();
      });
    });
  }
});

//functions

btnRan.addEventListener("click", random);

function random() {
  let s = "#";

  for (let i = 0; i < 6; i++) {
    let num = Math.floor(Math.random() * colorRandom.length);
    s = s.concat(colorRandom[num]);
  }
  inpt.value = s;
  headtext.style.color = s;
  headtext.innerHTML = "This is your HEX color";
  colorPick.value = s;
}

btnReset.addEventListener("click", function () {
  history.go(0);
});

select.addEventListener("click", function (e) {
  let gate = e.target.value;
  if (gate === "google") {
    img.src = `${gate}.png`;
  } else if (gate === "apple") {
    img.src = `${gate}.png`;
  } else if (gate === "face") {
    img.src = `${gate}.png`;
  }
});

colorPick.addEventListener("input", () => {
  let yes = document.querySelector(".info") || false;
  if (yes) {
    let form = document.querySelector(".textInfo");
    form.innerHTML = `You can copy the color: ${colorPick.value};`;
  }
  inpt.value = colorPick.value;
});
inpt.addEventListener("input", () => {
  let yes = document.querySelector(".info") || false;
  if (yes) {
    let form = document.querySelector(".textInfo");
    form.innerHTML = `You can copy the color: ${inpt.value};`;
  }
});
