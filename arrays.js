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
//console.log(realArray);


//console.log(Array.from("Anilkumar")); // from method change the data into a  array //["A","n","i","l",......]

//console.log(Array.from({name:"anil"}));


const score1=100;
const score2=200;
const score3=300;
//console.log(Array.of(score1,score2,score3)); //[100,200,3000]







//**************object in  javascripts **********************8

//singleton object: jab hum  contructor ke help se  object bante hai toh uske single object banta hai  like:---


 //object.create()
// object is standlone property with their property and types; js object  is collection of key and values pairs

 //declare a symbol
  
const mySym=Symbol("key1");

//console.log(typeof mySym); //symbol

//object literals
   

 const user={
    name:"anil",
    "full name":"anil kumar",
    [mySym]:"mykey1",//declation symbol in object by square brackets
    age:23,
    location :"gaya",
    email:"anil123@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","Saturday"]
}

//access the object values:

//method 1
//console.log(user.name);
//method 2
//console.log(user["name"]);   // [iske ander string ke roop me dalna padega]
//console.log(user["full name"]);

//console.log(typeof(user[mySym])) // jab symbol  ko access krte hai toh  string ke roop me nhi likhate hai;



//object freeze in js

user.name="sunil";

//console.log(user);
//Object.freeze(user);
user.name="suman";

//console.log(user);


user.greeting=function(){
    console.log("Hello js user");
}
//console.log(user.greeting()); // function ke ander ke value ko print krega
//console.log(user.greeting); // function print


user.greetingTwo=function(){
    console.log(`Hello js  user,${this.name}`);

}

//console.log(user.greetingTwo());






//**********partII object*************

const tinder=new Object(); // singlton object

const tinderUser={} // non singlton object

tinderUser.id="12345abc";
tinderUser.name="sammy";
tinderUser.isLoggedIn=false;

//console.log(tinderUser);



const regularUser={
    email:"anil123@gmail.com",
    fullName:{
        userFullName:{
            firstName:"anil",
            lastname:"Kumar"
        }
    }
}
//console.log(regularUser.fullName.userFullName.firstName);



const obj1={1:"a",2:"b"};

const obj2={3:"a",4:"b"};

const obj3= {obj1,obj2};

//console.log(obj3); // obj3 me obj1 and obj2 ka value alag alag aayega

//method 1
const obj4=Object.assign({},obj1,obj2); // braket is optional 
//console.log(obj4);

//method 2 by spread operator
 const obj5={...obj1,...obj2};
 console.log(obj5);


console.log(Object.keys(tinderUser)); // tinderuser object ke sara key value ko array me return kr dega

console.log(Object.values(tinderUser)); //  Array(3) [ "12345abc", "sammy", false ]      sara value ko array me  print kr dega

console.log(Object.entries(tinderUser));




//******************object Destructuring************

//destructuring  :it is technique  o upack value from arrays or properties from object into distinct variables;

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructure:"anil"
}

//object destructuring 

const {courseInstructure}=course;
console.log(courseInstructure);

const {courseInstructure:instructor}=course;
console.log(instructor);





function loginUser(username){
    return `${username}, just login  welcome`;
}
 //console.log(loginUser("hitesh"));


//  console.log(loginUser()); //undefined 

// // undefined and empty string falsy value hai


// // cart 

// function calculateCartPrice(... num1){   // rest operator used in function
//     return  num1;
// }
// console.log(calculateCartPrice(200,300,455));  // sara  ko array ke roop me return kr dega [200,400,455]

// const user={
//     username:"anil",
//     price:300
// }
// function handleObject(anyobject){   //pass argument in function as object
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// handleObject(user);


// const mynewArr=[200,400,500,100,600];
// function returnSecondValue(getarray){ //array as an argument in function
//     return getarray[2];
// }
// console.log(returnSecondValue(mynewArr));





// //****** scope **************


// // scope: the scope is current context of execution in which values and expressions are visible or can be referenced scopes can 
// // also be layred  in hierarchy so that child scope have acess to parent scopes but not vice verce



// function one(){
//     const username="anil";
    
//     function two(){
//         const website="youtube";
//         console.log(username);
//     }
//     two();
// }

// one()




//arrow function  and this  keyword

//console.log(this);  //node me empty object print krega


// function chai(){
//     let username="hitesh";
//     console.log(this.username);  //undefined
// }

//chai();


const chai1=function(){
    let username="hitesh";  //undefined
    console.log(this.username);
}

//chai1();


const chai2=()=>{
    let username ="hitesh";
    console.log(this.username); //undefined
}

//chai2();

//const addTwo=(num1,num2)=>num1+num2;   //emplicit return

//const addTwo=(num1,num2)=>(num1+num2); // parenthesis me rap krna hai 

const addTwo=(num1,num2)=>({username:"anil"}); //object return ke liye curly brackte lagana jaruri hai;

// immediately Invoked Function Expression(IIFE)


(function chai(){
    console.log("DB connected");
})(); // IIFE
//IIFE :IIFE in js is one of the good ways to hide  data from global scope as it creates its own scope.



(()=>{
    console.log("Db conneted two");
})();






//How does js work behind the scene

//javascript Execution context


const coding=["js","ruby","java","python","cpp"];

// coding.forEach( function (item){ //for each method does not return anything
//     console.log(item);
// });  

function printme(item){
    console.log(item);
}
coding.forEach(printme);
 

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr);
})


const mycoding=[
    {
    languageName:"js",
    languageFileName:"javascript"
    },
    {
    languageName:"java",
    languageFileName:"java"
    },
    {
    languageName:"python",
    languageFileName:"py"
    }

]
mycoding.forEach( (item)=>{
    console.log(item.languageFileName);

})


//fiter map reduce  

const myNum=[1,2,3,4,5,6,7,8,9,10];
let newnum=myNum.filter((num)=>{
     return num>4;
})
console.log(myNum)
console.log(newnum);

const newArr=[];
myNum.forEach((num)=>{
    if(num>4){
        newArr.push(num)
    }
})
console.log(newArr);



//map

const mynumber=[1,2,3,4,5,6,7,8,9,10];
// const newnums=mynumber.map((num)=>{
//     return num+10;

// })

const newnums=mynumber
            .map((num)=>num*10)
            .map((num)=>num+1)       //chaning mrthod;
            .filter((num)=>num>=40);



console.log(mynumber);
console.log(newnums);




// reduce

const array1=[1,2,3,4,5,6];

const sum=array1.reduce((accumulator,currentVlaue)=>accumulator+currentVlaue)
console.log(sum);























