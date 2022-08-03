let myName: string = "Jihoo"
let age: number = 33
let country: string = "seoul"

let favSong: {[key: string]: string} = {singer: "ive", song: "love dive"}

let project: {member: string[], days: number, started: boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}


  // union type
let member: (number | string)[] = [1, "2", 3]
let object: {a: string | number} = {a: '123'}

let 아무거나: unknown;
아무거나 = 123;
아무거나 = "string"
아무거나 = []

let user: string = 'kim';
let age2: undefined | number = undefined;
let married: boolean = false; 
let 철수: (string | number | undefined| boolean)[] = [user, age, married];

  
let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[]
} 

= {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]