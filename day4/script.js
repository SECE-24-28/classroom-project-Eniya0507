//console.log(2+3);
//varaibles
// b="hello";
// c=50;
// dont use var unless absolutely neccessary as it can be used even before initialization and it can also be redeclared
// var a=10;
// var a=30;
// b=10; // not allowed
// let b="h1";
// let b=10; // not allowed
//const c=30.5;
//c=50;
//console.log(c);

//Arrays- is a datatype that stores multiple elements on the same data type
//const a=[12,13,15];
//console.log(a);
//const c=[10,"Hello",30.5,true]; // can change or add or remove elements from the array even  its constant 
// as we care not redeclaring the variable and we are not changing the datatypes.
//c=[1,2,3]; // not allowed
//c.push(15,17,19);
////c[2]=40;
//console.log("before:",c);
//c.pop();
//console.log("after:",c);
///console.log()
// c.pop();
//console.log(c.length);
//c.shift();// removes first element
//c.unshift();// adds element at the beginning
//console.log(c);
//c.splice(2,0,50); // removes elements from index 1 to 2
//console.log(c);
//c.splice(-1,1); // removes elements from index 2 to end
//console.log(c);
//const arr=[1,2,3,4,5];
// console.log("before map function: ",arr);
// Array map: adds a function to each elements of the said array.
// const newarr=arr.map(num =>num*5);
// console.log("after map function: ",newarr);
//array filter: create a new array with the element that passes the said conditions/tests.
//const newarr=arr.filter(num=>num%2===0);
//console.log("after filter: ",newarr);
//const courses=[" Mongodb","Express.js","React.js","Node.js"];
//console.log("courses:" ,courses);
//const newcourses=courses.filter(c=>c!="postgrees");
//console.log('updated courses:', newcourses);

//const arr=[1,2,3,4,5];
//const sum=arr.reduce((Store,num)=>num+Store);
//console.log(`Addition of: ${arr} = ${sum}`);
//Object in javascript
//const user ={
    //firstname:"John",
    //lastname:"Doe",
    //company:{
        //salary:50000,
        //position:"Software developer",
    //}
//}
//const user2={};//empty object
//console.log(user.firstname);
//console.log(user['lastname']);
//console.log(user.company.position);
//console.log(user.company['salary']);
//user.age=30; //adding new key value pair to the object
//console.log(user);
//user['lastname']="Singh"; //updating value of existing key
//delete user.firstname; //deleting key value pair from the object
//console.log(user);
//console.log(Object.keys(user)); //gives array of keys in the object
//console.log(Object.values(user)); //gives array of values in the object
//console.log(Object.entries(user)); //gives array of key value pairs in the object
//const arrr=[10,20,30,40,50];
//const arrr2=[1,2,3,4,5];
//const merge=[...arrr,...arrr2];
//console.log(merge);

//Functions
//function is a block of reusable code that performs a specific task
//function  add(a,b){
    //const c= a+b;
    //return c;
//}
//console.log(add(10,20));
//const fact=function factorial(num){
  //return num<=1?1:factorial(num-1);
  //if(num<=1){
    //return 1;
 // }
  //else{
    //return num*factorial(num-1);
  //}
//}
//const arr=[12,53,23,76,56];
//function addArr(arr){
    //const sum=arr.reduce((acc,num)=>acc+num);
    //return sum;
//}
//console.log(addArr(arr));
 //const sum=(a,b)=> {return a+b};  //arrow function
//const subs=(a,b)=>{return a-b};
//console.log(sum(5,6));
//console.log(subs(7,5));
//function greet(name="guest"){
  //console.log(`hello to you, ${name}`);
//}
//greet("carrie");
//greet();

//loops
//for(let i=1;i<=10;i++){
  //console.log(`5 x ${i} = ${5*i}`);
//}

//let i=1;
///while(i<=10){
 //console.log(`5 x ${i} = ${5*i}`);
 //i++;
//}
 //do{
   //console.log(`5 x ${i} = ${5*i}`);
  // i++;
//}while(i<=10)
const arr=[12,2,3,43,54,64]
for(let i=0;i<=arr.length;i++){
  console.log(arr[i]);
}
for(const item of arr){
  console.log(item);
}
const user1={
    firstname:"H1",
    lastname:"H2",
    age:20,
    email:"XXXXXXXXXXXX",
    company:{
        salary:10000,
        name:"H1"
    }
};
for(const key in user1){
    console.log(key+":"+user1[key]);
}

const arr6=[10,20,30,40,50];
arr6.forEach(x=>console.log(x));



