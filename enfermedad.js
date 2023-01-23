// Obtener una referencia al checkbox
var checkbox = document.getElementById("exampleCheck1");

document.getElementById("enfermedad").style.display = "none";

// Obtener una referencia al elemento a esconder
var hiddenElement = document.getElementById("enfermedad");

// Escuchar el evento de cambio en el checkbox
checkbox.addEventListener("change", function() {
  // Si el checkbox está marcado, esconder el elemento
  if (!this.checked) {
    hiddenElement.style.display = "none";
  } else {
    hiddenElement.style.display = "block";
  }
});
