var myBoolean : boolean = true;
var myNumber : number = 1234;
var myStringArray : string[] = ['frist', 'second', 'third'];
var flag : boolean = false;
let dato : any = "date cadena";
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
type Animal = 'Cheetah'| 'Lion' | 'Turtle';
const prueba : Animal = "Turtle";
enum Brands{Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge};
let carro : Brands = Brands.Chevrolet;

function SaludaAlUsuario() : void {
    console.log("Hola usuario");
}

let marca = "Bachoco";

function SumaDeNumero (num1 : number, num2: number): number{
    return num1+num2;
}

function add(a:string, b:string):string;

function add(a:number, b:number):string;

function add(a:any, b:any):string {
    return a + b;
}

class Persona{
    private nombre:string = '';
    private apellidoPaterno:string = '';
    private apellidoMaterno:string= '';

    constructor(n:string, ap:string, am:string, private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }

    getINE(){
        return this.mayorDeEdad?"Puede tramitar el INE":"No puede asignarsele INE";
    }
}

interface FiguraGeometrica {
    color: string;
    diametro?:number;
    calculaArea():number;
}

class Rectangulo implements FiguraGeometrica {
    private base:number=0;
    private altura:number=0;
    color:string = "Rojo"
    calculaArea(){
        return (this.base*this.altura);
    }
}