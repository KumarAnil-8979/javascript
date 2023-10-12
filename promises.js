// //promises syntaxes

// const promiseOne=new Promise(function(resolve,reject){
//     //Do an async task
//     //DB calls,crytograpy,network

//     setTimeout(() => {
//         console.log('async task is complete');
//         resolve();
//     }, 1000);
// }); 

// promiseOne.then(()=>{
//     console.log("promises consumed");
// })                           //resolve ka connection then se hai





// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve();
//     }, 1000);
// }).then(()=>{
//     console.log("async 2 resolved");
// })




// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"anil",email:"anil123@gmail.com"});
        
//     },1000)
// })
// promiseThree.then((user)=>{   //khud smj leta hai ki user koi object h
//     console.log(user);

// })


const promisefour=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
        resolve({userName:"anil",password:"123"})
        }
        else{
            reject('ERROR 404 not found')
        }

    }, 1000);
})
promisefour.then((user)=>{
    console.log(user);
    return user.userName;
}).then((userName)=>{
    console.log(userName);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promises is either reject or resolve");
})


const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
        resolve({userName:"JavaScript",password:"123"})
        }
        else{
            reject('ERROR js not found')
        }

    }, 1000);
})


async function consumePromiseFive(){
    const response=await promiseFive;
    console.log(response);
}

consumePromiseFive();










const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
