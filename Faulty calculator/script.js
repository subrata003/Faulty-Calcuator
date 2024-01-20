console.log("this is faulty calculator")
let a = prompt("enter the fast number :");
let b = prompt("enter the sec number :");
let c = prompt("Enter the operation :");

let d = Math.random();
let obj={
     "+":"-",
     "*":"+",
     "-":"/",
     "/":"**",
}
if(d<0.1){
    alert(`the result  is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c];
    alert(`the result  is ${eval(`${a} ${c} ${b}`)}`)

}