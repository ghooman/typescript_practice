// method에 type alias 지정하기

type 함수타입 = (a: string) => number;

let 함수3: 함수타입 = (a) => 10 //함수타입은 표현식이나 화살표함수에 사용


// type 지정해보기

type Member1 = {
    name: string,
    plusOne: (a: number) => number,
    changeName: () => void

}

let 회원정보: Member1 = {
    name: 'kim',
    plusOne(a) {
        return a + 1
    },
    changeName: () => {}
}


// cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
// removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

type CutType = (x: string) => string

let cutZero: CutType = (x) => {
    if (x[0] === "0") {
        x = x.replace("0", "")
    }
    return x;
}

type RemoveType = (x: string) => number
let removeDash: RemoveType = (x) => {
    x = x.replaceAll("-", "")
    return parseFloat(x)
}

type Func1 = (a: string) => string
type Func2 = (a: string) => number

function allAdd(a: string, func1: Func1, func2: Func2) {
    console.log(func2(func1(a)))
    return func2(func1(a))
}

allAdd("010-2354-1572", cutZero, removeDash)