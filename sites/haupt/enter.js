document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const entryFrame = document.getElementById("entry-frame");
  const container = document.querySelector(".container");

  enterBtn.addEventListener("click", () => {
    container.style.display = "none";
    entryFrame.style.display = "block";

    // Start music on Enter
    if (window.startMusicAfterEnter) {
      window.startMusicAfterEnter();
    }
  });
});
