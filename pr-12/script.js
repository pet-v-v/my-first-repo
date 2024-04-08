function submitHandler(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const meal = document.querySelector('input[name="meal"]:checked').value;
    const dish = Array.from(document.querySelectorAll('input[name="dish"]:checked')).map((checkbox) => checkbox.value);
    const comment = document.getElementById("comment").value;

    if (!username || !email) {
        alert("Будь ласка, заповніть всі поля!");
        return false;
    }

    const resultText = `${username} (${email}) з'їв на ${meal} ${dish.join(", ")} та залишив такий коментар: "${comment}"`;
    document.getElementById("result").innerHTML = resultText;
    return true;
}