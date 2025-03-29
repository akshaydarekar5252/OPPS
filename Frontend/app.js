// //object prototypes

// let arr1 = [1,2,3];
// let arr2 = [1,2,3];
// arr1.sayhello=()=>{
//     console.log("Hello");
// }
// arr2.sayhello=()=>{
//     console.log("Hello");
// }

// //factory function

// function personMaker(name,age){
//     const person ={
//         name: name,
//         age:age,
//         talk(){
//             console.log(`hi , my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = personMaker("akshay",19);
// let p2 = personMaker("emy",17);



// new operator 

// function person(name,age){
//    this.name = name; // this means p1 beacuse we use new operator 
//    this.age= age;

// }
// person.prototype.talk=function(){
//     console.log(`hi , my name is ${this.name}`);
// }
// let p1 = new person("akshay",19);
// let p2 =  new person("emy",17);



//classes 

// class person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`hi , my name is ${this.name}`); 
//     }
// }
// let p1 = new person("akshay",19);
// let p2 =  new person("emy",17);




//inheritane


// class person{
//     constructor(name,age){
//         console.log("person class constructor ");
//         this.name = name;
//         this.age = age;
        
//     }
//     talk(){
//         console.log(`hi , my name is ${this.name}`); 
//     }
// }




// class Student extends person{
//     constructor(name,age,marks){
//         console.log("student class constructor ");
//         super(name,age);  //parent class constructor is being called
//         this.marks = marks;
//     }
// }
// class Teacher extends person{
//     constructor(name,age,sub){
//         super(name,age);  //parent class constructor is being called
//         this.sub = sunject;
//     }
// }





//new example 



class Mamals {   // base class or  parent class 
    constructor(name){
        this.nsme= name;
        this.type="Warm - blooded";
    }
    eat(){
        console.log("i am eating ");
    }
}

class Dog extends Mamals{  // child class
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff...");
    }
}

class Cat extends Mamals{ // child class 
    constructor(name){
        super(name);
    }
    bark(){
        console.log("meow...");
    }
}
