// declare variable based on the name of an object property 
// destructuring object 
const myobject={x:1,y:3,t:5};
// const {x,y}=myobject;
// console.log(myobject.x.g);
// desturcturing array 
const [p,q]=[45,37];
// console.log(p,q);


// another option 
const{name}={name:'yeasin',father:'shamsul haque',mother:'shanaj begum'};
console.log(name);
// kkhono kono variable jdi khuje na paoa jai tahale(?.)use kra hoi 

const company={
    name:'GP',
    ceo:{id:1,name:'ajmol',food:'fuckha'},
    web:{work:'website devalopment',employee:22,framework:'react'}
};

console.log(company.web1?.framework);