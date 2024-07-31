function ValidaUsa() {
  var MUsuar = new Array(5);
  for(var i = 0; i < 5; i++){
    MUsuar[i] = new Array(2);
  }
  // Llenando de datos la Matriz
  MUsuar[0] = ["le@nardo", "1594870@"];
  MUsuar[1] = ["l3onard@", "12563@48"];
  MUsuar[2] = ["Leon@rdo", "@@@32213"];

  var Usuario = String(document.getElementById("Usuarioppp").value);
  var Contrsñ = String(document.getElementById("Contraseñazzz").value);
  var UsuaYcontrsñ = "";
  var UsuaValida = "";
  var UsuaError = "";
  var ClaveValida = 0;
  var ClaveError = "";

  // Determinar si no se escribió nada en usuario o contraseña
  if(Usuario === "" && Contrsñ === ""){
    UsuaYcontrsñ = alert("Por Favor ingrese su Nombre de Usuario y Contraseña");
    return;
  } else if(Usuario === "") {
    UsuaYcontrsñ = alert("Por Favor ingrese su Nombre de Usuario");
    return;
  } else  if(Contrsñ === ""){
    UsuaYcontrsñ = alert("Por favor ingrese su Contraseña");
    return;
  }

  if(Usuario !== MUsuar){
  }

  // Validar que el Usuarios tenga @
  if (Usuario.indexOf("@") === -1) {
    UsuaError = alert("El Usuario debe contener @");
  } else {
    UsuaValida++;
  }

  // Validar la cantidad de longitud que tiene la Contraseña
  if(Contrsñ.length < 8){
    ClaveError = "La longitud de la Contraseña debe ser mínimo de 8 caracteres\n";
  } else {
    ClaveValida++;
  }

  var ContNum = 0;
  var ContDig = 0;
  
  for(var i = 0; i < Contrsñ.length; i++){
    var charCode = Contrsñ.charCodeAt(i);
    
    if (charCode >= 48 && charCode <= 57) { // Números
      ContNum++;
    } else if ((charCode >= 33 && charCode <= 47) || 
               (charCode >= 58 && charCode <= 64) || 
               (charCode >= 91 && charCode <= 96) || 
               (charCode >= 123 && charCode <= 126)) { // Símbolos
      ContDig++;
    }
  }
  
  if (ContNum === 0) {
    ClaveError += "La Clave debe contener al menos un Número\n";
  }
  
  if (ContDig === 0) {
    ClaveError += "La Clave debe contener al menos un Símbolo\n";
  }
  
  if (ClaveError !== "") {
    alert(ClaveError);
  } else {
    ClaveValida++;
  }

// Validando los datos de las Matrices
var usuarioCorrecto = false;

for (var i = 0; i < MUsuar.length; i++) {
  if (Usuario === MUsuar[i][0]) { // Compara el usuario ingresado con el usuario en la matriz
    if (Contrsñ === MUsuar[i][1]) { // Compara la contraseña ingresada con la contraseña en la matriz
      usuarioCorrecto = true;
      break;
    }
  }
}

if (usuarioCorrecto) {
  alert("¡Usuario y Contraseña Correctos!, Bienvenido " + MUsuar[i][0]);
} else {
  alert("Usuario o Contraseña Incorrectos\n");
}



}



//Validar Usuario, Debe incluir @  ----
//Validar Clave, -Minimo 8 Caracteres, Minimo 1 numero, minimo 1 simbolo
//Con Matrices ------

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Otra forma de hacer lo de los simbolos y numeros

// Validar que la contraseña tenga números
/*var ContNum = 0;
for(var i = 0; i < Contrsñ.length; i++){
  if(Contrsñ.charCodeAt(i) >= 48 && Contrsñ.charCodeAt(i) <= 57){
    ContNum++;
  }
}
if(ContNum === 0){
  ClaveError += "La Clave debe contener al menos un Número\n";
} else {
  ClaveValida++;
  alert("¡Valido!");
}

if (ClaveError !== "") {
  alert(ClaveError);
}*/

/*//Validar que la contraseña tenga simbolos
var ContDig = 0;
for(var i = 0; i < Contrsñ.length; i++){
  if ((Contrsñ.charCodeAt(i) >= 33 && Contrsñ.charCodeAt(i) <= 47) || 
  (Contrsñ.charCodeAt(i) >= 58 && Contrsñ.charCodeAt(i) <= 64) || 
  (Contrsñ.charCodeAt(i) >= 91 && Contrsñ.charCodeAt(i) <= 96) || 
  (Contrsñ.charCodeAt(i) >= 123 && Contrsñ.charCodeAt(i) <= 126)){
    ContDig++;
  }
}*/