
// const mul = (a,b)=>{
//     console.log(a*b);
// }

// mul(5,8)

// const mul = (a,b)=>{
//     s=a*b;
//     return s;
// }

// let val = (3,4);
// console.log(val);
// let str = "divyaranjan"
// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
//         count++;
//       }

//     }
// console.log(count);
// }
// countvowels(str);
let str = "divyaranjan"
const countvow =(str)=>{
     let count = 0;
     for(const char of str){
       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ){
        count++;
      }
     }
console.log(count);

}

countvow(str);