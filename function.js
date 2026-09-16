function myfunction(msg){
    console.log(msg)
}

myfunction("i love bbsr")

function sum(x,y) {
    s = x+y;

    return(s);
}

let val = sum(3,4)
console.log(val)

function addtwonumber(number1,number2) {
    console.log(number1+number2)
}
 addtwonumber(5,6)

// function addtionalprice(num1) {
//     return(num1)
// }
 
// console.log(addtionalprice(200,40,600))

function addtionalprice(...num1) {
    return(num1)
}
 
console.log(addtionalprice(200,40,600))

const user = {
    price :200,
    name : "divya"

}

function handelobject(anyobject){
    console.log(`price is ${anyobject.price} and name is ${anyobject.name}`);


}

handelobject({
    price:200,
    name:"divya"
})

const mynewarray = [200,300,400]

function returnvalue(array){
    return array[2]
}

console.log(returnvalue(mynewarray));

// global and local scope

let a = 300

if (true){
    let a = 100
    const b = 200
    var c = 600
    console.log("inner:" ,a)
}

console.log(a)
// console.log(b)
// console.log(c)

const number = 5

function addon(num){
return(num + 1)
}

console.log(addon(number))

const addtwonum = (num1,num2)=> num1 + num2

console.log(addtwonum(3,4))
