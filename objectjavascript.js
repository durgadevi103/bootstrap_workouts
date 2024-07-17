console.log("creating a object with 3 types");

var obj1= {
    Name: "selva",
    Age: 23
}
console.log("data types:",(obj1));
console.log("before adding place & area:",typeof(obj1));
obj1.place = "madurai";
obj1.area = "thallakulam";
console.log("after adding place & area:",obj1);
console.log("obj1 place value:",obj1["place"]);


// second type

var obj = new Object();
obj.Name = "siva";
obj.Age = 24;
obj.Gender = "male";
console.log("before delete", obj);
delete obj["Gender"];
console.log("after delete", obj);

// third type object creation using constructor
// the constructor method is a Special method of a class of creating and initializing an object instance of that class


var obj2 = new cons1();
function cons1() {
    this.name = "dhoni",
    this.age = 40,
    this.role = "cricketer"

}
cons1();
console.log("obj2: ",obj2);

console.log(Object.keys(obj2));
console.log(Object.values(obj2));

let user = {
    name: "suzuki",
    color: "black",
    mileage: 60,
    display: function(){
        alert("user name is"+this.mileage)
    }
    

}
console.log(user)
// spread operator
user = {...user, speed: 1000}
console.log(user);



const use = new Object()
use.firstname = "durga"
use.lastname = "devi"
console.log(use)
// dot operator
console.log(use.lastname + " "+ use.firstname)
console.log(use["firstname"] +" "+ use["lastname"])



// javascript object notation
const b = {
    firstname :"durga",
    lastname :"devi",
    marks:{
        sslc:800,
        hsc:700,
        degree:9.0
    },
    fullname: function () {
        return this.firstname + " " + this.lastname

    }

    
}

console.log(b.lastname)
console.log(b.marks.degree)
console.log(b.fullname())













