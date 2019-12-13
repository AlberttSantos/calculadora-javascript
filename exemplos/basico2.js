function calcular(x, y, operador) {
    return eval(`${x} ${operador} ${y}`);
}

console.log(calcular(2, 3, "+"));

const calcular2 = (function (x, y, operador) {
    return eval(`${x} ${operador} ${y}`);
})

console.log(calcular2(2, 3, "+"));

const calcular3 = (x, y, operador) => {
    return eval(`${x} ${operador} ${y}`);
}

console.log(calcular3(3, 3, "+"));

window.addEventListener("focus", _ => {
    console.log("focou");
});

document.addEventListener("click", _ => {
    console.log("clicou");
});

let date = new Date;
console.log(date.toLocaleDateString("pt-br"));

let carro = ["palio", 2, true, { nome: "Albertt", idade: "24" }, (x, y) => x * y];

// console.log(carro)
// console.log(carro[4](1, 2));    

carro.forEach((value, index) => {
    console.log(index + ": " + value);
})


class Celular {
    constructor() {
        this.cor = "vermelho"
    }

    ligar() {
        return "ligando";
    }
}

let celular = new Celular();
console.log(celular.ligar());