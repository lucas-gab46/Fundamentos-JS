const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber);


const javasc  ="Javascript é incrivel!"



console.log("javasc Possui " + javasc.length + " Unidades de código de comprimento");


const numberWords = javasc.split(" ").length;
console.log("javasc Possui " + numberWords + " de Palavras");




const names = ["Lucas", "Eduardo", "Leticia", "Gabriel", "Luis"];
let info = "nomes são : "
let para = document.querySelector("p");
for (let i = 0; i < names.length; i++){
info += names[i] + ","
console.log(names[i]);
info = info.slice(0,-2);


}

function hourString(horario24) {

const hora = parseInt(horario24.split(":")[0]);
const minutos = horario24.split(":")[1];
const hora12 = hora % 12 || 12;
let periodo = "AM";
if (hora >= 12) {
periodo = "PM";
}
console.log(`${hora12}:${minutos} ${periodo}`);
hourString("11:22");




}


const frutas = ["maça","laranja"];
frutas.unshift("Acerola")
console.log(frutas);
frutas.shift();
console.log(frutas);

const numeros = [1,2,3,4,5,6];
const numerosPar = numeros.find(num => num % 2 === 0);
console.log(numerosPar);

const numerosPares = numeros.filter(num => num % 2 === 0);
numeros.find(num => num % 2 === 0);

console.log(numerosPares);

const frase = "Olá, dev ";
const Palavra = frase.trim ().split(" ");
console.log(Palavra);
console.log(frase);




 




