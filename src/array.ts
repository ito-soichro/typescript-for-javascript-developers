export {};

let numbers: number[] = [1,2,3];
console.log(numbers);

//以下、非推奨の書き方　上記と意味は同じ
let numbers2: Array<number> = [1,2,3];
console.log(numbers2);
let strings: string[] = ['a', 'b', 'c'];
console.log(strings);

let arrays: number[][] = [
  [50,100],
  [150,300]
];
console.log(arrays)



let arrays2: (number[] | string[])[] = [
  [50,100],
  ['a','c']
];
console.log(arrays2)

let arrays3: (string | number | boolean)[] = [1, false, 'japan']
console.log(arrays3)

let arrays4:((string | number)[] | (number | boolean)[])[] = [
  ['a',100],
  [false,200]
];
console.log(arrays4)