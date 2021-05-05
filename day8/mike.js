console.log("mike");
window.onload = function () {
  let spans = document.querySelectorAll("footer div div span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].classList.add("text-muted");
    spans[i].style.display = "block";
  }

  document.getElementById("ex-4-search-button").onclick = function () {
    alert(`Did you really expect the button's gonna work?`);
  };
  let toAppend = document.querySelector("#append-cards-here");
  let dates = ["January 10, 2020", "January 12, 2020", "January 1, 2020"];

  for (let i = 0; i < dates.length; i++) {
    let n = Math.floor(Math.random() * 100 + 1);
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="card mb-4">
    <img
      src="https://picsum.photos/750/300?random=${n}"
      class="card-img-top"
      alt="random image 750px x 300px"
    />
    <div class="card-body">
      <h5 class="card-title" style='font-weight: 600; font-size: 1.5rem;'>Post title</h5>
      <p class="card-text" style='font-size: 0.8rem; color: #3c3d3c'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Eligendi, autem quas. Autem aliquid sit obcaecati laborum quo
        officiis consectetur modi labore excepturi repudiandae?
        Officia sed in suscipit, at ad modi!
      </p>
      <a href="#" class="btn btn-primary">Read more -></a>
    </div>
    <div
      style="
        border-top: 1px solid rgba(0, 0, 0, 0.125);
        padding: 1rem;
        font-size: 0.8rem;
      "
    >
      <span class="text-muted">Posted on ${dates[i]} by</span>
      <a href="#">Admin</a>
    </div>
  </div>
      `;
    toAppend.appendChild(card);
  }
  let appendColsHere = document.getElementById("append-cols-here");
  for (let i = 0; i < 9; i++) {
    let n = Math.floor(Math.random() * 100 + 1);
    let col = document.createElement("div");
    col.classList.add("col-4");
    col.classList.add("my-1");
    col.innerHTML = `
    
    <div class="card">
      <img
        src="https://picsum.photos/450/200?random=${n}"
        class="card-img-top"
        alt="random image"
      />
      <div class="card-body">
        <p class="card-text">
          Here you can place your video description, in order to inform
          the user of what to expect by clicking on the link
        </p>
        <div
          class="d-flex flex-row"
          style="justify-content: space-between"
        >
          <div>
            <a href="#" class="btn text-muted">View</a>
            <a href="#" class="btn text-muted">Edit</a>
          </div>
          <p class="text-muted mb-0 mt-2">9 mins</p>
        </div>
      </div>
    </div>

    `;
    appendColsHere.appendChild(col);
  }
};
