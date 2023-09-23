//Array

// javascripts arrays are resizable and can contains a mix of different data types

const myArr=[0,1,2,3,4,5];

const myArr2=new Array(1,2,3,4);  //array declaration


//array method
 myArr.push(6);  // add the element in the last of my arrays

 myArr.push(7);


 myArr.pop()  //delete element from arryaa from last element

 myArr.unshift(9) // add element in the from first position

 myArr.shift() // pop the element from the starting position

 // const newArr=myArr.join();  //combine all the element in string formate return string
//   console.log(typeof newArr);
//  console.log( typeof myArr);

const myArr3=myArr.slice(1,4);  //slice method original array ko change nhi krta hai uske copy me change me krta hai

// console.log("original Array "+myArr);
// console.log("After slice " +myArr3);
// console.log("original Array "+myArr);

 
const myArr4=myArr.splice(1,4); //splice original arrya ko change krta hai or last index  range me dono end point ko include krta hai

// console.log("original Array "+myArr);
// console.log("After slice " +myArr4);
// console.log("original Array "+myArr);








const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9];
 //arr1.push(arr2);

 const arr3=arr1.concat(arr2);

 //console.log((arr3));



// spread operator

const wholeArray=[...arr1,...arr2];
//console.log(wholeArray);



//*******flat method**********    // array ke ander kitna v array kyu na ho sab ko milakar ek array bana deta 

let arr=[1,2,3,[4,5,6],7,[6,7,[4,9]]];
let realArray=arr.flat(2);
console.log(realArray);


console.log(Array.from("Anilkumar")); // from method change the data into i  array

console.log(Array.from({name:"anil"}));


const score1=100;
const score2=200;
const score3=300;
console.log(Array.of(score1,score2,score3));