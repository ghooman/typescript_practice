// class type 지정
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    func(a) {
        return "안녕" + a;
    }
}
let person1 = new Person("kim");
let person2 = new Person("park");
console.log(person1.name);
