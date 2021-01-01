import axios from 'axios';

export {};


let url: string = 
'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

// axios.get(url).then(function (response) {
//   let data: any = response.data
//     console.log(data);
// });

axios.get(url).then(function (response) {
  interface Article{
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data
  // data = [
  //   {
  //     id: 1,
  //     title: 'a',
  //     description: 'b',
  //   }
  // ];
    console.log(data);
});