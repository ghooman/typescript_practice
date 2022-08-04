// method에 type alias 지정하기
let 함수3 = (a) => 10; //함수타입은 표현식이나 화살표함수에 사용
let 회원정보 = {
    name: 'kim',
    plusOne(a) {
        return a + 1;
    },
    changeName: () => { }
};
let cutZero = (x) => {
    if (x[0] === "0") {
        x = x.replace("0", "");
    }
    return x;
};
let removeDash = (x) => {
    x = x.replaceAll("-", "");
    return parseFloat(x);
};
function allAdd(a, func1, func2) {
    console.log(func2(func1(a)));
    return func2(func1(a));
}
allAdd("010-2354-1572", cutZero, removeDash);
