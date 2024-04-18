//DAY 48
//TASK 1 (Create promise that resolves with "Hello World" after 2 seconds)
let helloPromise = new Promise<string>((resolve)=> {
    setTimeout(()=> {
        resolve("Hello, World");
    }, 2000);
});
helloPromise.then((message)=> console.log(message));
//it simply take 2 seconds to print "Hello, World"

//TASK 2 (Show how to use the .then() and catch() methods to handle promise resolution and rejection)
let conditionalPromise = new Promise<string>((resolve, reject)=> {
    let success = Math.random()>0.5; //Randomly select success or failure
    if(success){
        resolve("Success!!");
    } else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
.then((result)=> {
    console.log(result);
})   //it handles successful resolution 
.catch((error)=> {
    console.log(error.message); //Handle failure
})
//it randolmy shows success or failure basen on the outcome of promise

//TASK 3 (Explain the use of the promise.all() method)
let promise1 = Promise.resolve(3);
let promise2 = 43;
let promise3 = new Promise<string>((resolve)=> {
    setTimeout(resolve, 100, "for");
});
Promise.all([promise1, promise2, promise3]).then((values)=> {
    console.log(values); 
});
//it simply print all promises with the help of method Promise.all()
