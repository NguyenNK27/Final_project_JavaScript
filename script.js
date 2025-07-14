function handlePageLoad() {
  console.log("Page loaded.");
  addTabIndexes();
  addEventListeners();
}

function addTabIndexes() {
  const figures = document.querySelectorAll("figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}

function addEventListeners() {
  const figures = document.querySelectorAll("figure");
  figures.forEach(figure => {
    figure.addEventListener("mouseover", () => {
      figure.style.border = "2px solid blue";
    });
    figure.addEventListener("mouseleave", () => {
      figure.style.border = "none";
    });
    figure.addEventListener("focus", () => {
      figure.style.background = "#eef";
    });
    figure.addEventListener("blur", () => {
      figure.style.background = "transparent";
    });
  });
}
