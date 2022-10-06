let feet = document.getElementById("feet");
let cm = document.getElementById("cm");
let result = document.getElementById("result");
cm.addEventListener('click', function (submit) {
    submit.preventDefault();
    let input = feet.value;
    if (isNaN(input)) {
        result.textContent = "Please Enter a valid number";
    } else if (input <= 0) {
        result.textContent = " please enter a value > 0"
    } else {
        let answer = input * 30.48;
        result.textContent = (answer + " Cm");
        feet.value = '';
    }
});