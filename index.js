 //  Datatypes in javascripts

 // mainly 7 types of primitive datatypes in javascripts


 //number => 2 to power 53
 //bigint
 //string=>""
 //Boolean=>true/false
 //null=> standalone  value     type of null is object
 //undefined=> when the  value is not assign   type of undefined is  undefined
 //symbol=>unique


 //object


//  console.log(typeof  null);  // object
//  console.log( typeof undefined); //undefined
//  console.log(null==undefined)// true

//  console.log(null===undefined) // false





 //conversion  in javscripts 

let score=33;

//console.log(typeof NaN) // number


//any value to convert number is:

//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0; 



//into Boolean

//1=>true; 0=>false
//" "=>false
//"anil"=>true 

//into string


// let someNumber="33a";
// let stringValue=String(someNumber);
// console.log(typeof stringValue)



//*************************Operations*********** */
 
let value=3;
let negvalue=-value;
//console.log(negvalue)


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1="hello";
// let str2="anil";
// console.log(str1+" "+str2);

// console.log("1"+2);
// console.log(1+2+"2");


// console.log(+true);  //1
// console.log(+"");  //0


// let count=1;
// let sum= count++ + ++count + count++;
// console.log(sum); //7


let x=3;
const y=x++;
//console.log(`x: ${x},y:${y}`); //x=4 y=3


// let a=3;
// const b=++a;
// console.log(`a:${a}, b:${b}`);


//  console.log("2">1);
//  console.log("02">1);


// console.log(null>0);
// console.log(null==0);
// console.log(null===0);
// console.log(null>=0);


// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined>=0);
// console.log(undefined===0);


// === check value as well as datatypes 

//console.log("2"===2);


// # primitive datatypes(call by value)

//  7 types: string,Number, Boolean,null,undefined,symbol, BigInt


//#Non primitive Datatypes(Refrence types)

// Array, objects,Functions
// All non primitive data type typeof is object

const student=["anil","sunil","suman"];
let myObj={
    name:"anil",
    age:22,
}


const myFunction=function(){
    console.oog("hello world")
}

//console.log(typeof student);

  





// ******************************memeory in javascripts************************

//stack and heap


//stack(primitive),heap(non primitive)


let myName="anildotcom";
let update=myName.slice(-2,myName.length)
// console.log(update)




const balance=new Number(100.56);
// console.log(typeof balance.toString()); // change number to string

// console.log(balance.toFixed(2))  //point ke baad kitna digit tak chahiye

// console.log(balance.toPrecision(4));







//*************Math.random()************** */

//console.log(Math.random())

//console.log((Math.random()*10)+1);

const min=30;
const max=50;
//console.log(Math.floor(Math.random()*(max-min+1))+min);



//*************date and time***************** */

let myDate=new Date();
 console.log(myDate.toString())

 console.log((myDate.toDateString()));
 console.log(myDate.toISOString());
 console.log(myDate.toJSON());
 console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());



