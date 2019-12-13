let a = "10";
let b = "10";

console.log(typeof b == "string");

let cor = "Verde";

switch (cor) {
    case "Verde":
        console.log("Siga");
        break;
    case "Vermelho":
        console.log("Pare");
        break;
    default:
        console.log("Cor não encontrada");
}

let numero = 5;

for (i = 0; i <= 10; i++) {

    if (i == 5)
        continue;

    console.log(`${i} x ${numero} = ${i * numero}`);
}