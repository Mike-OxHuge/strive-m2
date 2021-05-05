console.log("mike");
window.onload = function () {
  let spans = document.querySelectorAll("footer div div span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.add("text-muted");
    spans[i].style.display = "block";
  }
};
