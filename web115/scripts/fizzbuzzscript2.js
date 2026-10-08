//defaults

let num1 = 100;
let num2 = 50;



function multipleOf(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    }
    return false;
}


document.querySelector("form").addEventListener("input", function (event) {
    event.preventDefault();
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    if (multipleOf(num1, num2)) {
        document.getElementById("divisible-status").textContent = "True";
        document.getElementById("divisible-status").style.color = "green";
    } else {
        document.getElementById("divisible-status").textContent = "False";
        document.getElementById("divisible-status").style.color = "red";
    }

});

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    firstName = document.getElementById("first_name").value;
    middleInitial = document.getElementById("middle_initial").value;
    lastName = document.getElementById("last_name").value;
    numsToCount = document.getElementById("number_count").value;
    numberLabels = document.getElementById("number_labels").value;


});