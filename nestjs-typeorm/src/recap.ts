const myName = 'Sebastian';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

suma(12, 12);

class Person {
  constructor(private age: number, private name: string) {}
  getSummary() {
    return `My name is ${this.name}, ${this.age}`;
  }
}

const persona1 = new Person(15, 'Jose');

console.log(persona1.getSummary());
console.log({ myName, myAge });
