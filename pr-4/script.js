function MyMathPower(b, n) {
    let r = 1;
    for (let i = 0; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}

function MyMathPowerDefault1(b, n) {
    b = b || 2;
    n = n || 3;
    return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 2, n = 3) {
    return MyMathPower(b, n);
}

function TestAllFunctions() {
    MyMathPowerDefault1(3, 4);
    MyMathPowerDefault1(5);
    MyMathPowerDefault1(null, 4);
    MyMathPowerDefault1();
    MyMathPowerDefault2(3, 2);
    MyMathPowerDefault2(4);
    MyMathPowerDefault2(null, 2);
    MyMathPowerDefault2();
}
TestAllFunctions();