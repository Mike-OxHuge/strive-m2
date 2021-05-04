console.log("day7");
/*
    JS Exercises
    EX11) Write a function to add a new link into the navbar
    EX12) Write a function to change the color of the main title
    EX13) Write a function to change the background of the jumbotron
    EX14) Write a function to remove all the links under "Elsewhere"
    EX15) Write a function to change the column size for post headings
    EX16) Write a function to remove the "Search" magnifying glass icon
    EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
    EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
    EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
    EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name
*/

// EX11) Write a function to add a new link into the navbar
const addNewLink = function () {
  let navbar = document.getElementsByTagName("nav")[0];
  let link = document.createElement("a");
  link.innerText = "new link";
  link.href = "https://google.com";
  navbar.appendChild(link);
};
addNewLink();

// EX12) Write a function to change the color of the main title
const changeTheColor = function () {
  let mainTitle = document.querySelector("h1.display-4");
  mainTitle.style.color = "red";
};
changeTheColor();

// EX13) Write a function to change the background of the jumbotron
const changeBackground = function () {
  let jumbo = document.querySelector(".jumbotron");
  jumbo.style.backgroundColor = "red";
};
// has no effect since .bg-dark has !important in it
changeBackground();

// EX14) Write a function to remove all the links under "Elsewhere"
const removeLinks = function () {
  let links = document.querySelector("aside").children[2].children[1].children;
  for (let i = 0; i < links.length; i + 1) {
    links[i].remove();
  }
};
removeLinks();

// EX15) Write a function to change the column size for post headings
const changeTheColumnSize = function () {
  let column = document.getElementsByClassName("blog-main")[0];
  column.classList.replace("col-md-8", "col-md-4");
};
changeTheColumnSize();

// EX16) Write a function to remove the "Search" magnifying glass icon
const removeSearch = function () {
  let search = document.querySelector(".text-muted svg");
  search.remove();
};
removeSearch();

// EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post
const trim = function () {
  let blogPost = document.querySelectorAll(".blog-post p:nth-of-type(2)");
  for (let i = 0; i < blogPost.length; i++) {
    blogPost[i].innerText = blogPost[i].innerText.substring(50);
  }
};
trim();

// EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title)
window.onload = function () {
  let body = document.querySelector(".jumbotron");
  let button = document.createElement("button");
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "write a title for a new post";
  button.innerText = "create a new post";
  body.appendChild(button);
  body.appendChild(input);

  button.onclick = function (title) {
    title = input.value;
    let blogMain = document.querySelector(".blog-main");
    let newArticle = document.createElement("div");
    newArticle.classList.add("blog-post");
    newArticle.style.height = "20vh";
    let newTitle = document.createElement("h1");
    newTitle.innerText = title;
    blogMain.append(newArticle);
    newArticle.appendChild(newTitle);
    input.value = "";
  };
};

// EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post
