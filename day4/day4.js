console.log("day4");
let userInput = document.getElementById("user-input");
let submitUserInput = document.getElementById("submit-user-input");
let usersUl = document.getElementById("users-ul");
let users = [];

submitUserInput.onclick = function () {
  let splitted = userInput.value.split(", ");
  for (let i = 0; i < splitted.length; i++) {
    users.push(splitted[i]);
  }
  for (let i = 0; i < users.length; i++) {
    let li = document.createElement("li");
    li.innerText = users[i];
    usersUl.appendChild(li);
  }
  userInput.value = "";
};

let amountOfTeams = document.getElementById("amount-of-teams");
let submitAmountOfTeams = document.getElementById("submit-amount-of-teams");
let containerForTeams = document.getElementById("container-for-teams");

submitAmountOfTeams.onclick = function () {
  for (let i = 1; i <= amountOfTeams.value; i++) {
    let div = document.createElement("div");
    div.id = "team" + [i];
    let ul = document.createElement("ul");
    ul.classList.add("ul-for-teams");
    containerForTeams.appendChild(div);
    div.appendChild(ul);
    let li = document.createElement("li");
    li.style.color = "blue";
    li.innerText = "team number " + [i];
    ul.appendChild(li);
  }
};

let assign = document.getElementById("assign");
let uls = document.getElementsByClassName("ul-for-teams");
let usersLis = document.getElementById("users-ul").children;
assign.onclick = function () {
  let n = Math.floor(Math.random() * users.length);
  let x = Math.floor(Math.random() * amountOfTeams.value);
  let team = document.getElementById(`team${x + 1}`);
  for (let i = 0; i < 1; i++) {
    users.splice(n, 1);
    let li = document.createElement("li");
    li.innerText = users[n];
    team.appendChild(li);
    usersLis[n].remove();
  }
};

let reload = document.getElementById("reload");
reload.onclick = function () {
  location.reload();
};
