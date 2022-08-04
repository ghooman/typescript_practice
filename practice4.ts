// type이 여러개일때 변수에 할당
type Animal = {name: string, age: number}

let 동물: Animal = {name: 'dog', age: 5}


// object readonly(수정 lock)
type Friend = {
    readonly name: string;
}

const friend: Friend = {
    name: 'mike'
}

// type extend
type 문자 = string;
type 숫자 = number;
type 합치기 = 문자 | 숫자

type PositionX = {x: number}
type PositionY = {y: number}

type NewType = PositionX & PositionY

let position: NewType = {x: 10, y: 20}

//

type MyType = {color?: string, size: number, readonly position: number[]}

//


// literal types 엄격하거나, 자동완성 힌트땜에 사용. const 업글 버젼
let man: "슈퍼맨" | "배트맨";

function 함수1(x: 'hello'): 1 | 0 {
    return 1
}

function 함수2(x: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
    return ["가위"]
}

//

let 자료 = {
    name: 'kim'
}

function 내함수2(a: 'kim') {

}

내함수2("kim") // "kim"이라는 자료 x / "kim"이라는 타입 o