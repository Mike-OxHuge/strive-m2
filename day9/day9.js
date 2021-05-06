console.log("day9");

// <!-- EXERCISE 3
// Foreach album in the favorite list, place the genre inside a badge
// -->
window.onload = function () {
  let genres = [
    "techno",
    "pop",
    "metal",
    "rock",
    "balls",
    "house",
    "retro",
    "cowabanga",
    "ballad",
  ];
  //   <!-- EXERCISE 4
  //   Foreach album in the favorite list, use the Bootstrap Card to contain it.
  //   Use card layouts to format it in the best and more compatible way.
  // --> well it was already done (:
  let container = document.getElementById("good-music-container");
  for (let i = 0; i < 12; i++) {
    let n = Math.floor(Math.random() * 100);
    let x = Math.floor(Math.random() * genres.length);
    let foo = document.createElement("div");
    foo.classList.add("mb-2");
    foo.classList.add("col-sm-2");
    foo.classList.add("col-md-3");
    foo.classList.add("col-xl-4");
    foo.innerHTML = ` <div class="card album-container" style="width: 18rem">
    <img
      class="card-img-top album-cover"
      src="https://picsum.photos/800/600?random=${n}"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title album-title">Good album ${n}</h5>
      <div class="row">
        <div class="col">
          <span class="album-band">Band</span>
        </div>
        <div class="col">
          <span class="album-genre">Genre</span>
        </div>
        <div class="col">
          <span class="album-duration">Duration</span>
        </div>
      </div>
      <a href="https://picsum.photos/" class="btn btn-primary mt-3"
        >Find more</a
      >
    </div>
  </div>`;
    container.appendChild(foo);
    let badge = document.createElement("span");
    badge.classList.add("badge");
    badge.innerText = genres[x];

    badge.classList.add("styling-badge");
    foo.appendChild(badge);
  }
  let tracklist = document.getElementById("track-list");
  let tracks = [
    "track one",
    "track two",
    "track three",
    "track four",
    "track five",
    "track six",
    "track seven",
    "track eight",
    "track nine",
    "track ten",
    "track eleven",
    "track twelve",
    "track thirteen",
    "track fourteen",
  ];

  for (let i = 0; i < 13; i++) {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.scope = "row";
    th.innerText = i + 1;
    tr.appendChild(th);
    let td = document.createElement("td");
    td.classList.add("d-flex");
    td.style.justifyContent = "space-between";
    td.style.width = "100%";
    td.innerText = tracks[i];
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("delete-button");
    button.innerText = "DELETE";
    td.appendChild(button);
    tr.appendChild(td);
    tracklist.appendChild(tr);
  }
  let buttons = document.querySelectorAll(".delete-button");
  let rows = document.querySelectorAll("tr");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      rows[i + 1].classList.add("to-be-deleted");
      buttons[i].classList.add("d-none");
      setTimeout(() => rows[i + 1].remove(), 1500);
    };
  }

  let badContainer = document.getElementById("bad-music-container");
  for (let i = 0; i < 24; i++) {
    let n = Math.floor(Math.random() * 100);
    let foo = document.createElement("div");
    foo.classList.add("mb-2");
    foo.classList.add("col-sm-2");
    foo.classList.add("col-md-3");
    foo.classList.add("col-xl-4");
    foo.innerHTML = ` <div class="card album-container" style="width: 18rem">
    <img
      class="card-img-top album-cover"
      src="https://picsum.photos/800/600?random=${n}"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title album-title">Bad album ${n}</h5>
      <div class="row">
        <div class="col">
          <span class="album-band">Band</span>
        </div>
        <div class="col">
          <span class="album-genre">Genre</span>
        </div>
        <div class="col">
          <span class="album-duration">Duration</span>
        </div>
      </div>
      <a href="https://picsum.photos/" class="btn btn-primary mt-3"
        >Find more</a
      >
    </div>
  </div>`;
    badContainer.appendChild(foo);
  }
  let bestTracks = document.getElementById("best-tracks");
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * 12 + 1);
    let x = Math.floor(Math.random() * 10 + 1);
    let foo = document.createElement("li");
    foo.innerText = `${n}th track from the album ${x}`;
    bestTracks.appendChild(foo);
  }
};
