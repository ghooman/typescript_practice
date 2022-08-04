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

// interface(object)
// type Squre = {color: string, width: number}
interface Squre {
  color: string;
  width: number;
}

let squre: Squre = { color: "red", width: 100 };

interface Student {
  name: string;
}
interface Student {
  score: number;
}
interface Teacher extends Student {
  age: number;
}
let student: Student = { name: "park", score: 100 };
let teacher1: Teacher = { name: "anna", age: 30, score: 100 };

type Pet = { name: string };
type Dog = { age: number } & Pet; // interface의 extends 같은것

//type vs interface
// interface는 중복선언 가능
// type은 중복선언 불가능
// 외부 라이브러리 경우 interface 많이 씀(수정이 편함)

// 실습
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// 실습2
interface ShoppingBag {
  product: string;
  price: number;
}

let 장바구니: ShoppingBag[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
