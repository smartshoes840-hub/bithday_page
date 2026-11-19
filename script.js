const revealButton = document.getElementById("revealButton");
const intro = document.getElementById("intro");
const surprise = document.getElementById("surprise");
const music = document.getElementById("birthdayMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");

// Add a few softly twinkling stars to the background.
const sparkleLayer = document.querySelector(".sparkles");
for (let i = 0; i < 34; i++) {
  const star = document.createElement("span");
  star.className = "sparkle";
  star.textContent = Math.random() > 0.5 ? "✦" : "·";
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.fontSize = `${8 + Math.random() * 10}px`;
  star.style.setProperty("--duration", `${2.5 + Math.random() * 4}s`);
  star.style.animationDelay = `${Math.random() * 5}s`;
  sparkleLayer.appendChild(star);
}

revealButton.addEventListener("click", async () => {
  intro.classList.add("hidden");
  surprise.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Browsers allow audio after a real user click.
  try {
    await music.play();
    setMusicState(true);
  } catch (error) {
    // If no MP3 has been added yet, the visual surprise still works.
    setMusicState(false);
    console.info("Add your MP3 at music/birthday-song.mp3 to enable the soundtrack.");
  }
});

function setMusicState(isPlaying) {
  musicToggle.classList.toggle("paused", !isPlaying);
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicLabel.textContent = isPlaying ? "Music on" : "Music off";
}

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      setMusicState(true);
    } catch (error) {
      setMusicState(false);
      alert("Please add your birthday-song.mp3 file in the music folder first.");
    }
  } else {
    music.pause();
    setMusicState(false);
  }
});
