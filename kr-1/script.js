// Варіант 1
function TriangleArea(a = 5, h = 4){
    let result = 0.5 * a * h;
    console.log("Triangle area: " + result)
    return result;
}
TriangleArea(3, 6);
TriangleArea();

function Jet(color, avgSpeed, maxAltitude, brand, pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}

Jet.prototype.AssignPilot = function(name, yearsOfExperience, HasChildren){
    this.pilot = new Object();
    this.pilot.name = name;
    this.pilot.yearsOfExperience = yearsOfExperience;
    this.pilot.HasChildren = HasChildren;
}

let Jet1 = new Jet("blue", 70, 23, "Dassault", "Ivano-Frankivsk");
Jet1.AssignPilot("Viktoria", 12, false);

console.log(Jet1);

class EquilateralTriangle{
    constructor(equalSide){
        this.equalSide = equalSide;
    }

    get getEqualSide() {
        return this.equalSide;
    }
}

class IsoscelesTriangle extends EquilateralTriangle{
    constructor(equalSide, base){
        super(equalSide);
        this.base = base;
    }

    static area(equalSide, base) {
        return base/4 * Math.sqrt(4*equalSide**2 - base**2);
    }
}

let equilTrian = new EquilateralTriangle(6);
let isoscelTrian = new IsoscelesTriangle(5, 7);
let isoscelTrianArea = IsoscelesTriangle.area(4, 6);

console.log(equilTrian);
console.log(isoscelTrian);
console.log("Площа: " + isoscelTrianArea);