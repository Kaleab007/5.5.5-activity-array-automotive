import Vehicle from "./vehicleBaseClass.js"


//console logs 
console.log ('${mdx.model} ${mdx.make} ${mdx.scheduleCarService(mdx.milage)}')
console.log ('${Rav4.model} ${Rav4.make}${Rav4.scheduleCarService(Rav4.mileage)}')

//classes section\\ 
class Car extends Vehicle {
    constructor (model,make,year,color,mileage)
    { super (model,make,year,color,mileage);
this.passenger=0;
this.numberOfWheels= 4;
this.maxPassengers=7;
this.fuel=10;
this.maxSpeed=160
this.scheduleService = false;
    }

}
//seating chart\\
loadPassenger(num) 
    if (this.passenger <this.maxPassengers) {
        if((num + this.passenger) < this.maxPassengers) 
           this.passenger = num;
            return `can fit ${this.passenger} more! Extra room = ${Extraroom = true};

    }
      else {
            
            Extraroom == false;
            return 'can Not fit ${this.passenger} more! Extra room = ${Extraroom = false};
        }


scheduleCarService(mileage) {
    if (mileage > 25000) {
        return 'current mileage is ${mileage}. Maintenance required = ${this.scheduleService = true}';
    }
else { 
    return 'current mileage is ${mileage}. Maintenance required = ${this.scheduleService = false}';
}
    
let Rav4 = new Car("Toyota", "Rav4", "2021", "two-tone", "0");
console.log('${Rav4.model} ${Rav4.make} ${Rav4.loadPassenger (5)}');

let mdx = new Car ("Acura", "mdx", "2017", "grey", "89141")
console.log('${mdx.model} ${mdx.make} ${mdx.loadPassenger (7)}');

console.log ('Can ${Rav4.model} start?  ${Rav4.start()}
