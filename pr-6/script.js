class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log(`Квадрат — чотирикутник, у якого всі сторони рівні і всі кути прямі.
        Властивості:
        У квадрат завжди можна вписати коло;
        Навколо квадрата завжди можна описати коло;
        Протилежні сторони паралельні;
        Точка перетину діагоналей є центром симетрії квадрата;
        Діагоналі рівні між собою;
        Діагоналі є бісектрисами кутів;
        Діагоналі перетинаються під прямим кутом.`);
    }

    length() {
        let result = this.a * 4;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a ** 2;
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Square):`);
        console.log(`- Довжина всіх 4 сторін: ${this.a}`);
        console.log(`- Величина всіх 4 кутів: 90 градусів`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log(`Прямокутник — це чотирикутник, усі кути якого прямі.
        Властивості:
        Діагоналі прямокутника рівні;
        Діагоналі прямокутника перетинаються і точкою перетину діляться навпіл;
        Діагоналі прямокутника ділять його на два рівні трикутники;
        Висоти прямокутника є одночасно і його сторонами;
        Навколо будь-якого прямокутника можна описати коло, причому діагональ прямокутника дорівнює діаметру даного кола;
        Квадрат діагоналі прямокутника дорівнює сумі квадратів двох його не протилежних сторін.
        `)
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a * this.b;
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Rectangle):`);
        console.log(`- Довжина перших двох сторін: ${this.a}, і других двох: ${this.b}`);
        console.log(`- Величина всіх 4 кутів: 90 градусів`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    get getA() {
        return this.a;
    }

    get getAlpha() {
        return this.alpha;
    }

    get getBeta() {
        return this.beta;
    }

    set setA(a) {
        this.a = a;
    }

    set setAlpha(alpha) {
        this.alpha = alpha;
    }

    set setBeta(beta) {
        this.beta = beta;
    }

    static help() {
        console.log(`Ромб — це паралелограм, у якого всі сторони рівні.
        Властивості:
        Протилежні кути ромба рівні;
        Діагоналі ромба перетинаються під прямим кутом, точка перетину є серединою кожної діагоналі;
        Діагоналі ромба є бісектрисами кутів, з яких вони проведені;
        В будь-який ромб можна вписати коло;
        Центром кола, вписаного в ромб, є точка перетину його діагоналей;
        Протилежні сторони паралельні;
        Прилеглі кути є суміжними;
        Дві діагоналі поділяють одна одну навпіл.`);
    }

    length() {
        let result = this.a * 4;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = (this.a ** 2) * Math.sin(this.alpha);
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Rhombus):`);
        console.log(`- Довжина всіх 4 сторін: ${this.a}`);
        console.log(`- Величина тупих кутів: ${this.alpha}, гострих: ${this.beta}`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(`Паралелограм — чотирикутник, протилежні сторони якого попарно паралельні, тобто лежать на паралельних прямих.
        Властивості:
        Протилежні сторони паралелограма рівні;
        Протилежні кути паралелограма рівні;
        Діагоналі паралелограма перетинаються та точкою перетину діляться навпіл;
        Одна пара протилежних сторін є паралельними і мають однакову довжину;
        Сума кутів, прилеглих до однієї сторони, дорівнює 180.`);
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a * this.b * Math.sin(this.alpha);
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Parallelogram):`);
        console.log(`- Довжина перших двох сторін: ${this.a}, і других двох: ${this.b}`);
        console.log(`- Величина тупих кутів: ${this.alpha}, гострих: ${this.beta}`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square = new Square(3);
let rectangle = new Rectangle(3, 5);
let rhombus = new Rhombus(6, 150, 30);
let parallelogram = new Parallelogram(7, 8, 140, 40);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();