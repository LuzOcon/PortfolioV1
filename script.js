document.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // agrega clase scrolled
  } else {
    navbar.classList.remove("scrolled"); // quita clase scrolled
  }
});