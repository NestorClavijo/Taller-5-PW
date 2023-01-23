// Obtener el input de fecha de nacimiento
var birthdateInput = document.getElementById("inputdate");

// Escuchar el evento de cambio en el input
birthdateInput.addEventListener("change", function() {
  // Obtener el valor de la fecha de nacimiento
  var birthdate = new Date(this.value);

  // Obtener la fecha actual
  var today = new Date();

  // Calcular la diferencia en años
  var age = today.getFullYear() - birthdate.getFullYear();

  // Si el mes de nacimiento es mayor al mes actual o el mes es igual y el día es mayor al día actual, se resta un año
  if (today.getMonth() < birthdate.getMonth() || (today.getMonth() == birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = "La edad es: " + age;

});


