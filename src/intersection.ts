export {};

type Pitcher1 = {
  throwingSpeed: number
};

type Batter1 = {
  battingAverage: number;
};

const Pasha: Pitcher1 = {
  throwingSpeed: 154
};

const Ito: Batter1 = {
  battingAverage: 0.367
};

// type TwoWayPlayer = {
//   throwingSpeed: number
//   battingAverage: number;
// };
//下記は上と同じ
type TwoWayPlayer = Pitcher1 & Batter1;

const SI: TwoWayPlayer = {
  throwingSpeed: 154,
  battingAverage: 0.367
}
console.log(SI);