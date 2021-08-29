// ekta string e koita word ache 

// by array 
const friends=['yeasin arafat','farzana akther sormi','shanaj akther','mohon gazi'];
const flength=friends.map(f=>f.length);
console.log(flength);
//  in array of object 
// product name er output 
const products=[
    {name:'waterbottle',price:40,color:'yellow'},
    {name:'mobile-phone',price:50,color:'green'},
    {name:'mouse',price:100,color:'tia-color'}
];
const productname=products.map(p => p.name);


// by filter 
const productprice1=products.filter(p => p.price>40);
const productcolor=products.filter(p => p.color=='tia-color');


console.log(productname,productprice1,productcolor);



// map abon foreach er different
// map return kre kintu foreach return kre nah  
