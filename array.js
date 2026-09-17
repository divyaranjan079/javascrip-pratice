// let marks =[92,94,85,54,65]
// console.log(marks.length)
// console.log(typeof marks)
// console.log(marks[2])
// console.log(marks[5])
// console.log(marks[0]=89)
// console.log(marks)
// // marks.push(79)
// // marks.pop()
// // console.log(marks)
// console.log(marks.includes(81))

// const marvel = ["ironman","thor","antman"]
// const dc = ["spiderman","batman","superman"]
// const myheros = marvel.concat(dc)
// console.log(myheros)
// console.log(Array.isArray("DIVYA"))
// console.log(Array.from("DIVYA"))

let marks = [85,97,44,37,76,60]

let sum = 0

for(let val of marks){
    sum = sum + val
}

console.log(sum/marks.length);