const mysym = Symbol("key1")

const jsuser = {
    name:"divya",
    [mysym]:"key1",
    age:27,
    email:"divya@gmail.com",
    isLoggedIn:false,
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])


const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"a" ,4:"b"}
const obj3 = {5:"a" ,6:"b"}
// const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4)
console.log(jsuser);
console.log(Object.keys(jsuser))
console.log(Object.values(jsuser))