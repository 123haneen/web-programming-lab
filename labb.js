document.writeln("This is an external javascript file.");
console.log("hello")


var grade=80;
if(grade>= 90){
    document.writeln("A");
}


function greet(name){
    console.log('hello , $name!');
}
greet("haneen");

var arr= [1,2,3,"string","name"]
console.log(arr[3])
arr[4] = 300
console.log(arr)

console.log(arr.length)
arr.push(450,50)
console.log(arr)

arr.splice(3,0, "hello") 
console.log(arr)

arr.shift()
console.log(arr)


arr.unshift(20)
console.log(arr)

var arr2= [20,30,40,30,60,30]
console.log(arr2.indexOf(40))
console.log(arr2.lastIndexOf(30))

var miniArr= arr2.slice(2,5)
console.log(miniArr)

arr2.reverse()
console.log(arr2)

var newArr = arr.concat(arr2)   //to add morethan one array together
console.log(newArr)

var arr3= ["welcome", "ali" ,"and ", "sara"]
var str = arr3.join(" ") // to join all the arr elements together
console.log(str)


for(var i = 0; i <arr2.length; i++){
    console.log(arr2[i])

}

arr2.forEach(function(element){
    console.log(element)
})

for(var num of arr2){
    console.log(num)
}

var arr4 = ["banana", "apple" ,"fine"]
arr4.sort()
console.log(arr4)


var arr7 = [10,3,5]
arr7.sort((a,b)=> b-a) //desc  a-b asc
console.log(arr7)


var obj1 = document.getElementById("fisrt")
console.log(obj1)





var person ={ 
    name:"haneen",
    major:" Data",
    hello:function(){
        console.log("welcome" + " "+this.name)
    }
}
person.hello()

console.log(person.major)
person.name ="haneeenn"
console.log(person)
person.age =19
console.log(person)
delete person.major
console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

var p2={}
Object.assign(p2,person,{major:"data"}) // to put the previous data in this object
console.log(p2)

for(var k in p2){
    console.log(k + " "+p2[k])
}

function Person(name,major){
    this.name = name
    this.major = major
}

var p3 = new Person("Haneenn","CS")
var p4= new Person("Habiba","IT")


function Animal(name){
    this.name = name
}

Animal.prototype.sound = function(){
    console.log(this.name + " sound")
}
let a = new Animal("elephant")
a.sound()

function Cat(name){
    this.name = name
}  

Cat.prototype = Object.create(Animal.prototype)
let c = new Cat("cat")
c.sound()


class Animalll{
    constructor(name){
        this.name = name
    }
    sound(){
        console.log(this.name + " sound")
    }
}

// var a2= new Animalll("dog")
// a2.sound()// to call the class

class Cattt extends Animalll{
    constructor(name,breed){
        super(name)
        this.breed = breed
        //this.name = name
    }
    sound(){
        console.log(this.name+" meow")
    }
}

let a2 = new Animalll("tiger")
a2.sound()

var c2 = new Cattt("rekoo","breed")
c2.sound()

let strii = JSON.stringify(p2)
console.log(strii)

let obj =JSON.parse(strii)
console.log(obj)