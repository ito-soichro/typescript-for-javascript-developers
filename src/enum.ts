export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

enum Colors {
  RED = '#FF0000',
  WHITE = 'FFFFFF',
  GREEN = '#008000',
  BULE = '0000FF',
  BLACK = '#000000'
}

let green = Colors.GREEN;
console.log({green});