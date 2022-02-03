abstract class Smartphone {
    numberCarica: number; //quantità euro disponibile per le chiamate
    numeroChiamate: number; //numero chiamate del cellulare
    unaRicarica:number; // numero ricarca 
    minutiDurata:number; // minuti della chiamata
    constructor(numberCarica: number, numeroChiamate: number) {
        this.numberCarica = numberCarica;
        this.numeroChiamate = numeroChiamate;
    }

    //void
     ricarica (unaRicarica:number):void {
         console.log("Ricarica :" + unaRicarica);
         console.log("Saldo disponibile : " + this.numberCarica);
         console.log("Saldo aggiornato: " + (this.numberCarica + unaRicarica));
         this.numberCarica = this.numberCarica + unaRicarica;
    }

    chiamata(minutiDurata: number):void {
        console.log("Minuti chiamata: " + minutiDurata);
        this.numeroChiamate++;
        if(this.numberCarica < (0.20 * minutiDurata)){
            console.log("Credito non sufficente effettua una ricarica");
        }
        else {
        this.numberCarica = this.numberCarica - (0.20 * minutiDurata);  
        }
    }

     numero404():number {
        return this.numberCarica;
    }

     getNumeroChiamate():number {
        return this.numeroChiamate;
    }

    azzeraChiamate():void {
        this.numeroChiamate = 0;
    }
}

class FirstUser extends Smartphone {
    numberCarica: number;
    numeroChiamate: number;
    constructor(numberCarica: number, numeroChiamate: number) {
        super(numberCarica,numeroChiamate);
    }
}

class SecondoUser extends Smartphone {
    numberCarica: number;
    numeroChiamate: number;
    constructor(numberCarica: number, numeroChiamate: number) {
        super(numberCarica,numeroChiamate);
    }
}


class thirdUser extends Smartphone {
    numberCarica: number;
    numeroChiamate: number;
    constructor(numberCarica: number, numeroChiamate: number) {
        super(numberCarica,numeroChiamate);
    }
}


let utente = new FirstUser(20,2);
console.log('UTENTE 1');
console.log('Saldo : '+utente.numberCarica);
console.log('Numero Chiamate : '+utente.numeroChiamate);
let utente2 = new SecondoUser(30,1);
console.log('UTENTE 2');
console.log('Saldo : '+utente2.numberCarica);
console.log('Numero Chiamate : '+utente2.numeroChiamate);
let utente3= new thirdUser(60,8);
console.log('UTENTE 3');
console.log('Saldo : '+utente3.numberCarica);
console.log('Numero Chiamate : '+utente3.numeroChiamate);
