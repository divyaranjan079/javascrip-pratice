const user = ("")

if (user){
    console.log("get the value")
}else{
    console.log("dont have value")
}

const user2 = []

if (user2){
    console.log("get the value")
}else{
    console.log("dont have value")
}

// falsy value

// false ,bigint,0,-0,null,"",undefined

// truth value

// "0","false"," ",{},[],function(){}

const objectvalue = {}

if(Object.keys(objectvalue).length===0){
    console.log("objecct is empty");
}