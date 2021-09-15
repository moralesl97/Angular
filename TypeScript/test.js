"use strict";
var myBoolean = true;
var myNumber = 1234;
var myStringArray = ['frist', 'second', 'third'];
var flag = false;
let dato = "date cadena";
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);
const prueba = "Turtle";
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
;
let carro = Brands.Chevrolet;
function SaludaAlUsuario() {
    console.log("Hola usuario");
}
let marca = "Bachoco";
function SumaDeNumero(num1, num2) {
    return num1 + num2;
}
function add(a, b) {
    return a + b;
}
class Persona {
    constructor(n, ap, am, mayorDeEdad) {
        this.mayorDeEdad = mayorDeEdad;
        this.nombre = '';
        this.apellidoPaterno = '';
        this.apellidoMaterno = '';
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }
    getINE() {
        return this.mayorDeEdad ? "Puede tramitar el INE" : "No puede asignarsele INE";
    }
}
class Rectangulo {
    constructor() {
        this.base = 0;
        this.altura = 0;
        this.color = "Rojo";
    }
    calculaArea() {
        return (this.base * this.altura);
    }
}
