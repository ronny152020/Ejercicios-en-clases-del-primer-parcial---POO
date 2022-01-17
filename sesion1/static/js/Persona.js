//Defino la clase
//Clase: modelo o plantilla donde se definen atributos y periodos
class persona{
    //constructor : es quien construye el objeto a partir de una clase
    constructor(cedula,nombre,apellido,edadd){
        //atributos: son caracteristicas del objeto
        this.cedula=cedula;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }
    //metodo: son comportamiento o funcionalidades
    //que tiene un objeto
    informacion(){
        console.log("la informacion de la persona es: "+this.cedula + " "+ this.nombre + " " + this.apellido + " " + this.edad)
    }
    //metodo de mayoria de edad ecuatoriana
    validaedad(){
        //condicion en js
        if(this.edad>=18){
            console.log("Es mayor de edad")
        }else{
            console.log("Es menor de edad")
        }
    }

}
//Presento por consola la referencia del archivo
console.log("--------------------------inicio------------------------------")


console.log("creo el objeto persona1");
let persona1=new persona("0954860094","Ronny","Mozo",20);
//invoco los metodos del objeto persona1
persona1.informacion();
persona1.validaedad();