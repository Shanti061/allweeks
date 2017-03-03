// this is a json practice

//var car = {
//    
//    "model" : "Audi",
//    "price" : 2500,
//    "engine" : "Petrol"
//    
//}

//json notation

/*console.log(car.model);

var f1drivers = ["Lewis", "Kimi", "Fernando"];
console.log(f1drivers[1]);*/


//JavaScript Oject Oriented Programming


/*function Fruit(name, color, shape){
    
    //(this)
    
    this.name = name;
    this.color = color;
    this.shape = shape;
    
    this.describe = function(){
         
        return " A " + this.name + " is the color " + this.color + " and the shape is " + this.shape;
    };
}


// Instance of the class Fruit

var apple = new Fruit("apple", "red", "round" );
var melon = new Fruit("melon", "green", "round" );

//goes back to the describe function
console.log(melon.describe());*/

//Person is the constructor function or the class of js
var Person = function(firstName, lastName){
    
    this.firstName = firstName;
    this.lastName = lastName;
    /*this.getName = function () {
        
        return this.firstName + " " + this.lastName;
        
    };*/
}

// prototype is the blueprint of the constructor function/function or the original class. We don't need to call the main function to add value in the function.
Person.prototype.getName = function(){
    
    return this.firstName + " " + this.lastName;
};

var manuel = new Person("Manuel", "Cubuca");
var orion = new Person("Orion","Cura");

//console.log(manuel.getName());

//console.log(Person.prototype);


//Let's gave a look at inheritance with OOP

var Employee = function(firstName, lastName, employeeId){
    //calling the Person class and adding employeeId attribute.
    
    
    Person.call(this, firstName, lastName);
    this.employeeId = employeeId;
    
}


//by assigning a Employee prototype to the Person prototype we are overriding the Employee Constructor with the Person Constructor


//grabbing the Person prototype and assigning to employee prototype

Employee.prototype = Object.create(Person.prototype);

//what's the constructor all about them

Employee.prototype.constructor = Employee;

var jay = new Employee("Jay","Garcia", 123);
 console.log(jay.employeeId);































/*
var f1 ={
    
    "data" :[
        {
            "car": "Mercedes",
            "driver": "Lewis",
            "wins": 2
            
            
            
        },
        
        {
            
            "circuit": "Monaco", 
            "pointSystem": [
                {
                    "firstplace ": 25,
                    "secondplace": 18,
                    "thirdplace":15
                }
                
            ],
            
            "teams": 11
            
        }
        
       ]
    
}


console.log(f1.data[1].pointSystem[0].thirdplace);

*/
