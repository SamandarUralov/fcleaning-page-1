const scrollToTop = () => {
  const scroll = document.querySelector("#myButon");

  scroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

scrollToTop();
