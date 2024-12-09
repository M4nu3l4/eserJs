
let piuGrande;

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
    getAge() {
        return this.age;
    }

    compareAge(User2) {
        if (this.getAge() > User2.getAge()) {
            return ' ${this.firstName} è più grande di  ${User2.firstName}';
        } else if (this.getAge() < User2.getAge()) {
            return '${User2.firstName} è più grande di ${this.firstName}';
        } else {
            return 'l"età di  ${User2.firstName} è uguale a ${this.firstName}';
        }
    }
}
const User1 = new User("Mario", "Rossi", 40, "Pisa");
const User2 = new User('Carlo', 'Conti', 40, 'Como');
console.log(User1.compareAge(User2));

/*Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.*/

const animals =document.getElementById(pets);
const petOwner = document.getElementById (owner);
const petSpecies = document.getElementById (species);
const petBreed = document.getElementById (breed);
const btnAdd = document.getElementById (btn);
const list = query.selectorAll(li);

class Pet {
    constructor(_petName, _ownerName,_species){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.breed =_breed;
    }
}