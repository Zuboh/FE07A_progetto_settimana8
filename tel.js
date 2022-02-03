var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Smartphone = /** @class */ (function () {
    function Smartphone(numberCarica, numeroChiamate) {
        this.numberCarica = numberCarica;
        this.numeroChiamate = numeroChiamate;
    }
    //void
    Smartphone.prototype.ricarica = function (unaRicarica) {
        console.log("Ricarica :" + unaRicarica);
        console.log("Saldo disponibile : " + this.numberCarica);
        console.log("Saldo aggiornato: " + (this.numberCarica + unaRicarica));
        this.numberCarica = this.numberCarica + unaRicarica;
    };
    Smartphone.prototype.chiamata = function (minutiDurata) {
        console.log("Minuti chiamata: " + minutiDurata);
        this.numeroChiamate++;
        if (this.numberCarica < (0.20 * minutiDurata)) {
            console.log("Credito non sufficente effettua una ricarica");
        }
        else {
            this.numberCarica = this.numberCarica - (0.20 * minutiDurata);
        }
    };
    Smartphone.prototype.numero404 = function () {
        return this.numberCarica;
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Smartphone;
}());
var FirstUser = /** @class */ (function (_super) {
    __extends(FirstUser, _super);
    function FirstUser(numberCarica, numeroChiamate) {
        return _super.call(this, numberCarica, numeroChiamate) || this;
    }
    return FirstUser;
}(Smartphone));
var SecondoUser = /** @class */ (function (_super) {
    __extends(SecondoUser, _super);
    function SecondoUser(numberCarica, numeroChiamate) {
        return _super.call(this, numberCarica, numeroChiamate) || this;
    }
    return SecondoUser;
}(Smartphone));
var thirdUser = /** @class */ (function (_super) {
    __extends(thirdUser, _super);
    function thirdUser(numberCarica, numeroChiamate) {
        return _super.call(this, numberCarica, numeroChiamate) || this;
    }
    return thirdUser;
}(Smartphone));
var utente = new FirstUser(20, 2);
console.log('UTENTE 1');
console.log('Saldo : ' + utente.numberCarica);
console.log('Numero Chiamate : ' + utente.numeroChiamate);
var utente2 = new SecondoUser(30, 1);
console.log('UTENTE 2');
console.log('Saldo : ' + utente2.numberCarica);
console.log('Numero Chiamate : ' + utente2.numeroChiamate);
var utente3 = new thirdUser(60, 8);
console.log('UTENTE 3');
console.log('Saldo : ' + utente3.numberCarica);
console.log('Numero Chiamate : ' + utente3.numeroChiamate);
