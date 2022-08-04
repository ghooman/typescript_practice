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
let squre = { color: "red", width: 100 };
let student = { name: "park", score: 100 };
let teacher1 = { name: "anna", age: 30, score: 100 };
let 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
let 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
