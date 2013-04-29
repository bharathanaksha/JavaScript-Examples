/**
 * Created with JetBrains WebStorm.
 * User: bharathkumarr
 * Date: 4/29/13
 * Time: 9:10 AM
 * To change this template use File | Settings | File Templates.
 */


function Employee(name){
    //PRIVATE******************************************
    // PRIVATE VARIABLES AND FUNCTIONS
    // ONLY PRIVELEGED METHODS MAY VIEW/EDIT/INVOKE
     var calculatedId = this.constructor.population++;
     var age = Math.random()+25;

     //private methods.
     function calculateAge(){
          return Math.round(age);
     }

    //PUBLIC*******************************************
    // PUBLIC PROPERTIES -- ANYONE MAY READ/WRITE
     this.name = name;
     this.id = calculatedId;

    //public methods.
     this.getName = function(){
         return this.name;
     }

     this.getId = function(){
         return this.id;
     }

     this.getAge = function(){
         return calculateAge();
     }
}

// PUBLIC METHODS -- ANYONE MAY READ/WRITE
Employee.prototype.beCool = function(){ console.log(this.getName()+" has Cool TShirt") }
Employee.prototype.showLegs = function(){ console.log(this.getName()+" has "+this.legs+" legs") }

// PROTOTYOPE PROERTIES -- ANYONE MAY READ/WRITE (but may be overridden)
Employee.prototype.legs=2;

// STATIC PROPERTIES -- ANYONE MAY READ/WRITE
Employee.population = 0;



//create an object of the class Employee here
var emp = new Employee("Bharath");
console.log("Name : "+emp.getName());
console.log("ID: "+emp.getId());
emp.beCool();
emp.showLegs();
console.log(emp.getAge());

var emp2 = new Employee("Bharath123");
console.log("Name : "+emp2.getName());
console.log("ID: "+emp2.getId());
