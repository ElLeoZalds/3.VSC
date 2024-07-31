var DNombres = ["DONALD", "GRAY", "BEN"];
var DApellidos = ["NA", "YEON", "PARK"];
var DDni = ["12345678", "87654321", "74064240"];

function Validar() {
    var Nombre = document.getElementById("txtNombres").value.toUpperCase();
    var Apellidos = document.getElementById("txtApellidos").value.toUpperCase();
    var Dni = document.getElementById("txtDNI").value.toUpperCase();
    
    var Mensaje = "";
    var Valido = false;

    for (let i = 0; i < 3; i++) {
        if (Nombre === DNombres[i]) {
            Valido = true;
            break;
        }
    }

    if (!Valido) {
        alert("No se encontraron coincidencias para el nombre ingresado.");
        return;
    }

    Valido = false;
    for (let i = 0; i < 3; i++) {
        if (Apellidos === DApellidos[i]) {
            Valido = true;
            break;
        }
    }

    if (!Valido) {
        alert("No se encontraron coincidencias para los apellidos ingresados.");
        return;
    }

    Valido = false;
    for (let i = 0; i < 3; i++) {
        if (Dni === DDni[i]) {
            Mensaje = "Se encontró a " + Nombre + " " + Apellidos + " " + Dni;
            alert(Mensaje);
            Valido = true;
            break;
        }
    }

    if (!Valido) {
        alert("No se encontraron coincidencias para el DNI ingresado.");
    }
}

