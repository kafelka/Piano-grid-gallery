const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayClose = overlay.querySelector(".close");

function createContent([h, v]) {
  return `
    <div class="element h${h} v${v}">
      <img src="images/pexels${randomNumber(14)}.jpg">
      <div class="element__overlay">
        <button>View</button>
      </div>
    </div>
  `;
}

function clickImage(e) {
  const src = e.currentTarget.querySelector("img").src;
  overlayImage.src = src;
  overlay.classList.add("open");
}

function close(){
  overlay.classList.remove("open");
}

const digits = Array.from({length: 45}, () => [randomNumber(4), randomNumber(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);

const html = digits.map(createContent).join('');
gallery.innerHTML = html;

const elements = document.querySelectorAll('.element');
elements.forEach(element => element.addEventListener("click", clickImage))

overlayClose.addEventListener("click", close);

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}