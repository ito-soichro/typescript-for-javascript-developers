export {};

let profile: object = { name: 'Ham'};
profile = { brithYear: 1976 };
console.log(profile);
//上は書き換わったことに気づかない

let profile2: {
  name: string,
}  = { name: 'Ham'};
// profile2 = { brithYear: 1976 }

console.log(profile2);