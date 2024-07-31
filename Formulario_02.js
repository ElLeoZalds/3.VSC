function validarDocumento() {
    const tipoDocumento = document.getElementById("TipoDoc").value;
    const numDocumento = document.getElementById("NumDoc").value;

    if (tipoDocumento === "DNI") {
        if (numDocumento.length !== 8) {
            alert("Error: El número de DNI debe contener 8 dígitos.");
            return false;
        }
    } else if (tipoDocumento === "Pasaporte") {
        if (numDocumento.length !== 12) {
            alert("Error: El número de Pasaporte debe contener 12 números.");
            return false;
        }
    } else if (tipoDocumento === "CarnetExtranjeria") {
        if (numDocumento.length !== 12) {
            alert("Error: El número de Carnet de Extranjería debe contener 12 números.");
            return false;
        }
    } else if (tipoDocumento === "PermisoTemporal") {
        if (numDocumento.length !== 15) {
            alert("Error: El número de Permiso Temporal debe contener 15 números.");
            return false;
        }
    }

    return true;
}

function calcularAñosLaborados() {
    const fechaInicioInput = document.getElementById("FecInicio");
    const fechaFinInput = document.getElementById("FecFin");
    const anosLaboradosInput = document.getElementById("AñosLab");

    const fechaInicio = new Date(fechaInicioInput.value);
    const fechaFin = new Date(fechaFinInput.value);

    const diferTiempo = fechaFin - fechaInicio;

    const anosLaborados = Math.round(diferTiempo / (1000 * 60 * 60 * 24 * 365.25));

    anosLaboradosInput.value = anosLaborados;
}

function calcularTotalACobrar() {
    const pagoxAnosInput = document.getElementById("PagoxAños");
    const anosLaboradosInput = document.getElementById("AñosLab");
    const totalACobrarInput = document.getElementById("TotalACobrar");

    const pagoPorAno = parseFloat(pagoxAnosInput.value);
    const anosLaborados = parseFloat(anosLaboradosInput.value);

    const totalACobrar = pagoPorAno * anosLaborados;

    totalACobrarInput.value = totalACobrar.toFixed(2);
}

function actualizarEstado() {
    const fechaFinInput = document.getElementById("FecFin");
    const estadoInput = document.getElementById("Estado");

    const fechaFin = fechaFinInput.value;

    if (fechaFin) {
        estadoInput.value = "Cesado";
    } else {
        estadoInput.value = "";
    }
}

function enviarFormulario(event) {
    event.preventDefault();

    if (!validarDocumento()) {
        return;
    }

    calcularAñosLaborados();
    calcularTotalACobrar();
    actualizarEstado();
}

document.querySelector("button[type='submit']").addEventListener("click", enviarFormulario);
