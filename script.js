const track = document.getElementById("track");
const cards = document.querySelectorAll(".card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function updateSlider() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function flipCard(button) {
  const flashcard = button.closest(".flashcard");
  const cardInner = flashcard.querySelector(".flashcard-inner");
  cardInner.classList.toggle("flipped");
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    updateSlider();
    console.log(currentIndex);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});
