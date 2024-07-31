alert("Por Favor, Crea su Correo Electrónico");

function Enviar(){
  var Nombre = document.getElementById("Nombre").value;
  var Apell = document.getElementById("Apell").value;
  var DNI = document.getElementById("DNI").value;
  var Edad = document.getElementById("Edad").value;
  var correo = document.getElementById("CorrElec").value;
  var contra = document.getElementById("Contra").value;

  if(Nombre === "" || Apell === "" || Edad === ""){
    alert("Por Favor, complete todos los campos");
    return;
  }

  if(DNI.length !== 8){
    alert("Error, Su número de DNI debe contener 8 números");
    return;
  }

  if(correo === "" || contra === ""){
    alert("Por favor complete todos los campos");
    return;
  }

  var cuentas = [
    { correo: "leonar13@hotmail.com", contraseña: "jkghfgjd15" },
    { correo: "GPLN21@gmail.com", contraseña: "///56a454@@@" },
    { correo: "Paulenelbalcón@gmail.com", contraseña: "daledaledale" },
  ];

  for(var i = 0; i < cuentas.length; i++){
    if(correo === cuentas[i].correo && contra === cuentas[i].contraseña){
      alert("Bienvenido!");
      return;
    }
  }
  alert("Correo electrónico o contraseña incorrectos");
}
