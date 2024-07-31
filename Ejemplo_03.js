function CapturarDatos() {
  var Apellidos = document.getElementById("txtApellidos").value;
  var Nombres = document.getElementById("txtNombres").value;
  var Edad = document.getElementById("txtEdad").value;
  var Genero = document.getElementById("txtGenero").value;
  var Numeros = parseInt(document.getElementById("txtANumeros").value);
  var Letras = parseInt(document.getElementById("txtALetras").value);
  var Ciencias = parseInt(document.getElementById("txtACiencias").value);
  var Humanidades = parseInt(document.getElementById("txtAHumanidades").value);
  var Promedio = (Numeros + Letras + Ciencias + Humanidades) / 4;

  if (Promedio > 15) {
    alert("Puede postular");
    document.getElementById("txtStatus").value = "Apto";
  } else {
    alert("Lo sentimos su solicitud ha sido rechazada");
    document.getElementById("txtStatus").value = "No Apto";
  }
}
