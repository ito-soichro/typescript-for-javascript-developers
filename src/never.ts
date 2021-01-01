export {};

//戻ってこない戻り値に対しては、neverを使う
//voidとの違い
//void型は、値が無いだけで戻ってくる　ex)undefined
function error(massage: string): never {
  throw new Error(massage);
}

try {
  let result = error('errorです');
  console.log({ result });
} catch(error) {
  console.log({ error }); 
}