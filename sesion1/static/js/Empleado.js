class empleado{
    constructor(cedula,nombre,apellido,cargo,sueldo,pagohora,horatrabajada){
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.sueldo=sueldo;
        this.pagohora=pagohora;
        this.horatrabajada=horatrabajada;
    }
    //metodo calculo sueldo de empleado
    calculasueldo(){
        this.sueldo=this.pagohora*this.horatrabajada;
        console.log("El sueldo del empleado es: " + this.sueldo.toString())
    }
    calculaiess(){
        //var para definir variables en js
        var sueldo=this.pagohora*this.horatrabajada;
        var iess=sueldo*0.11;
        //toString: srive para convertir a string cualquier tipo de dato primitivo
        console.log("El descuento de aporte IESS es: " + iess.toString())
    }
    //metodo decimo tercer sueldo
    calculardecimotersueldo(){
        var sueldo=(this.pagohora*this.horatrabajada)*12;
        var decitersueldo=sueldo/12;
        console.log("El decimo tercer sueldo es: "+decitersueldo.toString())
    }
    //metodo que calcule el sueldo restando prestamos quirografarios
    calcularprestamo(){
        var cuota=180;
        var sueldo=this.pagohora*this.horatrabajada;
        var total=sueldo-cuota;
        console.log("El sueldo restado de los prestamos quirografarios"+total.toString())

    }
}
//instancio los objetos de tipo empleado
console.log("creo el objeto empleado1: ");
//crear un objeto de tipo empleado
let empleado1 = new empleado("0921234993","Andres","lopez","ingeniero de calidad",0,10,200);
empleado1.calculasueldo();
empleado1.calculaiess();
empleado1.calculardecimotersueldo();
empleado1.calcularprestamo();
console.log("-------------------Fin-------------------");
