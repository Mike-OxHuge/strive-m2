console.log("Starting time 4pm");
window.onload = function () {
  let rowForCards = document.getElementById("row-for-cards");
  for (let i = 0; i < 4; i++) {
    let card = document.createElement("div");
    let n = Math.floor(Math.random() * 1000);
    card.classList.add("col-3");
    card.innerHTML = `    
        <div class="card">
          <img
            src="https://picsum.photos/400/250?random=${n}"
            class="card-img-top"
            alt="image"
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            Quick brown fox jumps over the lazy dog.
            </p>
            <a href="#" class="btn btn-primary">To be button to 'buy me'</a>
          </div>
        </div>      
    `;
    rowForCards.appendChild(card);
  }
};
console.log("Giving up at debrief");
