document.addEventListener("DOMContentLoaded", function () {
    let op1Input = document.getElementById("op1");
    let op2Input = document.getElementById("op2");
    let resultHeading = document.getElementById("res");
    let logInfoDiv = document.getElementById("log-info");
    let sinInfoDiv = document.getElementById("sin-info");
    let tanInfoDiv = document.getElementById("tan-info");

    function clearInfoDivs() {
        logInfoDiv.innerHTML = '';
        sinInfoDiv.innerHTML = '';
        tanInfoDiv.innerHTML = '';
    }

    function fetchData(url, callback) {
        fetch(url)
            .then(response => response.json())
            .then(data => callback(data))
            .catch(error => console.error("Error fetching data:", error));
    }

    function handleButtonClick(event, operation) {
        event.preventDefault();
        clearInfoDivs();

        let operand1 = parseFloat(op1Input.value);
        let operand2 = parseFloat(op2Input.value);
        let result;

        switch (operation) {
            case 'add':
                result = operand1 + operand2;
                resultHeading.textContent = "Result: " + result;
                break;
            case 'sub':
                result = operand1 - operand2;
                resultHeading.textContent = "Result: " + result;
                break;
            case 'mul':
                result = operand1 * operand2;
                resultHeading.textContent = "Result: " + result;
                break;
            case 'div':
                if (operand2 === 0) {
                    resultHeading.textContent = "Result: Cannot divide by zero";
                    return;
                } else {
                    result = operand1 / operand2;
                    resultHeading.textContent = "Result: " + result;
                }
                break;
            case 'log':
                if (operand1 <= 0) {
                    resultHeading.textContent = "Result: Operand 1 is less or equal to 0";
                    return;
                } else {
                    result = Math.log(operand1);
                    fetchData('json/log.json', function (data) {
                        resultHeading.textContent = "Result: " + result;
                        logInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                    });
                }
                break;
            case 'sin':
                operand1 = operand1 * Math.PI / 180;
                result = Math.sin(operand1);
                fetchData('json/sin.json', function (data) {
                    resultHeading.textContent = "Result: " + result;
                    sinInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;
            case 'tan':
                operand1 = operand1 * Math.PI / 180;
                result = Math.tan(operand1);
                fetchData('json/tan.json', function (data) {
                    resultHeading.textContent = "Result: " + result;
                    tanInfoDiv.innerHTML = `<strong>${data.name}</strong><br><img src="${data.image_name}" alt="${data.name}"><br> ${data.description}`;
                });
                break;
        }
    }

    document.getElementById("add-button").addEventListener("click", (e) => handleButtonClick(e, 'add'));
    document.getElementById("sub-button").addEventListener("click", (e) => handleButtonClick(e, 'sub'));
    document.getElementById("mul-button").addEventListener("click", (e) => handleButtonClick(e, 'mul'));
    document.getElementById("div-button").addEventListener("click", (e) => handleButtonClick(e, 'div'));
    document.getElementById("log-button").addEventListener("click", (e) => handleButtonClick(e, 'log'));
    document.getElementById("sin-button").addEventListener("click", (e) => handleButtonClick(e, 'sin'));
    document.getElementById("tan-button").addEventListener("click", (e) => handleButtonClick(e, 'tan'));
});

