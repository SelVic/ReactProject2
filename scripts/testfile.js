// let var1 = {
//     name: "v", age: 14, animal: {name: "bobik", species: "dog"}
// };
// let var2 = {...var1};
// let var3 = var1;
// let var4 = {var1};
//
// var1.foo = "foo";
//
// var3.age = 15;
// var2.name = "c";
// var1.animal.name = "zverek";
// let var5 = Object.assign({}, var1);
// console.log(var4.var1===var3);
// //deep clone, lodash
//
//
// function foo(a, aa) {
//
// console.log(arguments);
// let test = ['Aa','Bb','Cc'];
//     console.log(test);
//
// //return undefined;
// }
//
// foo(4,"vasya", "bobik");

let a = [9,20,30,40];

let sum = a.reduce((acc, curr) => {
    console.log(1);
    acc += curr;
    return acc
}, 0)
console.log(sum)