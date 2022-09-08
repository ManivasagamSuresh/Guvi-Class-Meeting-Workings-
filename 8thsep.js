var age =+(prompt("enter"));
var p1 = new Promise((resolve,reject)=>{
    if(age>18){
    resolve("yes");}
    else{
        reject("no fuck")
    }
});
console.log(p1);