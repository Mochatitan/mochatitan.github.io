let firstName = "john";
let middleInitial = "t";
let lastName = "doe";

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    firstName = document.getElementById("first_name").value;
    middleInitial = document.getElementById("middle_initial").value;
    lastName = document.getElementById("last_name").value;

    if (firstName === "") {
        firstName = prompt("You didnt enter a firstname, put it here:");
        if (firstName === "") {
            firstName = prompt("see now your just screwing around, i need a first name");
            if (firstName === "") {
                firstName = prompt("oh go to hell");
                if (firstName === "") {
                    firstName = prompt("Last chance, if you dont give me a name im making it garfunkle.");
                    if (firstName === "") {
                        firstName = "garfunkle";

                    }
                }
            }
        }
    }

    if (lastName === "") {
        alert("you didnt give me a last name, so you are part of my family now");
        lastName = "Rossi";
    }

    let fullName = firstName + " " + middleInitial + ". " + lastName;
    if (middleInitial === "") {
        fullName = firstName + " " + lastName;
    }
    console.log(fullName);

    document.getElementById("greeting").textContent = "Welcome to AnyTutor, " + fullName + "!";
    let loopCount = prompt("how high do you want to count, " + firstName);
    if (!isNaN(loopCount)) {
        outputLoop(loopCount);
    } else {
        alert("you didnt give me a real number, im giving you 20 take it or leave it");
        outputLoop(20);
    }

});


function outputLoop(iterations) {
    const list = document.createElement("ul");

    let number = 1;
    const themeWords = ["tutor", "math", "help", "awesome", "sum", "multiplication", "cheap", "virtual", "budget"];
    while (number <= iterations) {
        let randomElementOne = themeWords[Math.floor(Math.random() * themeWords.length)];
        let randomElementTwo = themeWords[Math.floor(Math.random() * themeWords.length)];
        let item = document.createElement("li");
        item.textContent = (number + ") " + randomElementOne + " " + randomElementTwo + " - the number is " + evenOrOdd(number));
        list.append(item);
        number++;
    }

    document.getElementById("outputLoop").append(list);
}

function evenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}