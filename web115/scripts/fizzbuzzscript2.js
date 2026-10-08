//defaults

let firstName = "john";
let middleInitial = "t";
let lastName = "doe";
let numsToCount = 140;
let numberLabels = "[Math!],[3,Science!],[5,Technology!]";
let labels = [];

let mainWord = "Math!";

function convertFormToArray() {
    let getMainword = numberLabels.match(/^\[([^\]]+)\],/);
    if (getMainword === null) {
        if (numberLabels.match(/^\[([^\]]+)\]/) === null) {
            console.log("invalid input");
            return false;
        } else {
            getMainword = numberLabels.match(/^\[([^\]]+)\]/);
            mainWord = getMainword[1];
            return true;
        }
    }
    mainWord = getMainword[1];
    let remainingLabels = numberLabels.slice(getMainword[0].length);

    console.log("mainword: " + mainWord);
    console.log("remaining labels: " + remainingLabels);

    labels = [...remainingLabels.matchAll(/\[(\d+),([^\]]+)\]/g)]
        .map((match) => [Number(match[1]), match[2]]);

    console.log(labels);

    return true;
}

const themeWords = ["tutor", "math", "help", "awesome", "sum", "multiplication", "cheap", "virtual", "budget"];


function multipleOf(num1, num2) {
    if (num1 % num2 === 0) {
        return true;
    }
    return false;
}

function outputLoop(iterations) {

    const list = document.createElement("ul");
    document.getElementById("outputLoop").innerHTML = '';
    let number = 1;

    if (iterations >= 3000) {
        let item = document.createElement("li");
        item.textContent = "Number count too high!";
        list.append(item);
        document.getElementById("outputLoop").append(list);
        return;
    }


    if (convertFormToArray() === false) {
        let item = document.createElement("li");
        item.textContent = "Syntax error on filter!";
        list.append(item);
        document.getElementById("outputLoop").append(list);
        return;
    }

    while (number <= iterations) {
        let item = document.createElement("li");

        let word = "";

        labels.forEach(([numberLabeled, label]) => {
            if (multipleOf(number, numberLabeled)) {
                word += (label + " ");
            }
        });
        if (word === "") {
            word = mainWord;
        }
        item.textContent = number + ") " + word;
        list.append(item);
        number++;
    }

    document.getElementById("outputLoop").append(list);
}



document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    firstName = document.getElementById("first_name").value;
    middleInitial = document.getElementById("middle_initial").value;
    lastName = document.getElementById("last_name").value;
    numsToCount = document.getElementById("number_count").value;
    numberLabels = document.getElementById("number_labels").value;

    if (numsToCount)


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
    outputLoop(numsToCount);

});