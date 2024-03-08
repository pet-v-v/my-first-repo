let car1 = new Object();
car1.color = "white";
car1.maxSpeed = 100;
car1.driver = new Object();
car1.driver.name = "Viktoria Petryshyn";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

let car2 = {
    color: "black",
    maxSpeed: 120,
    driver: {
        name: "Viktoria Petryshyn",
        category: "B",
        "personal limitations": null,
    },
    tuning: false,
    "number of accidents": 2,
}

car1.drive = function () {
    console.log("I am not driving at night");
}
car1.drive();

car2.drive = function () {
    console.log("I can drive anytime");
}
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        }
        else {
            console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience.`);
        }
    };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = new Object();
    this.driver.name = name;
    this.driver.nightDriving = nightDriving;
    this.driver.experience = experience;
};

let Truck1 = new Truck("red", 200, 90, "Ford", "Cargo");
let Truck2 = new Truck("blue", 300, 80, "Mercedes-Benz", "Actos");

Truck1.trip();
Truck2.trip();

Truck1.AssignDriver("Viktoria Petryshyn", true, 5);
Truck2.AssignDriver("Petro Kit", false, 1);

console.log(Truck1);
console.log(Truck2);

Truck1.trip();
Truck2.trip();
