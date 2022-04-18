let userName = prompt ("ingresar su Nombre y Apellido");
let confirmUser = prompt ("confirme su Nombre y Apellido");

while(userName !="" && confirmUser !=""){
    if(userName == confirmUser){
        alert("los datos son iguales");
        break;

    }else{
        alert("los datos no coinciden")
        userName = prompt ("ingresar su Nombre y Apellido");
        confirmUser = prompt ("confirme su Nombre y Apellido");

    }
}
let ingresarNumero = parseInt(prompt("ingresar un numero"));
for( let i = 1; i<=10; i++) {
let resultado = ingresarNumero * i ;
alert (ingresarNumero + " x " + 1 + " = "+ resultado);
}