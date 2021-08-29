// filter kawke nibe kawke nibe nah kintu kaj kre map er mtn. abon ekhane function e condition use kra hoi.
const bignumbers=[39,34,56,78,32,65,567,356,6756]
const big=bignumbers.filter(b=>b>100);
console.log(big);

// find and filter er differnce holo filter direct ekta array dei.kintu find sdu oi element ta dei.  {name:'mobile-phone',price:50,color:'green'}, is a element.
const products=[
    {name:'waterbottle',price:40,color:'yellow'},
    {name:'mobile-phone',price:50,color:'green'},
    {name:'mouse',price:100,color:'tia-color'}
];
const color=products.find(x=>x.color=='tia-color');
console.log(color);