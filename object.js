//"use strict"
// let user = {
//     name: 'zxh',
//     age: 30,
//     "likes cats": true,
// };
// user.isAdmin = true;

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    
    }
}
let user = makeUser('zxh', 30);
for(let key in user){
  //console.log(key+" "+user[key]);
}
let codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    // ..,
    "+1": 999
};
    
for (let code in codes) {
  //console.log( +code ); // 49, 41, 44, 1
}

let id1 =Symbol("id"); 
let id2 =Symbol("id"); 

// console.log(id1.description);
// console.log(id2.toString());

let arr = [1,2,3,4,5,6];

arr.splice(1,1);

let str = "dfsfsfsfs";
// console.log(str.slice(2,6));
// console.log(str.split("s"));

let json = JSON.stringify(codes,null,2);
console.log(json);