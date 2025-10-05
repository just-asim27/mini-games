window.addEventListener("scroll", () => {
  const backBtn = document.querySelector(".back-btn");
  const header = document.querySelector("header");

  const buttonBottom = backBtn.getBoundingClientRect().bottom + window.scrollY;

  const headerBottom = header.offsetTop + header.offsetHeight;

  if (buttonBottom >= headerBottom) {
    backBtn.classList.add("transparent");
  } else {
    backBtn.classList.remove("transparent");
  }
});