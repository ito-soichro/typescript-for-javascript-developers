export {};

let object: {name: string; age: number} = {
  name: 'Ham-san',
  age: 43
};
console.log(object);


type Objecttype = {
  name: string; 
  age: number
}
let object2: Objecttype= {
  name: 'Ham-san',
  age: 43
};
console.log(object2);


interface ObjectInterface {
  name: string; 
  age: number
};

let object3: ObjectInterface = {
  name: 'Ham-san',
  age: 43
};
console.log(object3);


