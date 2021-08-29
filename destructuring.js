// object theke value neao 
const fish={ id:45 , name:'hilsha fish', price:9000, phone:'009448957485',dress:'silva',address:'chadpur'};
// normal code 

// const phone=fish.phone;
// const address=fish.address;

// // for ES6
const{id,price,phone}=fish;
console.log(price,phone);
const company={
    name:'GP',
    ceo:{id:1,name:'ajmol',food:'fuckha'},
    web:{work:'website devalopment',employee:22,framework:'react'}
};
const{work,framework}=company.web;
const {name}=company.ceo;
console.log(work,framework);