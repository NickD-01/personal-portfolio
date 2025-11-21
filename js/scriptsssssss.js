

console.log("I amlearning js")
//
city = "city1"
city = "city2"
console.log(city)
const gravity = 9.8
//
const listOfStuff = ["hello", 1, true, ["a", "b"], {name: "Gert", age: "44"},]

listOfStuff.forEach(data_type => {
    console.log(typeof(data_type))
});

console.log(10+5, 20-7, 4*6, 30/3)

joined = "JavaScript " + "Rocks!"
console.log(joined)

const seyHello =(sentance) => {
    console.log(sentance)
}
seyHello("Hello World")

square = (num) => {
    console.log(num**2)
}
square(4)

person = {name:"JHON", age: 33}
if (person.age >= 18){
    console.log("Positive")}
else{console.log("Negative")}

person.age >= 18 ? console.log("Positive") : console.log("Negative");

const whatNumber = (number) =>{
    if (number > 0){console.log("Positive")}
    else if(number == 0){console.log("Zero")}
    else console.log("Negative")
}
whatNumber(-1)
whatNumber(8)
whatNumber(0)

for (let i = 0; i < 11; i++){
    console.log(i)
}
let i = 5
while (i > 0){
    console.log(i)
    i -= 1
}


fruits = ["banana", "apple", "pear"]
fruits.push("grape")
fruits.shift()
console.log(fruits)
console.log(fruits.length)

const car = () => ({
    brand: "BMW",
    model: "XC",
    year: "2020"
});

console.log(car().brand);




