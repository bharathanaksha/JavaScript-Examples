/**
 * Created with JetBrains WebStorm.
 * User: bharathkumarr
 * Date: 4/30/13
 * Time: 8:43 AM
 * To change this template use File | Settings | File Templates.
 */


function Vehicle(hasEngine,hasWheels){
    this.hasEngine = hasEngine || false;
    this.hasWheels = hasWheels || false;
}

Vehicle.prototype.display = function(){
    console.log("hasEngine = "+this.hasEngine+" hasWheels = "+this.hasWheels);
}


function Car(make,model){
    this.make = make;
    this.model = model;
}

//*********Here is where the inheritance occurs**********.
Car.prototype = new Vehicle(true,true);

//*******Otherwise the car instance will have the Vehicle's constructor.
Car.prototype.constructor = Car;

//Extend capabilities of Vehicle using prototype.
Vehicle.prototype.hasSteering = true;

Car.prototype.display = function(){
    //calling the super method display().
    Vehicle.prototype.display.call(this);
    console.log("hasEngine = "+this.hasEngine+" hasWheels = "+this.hasWheels+" make = "+this.make +" model = "+this.model+" hasSteering = "+this.hasSteering)
}

var car = new Car("Audi","007");
console.log(car);
car.display();