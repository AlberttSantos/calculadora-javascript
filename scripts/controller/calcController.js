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
                break;
            case 'subtracao':
                break;
            case 'divisao':
                break;
            case 'multiplicacao':
                break;
            case 'porcento':
                break;
            case 'igual':
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
        this._operation.push(value);
    }








    get displayDateTime() {
        this.dataElement.innerHTML = this.currentDate;
        this.timeElement.innerHTML = this.currentTime;
    }

    get displayCalc() {
        return this.displayElement.innerHTML;
    }

    set displayCalc(value) {
        this.displayElement.innerHTML = value;
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