class CalcController {
    constructor() {
        this._operation = [];
        this.dataElement = document.querySelector("#data");
        this.displayElement = document.querySelector("#display");
        this.timeElement = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.displayDateTime;

        setInterval(() => {
            this.displayDateTime;
        }, 1000);

        this.displayElement.innerHTML = 0;
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach(btn => {
            this.addEventListenerAll(btn, 'click drag', e => {
                let text = btn.className.baseVal.replace("btn-", "");
                this.executarCalculadora(text);
            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            })
        });
    }

    addEventListenerAll(element, events, func) {
        events.split(" ").forEach(event => {
            element.addEventListener(event, func, false);
        });
    }

    executarCalculadora(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation("+");
                break;
            case 'subtracao':
                this.addOperation("-");
                break;
            case 'divisao':
                this.addOperation("/");
                break;
            case 'multiplicacao':
                this.addOperation("*");
                break;
            case 'porcento':
                this.addOperation("%");
                break;
            case 'igual':

                break;
            case 'ponto':
                this.addOperation(".");
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.error();
                break;
        }
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    error() {
        this.displayCalc = "Error";
    }

    addOperation(value) {
        let lastOperation = this.getLastOperation();

        // isNaN verifica se não é um número
        if (isNaN(lastOperation)) {
            if (this.isOperator(value)) {
                this.setLastOperatio(value);
            }
            else if (isNaN(value)) {
                //deve ser o igual
            }
            else {
                this.pushOperation(value);
                this.setNumberToDisplay();
            }
        } else {
            if (this.isOperator(value)) {
                this.pushOperation(value);
            }
            else {
                let newValue = lastOperation.toString() + value.toString();
                this.setLastOperatio(parseInt(newValue));
                this.setNumberToDisplay();
            }
        }

        console.log(this._operation);
    }

    getLastOperation() {
        if (this._operation.length >= 1) {
            return this._operation[this._operation.length - 1];
        }

        return this._operation;
    }

    isOperator(value) {
        // Caso o indexOf não encontre o elemento ele retorna -1, se ele encontrar ele retorna o index do elemento
        return (["+", "-", "*", "/", "%"].indexOf(value) > -1);
    }

    setLastOperatio(value) {
        if (this._operation.length >= 1) {
            this._operation[this._operation.length - 1] = value;
        } else {
            this._operation.push(value);
        }
    }

    pushOperation(value) {
        this._operation.push(value);

        if (this._operation.length > 3) {
            this.calc();
        }
    }

    calc() {
        let last = this._operation.pop();

        // join junta os valores, o parametro define o separador
        // eval interpreta uma string como expressão
        let result = eval(this._operation.join(""));
        this._operation = [result, last];
        this.setNumberToDisplay();
    }

    setNumberToDisplay() {
        let lastNumber;

        for (let i = this._operation.length - 1; i >= 0; i--) {
            if (!this.isOperator(this._operation[i])) {
                lastNumber = this._operation[i];
                break;
            }
        }

        this.displayCalc(lastNumber);
    }

    displayCalc(value) {
        this.displayElement.innerHTML = value;
    }






    get displayDateTime() {
        this.dataElement.innerHTML = this.currentDate;
        this.timeElement.innerHTML = this.currentTime;
    }

    get currentDate() {
        return new Date().toLocaleDateString("pt-br",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
    }

    set currentDate(value) {
        this._currentDate = value;
    }

    get currentTime() {
        return new Date().toLocaleTimeString("pt-br");
    }
}