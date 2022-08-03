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
