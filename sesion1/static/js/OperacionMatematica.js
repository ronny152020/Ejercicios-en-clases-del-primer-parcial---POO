//Definir el nombre de la clase
class operacionmatematica{
    //constructor
    constructor (numero){
        this.numero = numero;
    }
    //Metodos get an set
    //Get: Son metodos especiales de acceso de los datos de los atributos
    get Getnumero(){
        return this.numero;
    }
    set Setnumero(numero){
        this.numero = numero;
    }
    //metodo que retorne si es par o impar
    verificaPar(){
        console.log("hola");
        //condicion
        if(this.numero % 2==0){
            console.log("El numero: " + this.numero.toString() + "es par");
        }else{
            console.log("El numero: " + this.numero.toString() + "es Impar");
        }
    }

    Generartabla(){
        var multiplicador = 1;
        while(multiplicador<13){
            var producto = this.numero * multiplicador;
            multiplicador = multiplicador+1;
            console.log(producto.toString());
        }
    }

    GenerarSecuencia(){
        //variable para generar la secuencia
        var secuencia = 0;
        //ciclo repetitivo para generar los resultados
        for (let indice =1; indice<=5; indice++){
            secuencia = secuencia + this.numero;
            console.log(secuencia.toString());
        }
    }

}
console.log("Creo el objeto OperacionMatematica1: ");
let OperacionMatematica1 = new operacionmatematica(2);
OperacionMatematica1.verificaPar();
//Referencio el metodo Generartabla
console.log("Generacion de tabla del 1 al 12 del numero ingresado");
OperacionMatematica1.Generartabla();
//Referencio el metodo GenerarSecuencia
console.log("Generacion de la secuencia a partir de un numero ingresado (For)")
OperacionMatematica1.GenerarSecuencia();
//Defino una funcion que me permita generar la secuencia de tres numeros
function Secuencia(){
    //capturo el numero del formulario
    var numero = document.getElementById("_numero").value;
    var secuencia = 1;
    var sumatoria = 0;
    while (secuencia<4){
        sumatoria = sumatoria + parseInt(numero);
        alert(sumatoria);
        secuencia = secuencia+1;
    }

    
}