const screens = [...document.querySelectorAll(".screen")];
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}
function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

// A few tiny floating doodles instead of a generic starfield.
const starField = document.getElementById("stars");
const doodles = ["✿", "♡", "✧", "☼", "·"];
for (let i = 0; i < 25; i++) {
  const doodle = document.createElement("span");
  doodle.className = "star-dot";
  doodle.textContent = doodles[Math.floor(Math.random() * doodles.length)];
  doodle.style.left = `${Math.random() * 100}%`;
  doodle.style.top = `${Math.random() * 100}%`;
  doodle.style.fontSize = `${9 + Math.random() * 13}px`;
  doodle.style.animationDelay = `${Math.random() * 3}s`;
  if (doodle.textContent === "☼") doodle.style.color = "#d4a83d";
  if (doodle.textContent === "♡") doodle.style.color = "#d88eaf";
  starField.appendChild(doodle);
}

function confettiBurst() {
  const symbols = ["✿", "♡", "✦", "🌻"];
  const colors = ["#b79cde", "#eeb9d0", "#f3c95d", "#a9c99b", "#fffdf8"];
  for (let i = 0; i < 48; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.color = colors[Math.floor(Math.random() * colors.length)];
    piece.style.fontSize = `${8 + Math.random() * 12}px`;
    piece.style.animationDelay = `${Math.random() * 0.65}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.5}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3800);
  }
}

const gift = document.getElementById("open-gift");
const giftContinue = document.getElementById("gift-continue");
let giftOpened = false;
gift.addEventListener("click", () => {
  if (giftOpened) return;
  giftOpened = true;
  gift.classList.add("opened");
  document.getElementById("gift-hint").textContent = "SURPRISE. A present, just for you. 🌻💜";
  giftContinue.classList.remove("hidden");
  confettiBurst();
});
giftContinue.addEventListener("click", () => showScreen("memories"));

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("revealed");
    const reveal = card.querySelector(".memory-reveal");
    reveal.textContent = card.classList.contains("revealed")
      ? card.dataset.caption
      : "lift the corner ↗";
  });
});

const voicePlayer = document.getElementById("voice-player");
voicePlayer.addEventListener("error", () => {
  document.getElementById("audio-fallback").textContent =
    "No voice note added yet. Put your recording at assets/birthday-voice.mp3 whenever you're ready. 💜";
});

document.getElementById("last-thing").addEventListener("click", () => {
  document.getElementById("secret-note").classList.remove("hidden");
  document.getElementById("last-thing").classList.add("hidden");
  confettiBurst();
  document.getElementById("secret-note").scrollIntoView({ behavior: "smooth", block: "center" });
});
document.getElementById("replay").addEventListener("click", () => {
  giftOpened = false;
  gift.classList.remove("opened");
  giftContinue.classList.add("hidden");
  document.getElementById("gift-hint").textContent = "go on. it only bites a little. probably.";
  document.getElementById("secret-note").classList.add("hidden");
  document.getElementById("last-thing").classList.remove("hidden");
  document.querySelectorAll(".memory-card").forEach(card => {
    card.classList.remove("revealed");
    card.querySelector(".memory-reveal").textContent = "lift the corner ↗";
  });
  showScreen("intro");
});
