
let piuGrande;
class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.location = _location;
    }
}

const person2 = { ...User };
person2.age = 30;
const person3 = { ...User };
person3.age = 40;

class older extends User {
    constructor(_older, ...User) {
        super(...User);
        this.older = _age;
    }
}
   this.older = () => {
    if (person2.older > person3.older) {
        return 'il più grande dei due è ${this.older}'
    } else {
        return 'il più grande dei due è ${this.older}'
    }
}


console.log(person2.older());