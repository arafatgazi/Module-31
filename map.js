const numbers=[23,54,6,77,8,8,9];
let output2=[];
const doubleit=number=>number *2;
for(const number of numbers){
    // const result=number *2;
    // or 
    const result=doubleit(number);

    output2.push(result);
}
// console.log(output2);
// / 1.loop banaici
// // 2.element diye function ke call krci .
// // 3.result ke ekta array er mdde push krci.


// another system by one line 
// map er kaj 
// / 1.loop banai e element golo through krve
// 2.element diye function ke call krci .
// 3.result ke ekta  ekta ekta kre array er mdde push krbe.
const output=numbers.map(doubleit);
console.log(output);

// another system 
const output3=numbers.map(number=>number *2);
console.log(output3);

// another system 
const output4=numbers.map(x=>x *2);
console.log(output4);