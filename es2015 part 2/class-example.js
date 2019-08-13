// ES5
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function() {
  console.log(`My name is ${this.first} ${this.last}`)
}

const person = new Person('brad', 'casalvieri')
person.fullName()


// ES2015 Class
class Person2 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  sayHi() {
    console.log(`My name is ${this.first} ${this.last}!`)
  }
}

const person2 = new Person2('brad', 'casalvieri')
person2.sayHi()
