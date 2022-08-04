// 함수 

// assertion은 1. narrowing할 때, 2. 타입 100% 확신 / 비상용으로 사용
function 내함수(x: number | string) {

  let array: number[] = []
  array[0] = x as number;

}

내함수(2)


// question 1

function cleaning(a: (number | string)[]) {
  let newArr: number[] = [];

  a.forEach(el => {
    if (typeof el === "string") {
      newArr.push(parseFloat(el))
    } else {
      newArr.push(el)
    }
  })

  return newArr;
}

console.log(cleaning([123,'3']))


// question 2

let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function teacher(obj: {subject: string | string[]}) {
  if (Array.isArray(obj.subject)) {
    return obj.subject[obj.subject.length - 1]
  } else {
    return obj.subject
  }
}

console.log(teacher(민수쌤))