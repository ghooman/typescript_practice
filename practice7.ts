// class type 지정
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  func(a: string): string {
    return "안녕" + a;
  }
}

let person1 = new Person("kim");
let person2 = new Person("park");

console.log(person1.name);
