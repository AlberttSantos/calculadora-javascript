class CalcController {
    constructor() {
        this.dataElement = document.querySelector("#data");
        this.displayElement = document.querySelector("#display");
        this.timeElement = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize() {
        this.displayDateTime;

        setInterval(() => {
            this.displayDateTime;
        }, 1000);

        this.displayElement.innerHTML = 0;
    }

    initButtonsEvents(){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g");
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