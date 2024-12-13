function person(name, age){
    this.name=name;
    this.age=age;
}

person.prototype.greet= function(){
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

};

const person1= new person('Shahistha', '21');
console.log(person1.greet());