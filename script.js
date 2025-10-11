document.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  const dropdownmenu = document.querySelector(".dropdown-menu");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // agrega clase scrolled
    dropdownmenu.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled"); // quita clase scrolled
    dropdownmenu.classList.remove("scrolled");
  }
});

function filtrarProyectos(categoria) {
  const proyectos = document.querySelectorAll('.proyecto');
  for (let i = 0; i < proyectos.length; i++) {
    const p = proyectos[i];
    if (categoria === 'todos') {
      p.style.display = 'block';
    } else if (p.classList.contains(categoria)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  }
}
    
function aplicarFiltroHash() {
  let categoria = location.hash.replace('#','');
  if (!categoria || categoria === '') {
    categoria = 'todos';
  }

  filtrarProyectos(categoria);
}


window.onload = function() {
  aplicarFiltroHash();
};

window.onhashchange = function() {
  aplicarFiltroHash();
};