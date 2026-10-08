//defaults

let firstName = "john";
let middleInitial = "t";
let lastName = "doe";
let numsToCount = 140;
let numberLabels = "[Math!],[3,Science!],[5,Technology!]";
let labels = [];

let mainWord = "Math!";

const labelDiv = document.getElementById("labelList");

function convertFormToArray() {
    const labelsArray = [];
    const labelRows = document.querySelectorAll(".labelAdded");
    labelRows.forEach((row) => {
        const inputs = row.querySelectorAll("input");
        labelsArray.push([inputs[0].value, inputs[1].value]);
    });
    console.log(labelsArray);
    labels = labelsArray;
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

document.getElementById("add-label").addEventListener("click", () => {
    console.log("ement added");
    const newLabel = document.createElement("div");
    newLabel.className = "labelAdded";
    newLabel.innerHTML = `
                    <input type="number" id="label1" placeholder="num to label">
                    <input type="text" id="label1" placeholder="label for num's multiples">
                    <button type="button" class="remove-label">Remove Label</button>
  `;

    labelDiv.appendChild(newLabel);
});

labelDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-label")) {
        event.target.closest(".labelAdded").remove();
    }
});
/**
 * 
                    <input type="number" id="label1" placeholder="num to label">
                    <input type="number" id="label1" placeholder="label for num's multiples">
                    <button type="button" id="remove-label">Remove Label</button>
 */




document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    firstName = document.getElementById("first_name").value;
    middleInitial = document.getElementById("middle_initial").value;
    lastName = document.getElementById("last_name").value;
    numsToCount = document.getElementById("number_count").value;
    mainWord = document.getElementById("default_label").value;

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