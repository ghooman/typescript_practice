type Name = string | number;
let 이름: Name = 123;

let 타입: string[] = ['1', '2', '3']

function 함수(x: number): number {
    return x * 2
}


// tuple 타입
type Member = [number, boolean];
let john: Member = [123, true]

type Obj = {[key: string]: string}
let david: Obj = {name: 'kim', age: "20"}

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}