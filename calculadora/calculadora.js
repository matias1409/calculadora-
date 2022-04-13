class Calculadora {
  constructor(){
  }
  sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
  }
  restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
  }
  dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
  }
  multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
  }
  potenciar(num,exp){
    return num**exp
  }
  raizCuadrada(num){
    return Math.sqrt(num);
  }
  raizCubica(num){
    return Math.cbrt(num);
  }
}

const calculadora = new Calculadora();

alert("¿Que opercion deseas realizar?");
let opercion = prompt("1: suma,  2: resta;  3: división,  4: multiplicación,  5: potenciación,  6: raíz cuadrada,  7: raíz cúbica");

if (opercion == 1) {
  let numero1 = prompt ("primer número para sumar");
  let numero2 = prompt("segundo número para sumar");
  resultado = calculadora.sumar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if (opercion == 2) {
  let numero1 = prompt ("primer número para restar");
  let numero2 = prompt("segundo número para restar");
  resultado = calculadora.restar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if (opercion == 3) {
  let numero1 = prompt ("primer número para dividir");
  let numero2 = prompt("segundo número para dividir");
  resultado = calculadora.dividir(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if (opercion == 4) {
  let numero1 = prompt ("primer número para multiplicar");
  let numero2 = prompt("segundo número para multiplicar");
  resultado = calculadora.multiplicar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}
else if (opercion == 5) {
  let numero1 = prompt ("primer número a potenciar");
  let numero2 = prompt("exponente");
  resultado = calculadora.potenciar(numero1,numero2);
alert(`tu resultado es ${resultado}`);
}

else if (opercion == 6) {
  let numero1 = prompt ("conoer la raíz cuadrada de:");
  resultado = calculadora.raizCuadrada(numero1);
alert(`tu resultado es ${resultado}`);
}
else if (opercion == 7) {
  let numero1 = prompt ("conoer la raíz cúbica de:");
  resultado = calculadora.raizCubica(numero1);
alert(`tu resultado es ${resultado}`);
}
else {
  alert("no se ha encontrado operación")
}