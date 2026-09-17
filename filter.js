let array = [1,2,3,4,5,6,7,8,9]

let mynewarr=array.filter((val)=>{
    return val % 2 === 0;
})

console.log(mynewarr);

// reduce method

let code = [1,2,3,4]

let myresult = code.reduce((res,current)=>{
    return(res+current);
})

console.log(myresult);

// pratice

// let marks = [101,251,52,87,884,887]

// let abovemark =marks.filter((val)=>{
//     return val >90;
// })

// console.log(abovemark);

let num = prompt("print a number :");

let 