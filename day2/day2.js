console.log("day 2");
window.onload = function () {
  let container = document.getElementById("good-music-container");
  for (let i = 0; i < 12; i++) {
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
  }
  let tracklist = document.getElementById("track-list");

  for (let i = 0; i < 12; i++) {
    let li = document.createElement("li");
    li.innerText = "Track #" + i;
    tracklist.appendChild(li);
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
