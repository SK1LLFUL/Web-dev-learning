// String,Numbers,Boolean,null,undefined
const nam='John';
const age=30;
const rating=4.5;
const iscool=true;
const x=null;
const y=undefined;
let z

//Concatenation

console.log('My name is' + nam + 'and I am' + age)

// Template String

const hello= `My name is ${nam} and I am ${age}`;
console.log(hello);

const s='Hello World';
const l='technology, computers, it, code';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));
console.log(s.split(''));
console.log(this.split(', '));

//Arrays - variables that hold multiple values

const numbers=new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['apples','oranges','pears',10,true]
//fruits=[];  will show an error
console.log(fruits);

console.log(fruits[1]);

fruits[3]='grapes';
console.log(fruits);

fruits.push('mangoes');
fruits.unshift('strawberries');
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

const person={
    firstName:'John',
    lastName:'Doe',
    age:30,
    hobbies:['music','movies','sports'],
    address:{
        street:'50 main st',
        city:'Boston',
        state:'MA'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName,lastName,address:{city}}=person;

console.log(firstName);
console.log(city);

person.email='john@gmail.com';
console.log(person);


const todos=[
    {
        id:1,
        text:'Take Out Trash',
        iscompleted:true
    },
    {
        id:2,
        text:'Meeting With Boss',
        iscompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        iscomppleted:false
    }
];
console.log(todos[1].text);


const todoJson=JSON.stringify(todos);
console.log(todoJson)

//For Loops

for(let i=0;i<10;i++){
    console.log(i);
}

for(let i=0;i<10;i++){
    console.log(`For Loop Number : ${i}`);
}

//While Loops

let i=0;
while(i<10){
    console.log(`While Loop Number:${i}`);
    i++;

}

for(let i=0;i<todos.length;i++){
    console.log(todos[i].text);

}

for(let todo of todos){
    console.log(todo.text);
}


//forEach , map, filter

todos.forEach(function(todo){
    console.log(todo.text);
});

const todoText=todos.map(function(todo){
    return todo.text;

});

console.log(todoText);

const todoCompleted=todos.filter(function(todo){
    return todo.iscompleted===true;


});
console.log(todoCompleted);

const todoCompleted2=todos.filter(function(todo){
    return todo.iscompleted===true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted2);


const h=10;
if(h==10){
    console.log('x is 10');
}


const j='10';
if (j===10){
    console.log('x is 10');
} // you wont get any output because triple = matches the datatype as well in this case it is string not just the value while == matches only the value


const k=10;
if (k===10){
    console.log('x is 10');
}else if(x>10){
    console.log('x is greater than 10');
}
else{
    console.log('x is less than 10');
}


const a=4;

if (h>5 || a>3){
    console.log('h is more than 5 or y is more than 3');

}
// two pipes || are used for or 
// && are used for and

if (h>5 && a>3){
    console.log('h is more than 5 and y is more than 3');

}

const p=10;

const color=p>10 ? 'red ':'blue';
console.log(color);


switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;


}


function addNums(num1 =1 ,num2=1) {
    return num1+num2;
}

addNums(5,4);


const arrowaddnums=(num1=1,num2=2)=>{
    console.log(num1+num2);

}

const arrowaddnums2=(num1=1,num2=2) => console.log(num1+num2);


const arrowaddnums3=(num1=1,num2=2) => num1+num2;
console.log(arrowaddnums3(5,5));


// Constructor Function
function Person1(firstName,lastName,dob)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.dob= new Date(dob);
}

Person1.prototype.getBirthYear= function(){
    return this.dob.getFullYear();
}

Person1.prototype.getFullName=function(){
    return `${this.firstName} ${this.lastName}`
}

// Instantiate object

const person1=new Person1('John','Doe','4-3-1980');
const person2=new Person1('Duke','Sama','3-4-1890');

console.log(person1);
console.log(person2.firstName);
console.log(person2.dob.getFullYear);


console.log(person1.getBirthYear());
console.log(person1.getFullName());

//Class
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);

    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


console.log(window);
alert(1);

// Single Element 
const form=document.getElementById('my-form');
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
console.log(form);

