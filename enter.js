document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const entryFrame = document.getElementById("entry-frame");
  const container = document.querySelector(".container");

  enterBtn.addEventListener("click", () => {
    container.style.display = "none";
    entryFrame.src = "entrypage.html";// set iframe source
    entryFrame.style.display = "block";

    if (window.startMusicAfterEnter) {
      window.startMusicAfterEnter();
    }
  });
});
