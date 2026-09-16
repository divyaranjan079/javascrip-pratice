// for (i=0 ; i<=10 ;i++){
// const element = i
// console.log(element)
// }

// for (i=0 ; i<=10 ;i++){
// const element = i

// if (i==5){
//     console.log("print value 5")
// }

// console.log(element)
// }

for (i=1 ; i<=10 ;i++){
    // console.log(`outer loop: ${i}`)

    for(j=1 ; j<=10 ;j++){
        // console.log(`innen loop: ${j} and innerloop: ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
        console.log(i + "*" + j + "=" + i+j )
    }
}

let myarray =["flash","superman","batman"]

for(index=0;index<myarray.length;index++){
   const element =myarray[index];
    console.log(element)
}