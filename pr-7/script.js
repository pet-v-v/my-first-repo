function Triangular(a = 3, b = 4, c = 5) {
    return {
        sideA: a,
        sideB: b,
        sideC: c,
    };
}

console.log("Перший трикутник:", Triangular());
console.log("Другий трикутник:", Triangular(5, 8, 10));
console.log("Третій трикутник:", Triangular(4, 6, 7));

function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}

let multiplyBy2Pi = PiMultiplier(2);
let multiplyBy2_3Pi = PiMultiplier(2 / 3);
let dividePiBy2 = PiMultiplier(1 / 2);

console.log("π * 2 =", multiplyBy2Pi());
console.log("π * 2/3 =", multiplyBy2_3Pi());
console.log("π / 2 =", dividePiBy2());

function Painter(color) {
    return function (obj) {
        if (obj && obj.type) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log(`Color: ${color}, No 'type' property occurred!`);
        }
    };
}

let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let obj1 = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
}

let obj2 = {
    type: "Truck",
    avgSpeed: 90,
    loadCapacity: 2400,
}

let obj3 = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
}

PaintBlue(obj1);
PaintRed(obj2);
PaintYellow(obj3);