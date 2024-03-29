(function () {
    var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }

    // Функція для визначення парних та непарних імен
    function selectNamesByLength(name) {
        let evenLengthNames = [];
        let oddLengthNames = [];

        for (let i = 0; i < name.length; i++) {
            if (names[i].length % 2 === 0) {
                evenLengthNames.push(name[i]);
            } else {
                oddLengthNames.push(name[i]);
            }
        }

        return { evenLengthNames: evenLengthNames, oddLengthNames: oddLengthNames };
    }
    let selectedNamesByLength = selectNamesByLength(names);
    console.log("Імена з парною кількістю літер:", selectedNamesByLength.evenLengthNames);
    console.log("Імена з непарною кількістю літер:", selectedNamesByLength.oddLengthNames);
})();