// console.log("hello");
// alert("my name is divya")

// console.log shows print the result

// it shows the property and object value

// console.dir(document.body.childNodes[1]);

// childNodes means its shows the child elment what parameter we pass inside the childnodes

//  it change the text value what parameter we pass inside the childnode
// document.body.childNodes[1].innerText = "Divya"; 

// let heading = document.getElementById("heading")
// console.dir(heading);

// it returns html collection which is similar to an Array.in this log and dir give same result but dir gives all the properties

// let heading1 = document.getElementsByClassName("head")
// console.dir(heading1);

// if i want 1st element
let firstele = document.querySelector("p");
console.dir(firstele);

// if i want all element then we use querySelectorall
let allelement = document.querySelectorAll("p");
console.dir(allelement);



