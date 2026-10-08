const courseDiv = document.getElementById("courseList");

//default values if something goes wrong
let firstName = "John";
let middleInitial = "T";
let lastName = "Doe";
let nickname = "";
let adjectiveAnimal = "Jealous Dog";
let briefIntro = "lorem ipsem";
let personalBackground = "lorem ipsem";
let professionalBackground = "lorem ipsem";
let academicBackground = "lorem ipsem";
let computerModel = "Xbox 360";
let operatingSystem = "TI basic";
let favoriteQuote = "doh!";
let quoteAuthor = "homer";

let courses = [];



function updateGenerator() {
    let coursesImTakingHtml = "<ol>";
    courses.forEach((course) => {
        let courseQuarters = "Im taking this course during ";
        course[1].forEach((quarter) => {
            courseQuarters += (quarter + ", ");
        });
        coursesImTakingHtml += `
        <li><strong>${course[0]}: </strong> ${course[3]}.<br>${courseQuarters} </li>
        `;
    });
    coursesImTakingHtml += "</ol>";
    // <ol>
    //     <li><strong>IT Javascript - Full set: </strong> I have always liked javascript and I think that
    //         this set of courses will help further my understand a ton by gaining proper education on it,
    //         I would like to be able to make websites and projects using typescript and reactJS by the
    //         end of the year.</li>
    //     <li><strong>Simulation and Game Development- Full set: </strong> I am taking this course because
    //         I have a massive interest in making games and 3d modeling, both of which are covered in the
    //         4 courses inside of this. I have already made some in the past but this will help further my
    //         understanding. </li>
    // </ol>
    document.getElementById("introduction-generator").innerHTML = `
    <h2>Introduction</h2>

        <div>
            <p>${briefIntro}</p>
            
        </div>
        <br>
        <hr>


        <h2> About Me</h2>
        <div>
            <ul>
                <li><strong>Personal Background:</strong> ${personalBackground}
                </li>
                <li><strong>Professional Background:</strong> ${professionalBackground}
                </li>
                <li><strong>Academic Background:</strong> ${academicBackground}
                </li>
                <li><strong>Primary Computer:</strong> My computer is a ${computerModel} that runs on ${operatingSystem}.
                </li>
                <li><strong>Courses im taking:</strong>
                ${coursesImTakingHtml}
                </li>
            </ul>
        </div>

        <h2> Quote </h2>
        <i>${favoriteQuote}</i>
        <p> - ${quoteAuthor}</p>
    `;
}

document.getElementById("add-course").addEventListener("click", (event) => {
    event.preventDefault();
    console.log("course added");
    const newLabel = document.createElement("div");
    newLabel.className = "courseAdded";
    newLabel.innerHTML = `

                <label for="coursename">Course Name: </label>
                <input type="text" name="coursename" id="coursename" placeholder="course name...">
                <br>    
                <br>
                <label for="course-q1">Quarter 1</label>
                <input type="checkbox" id="course-q1" name="quarters" value="q1">
                <br>
                <label for="course-q2">Quarter 2</label>
                <input type="checkbox" id="course-q2" name="quarters" value="q2">
                <br>
                <label for="course-q3">Quarter 3</label>
                <input type="checkbox" id="course-q3" name="quarters" value="q3">
                <br>
                <label for="course-q4">Quarter 4</label>
                <input type="checkbox" id="course-q4" name="quarters" value="q4">
                <br>
                <label for="course-finished">Course Finished:</label>
                <input type="checkbox" id="course-finished" name="course-finished" value="coursefinished">
                <br>
                <label for="courseexplanation">Why you took this course:<label>
                <textarea id="courseexplanation" name="courseexplanation" rows="5" cols="60"
                    placeholder="professional background">

                </textarea>
                <button type="button" class="remove-course">Remove Course</button>
  `;

    courseDiv.appendChild(newLabel);
});

courseDiv.addEventListener("click", (event) => {
    //event.preventDefault();
    if (event.target.classList.contains("remove-course")) {
        event.target.closest(".courseAdded").remove();
    }
});

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    courses = [];
    document.querySelectorAll(".courseAdded").forEach((course) => {
        //format is gonna be [courseName, [q1, q3]], false, "explanation"]
        let tempCourseName = course.querySelector('input[name="coursename"]').value;
        let tempQuarters = Array.from(course.querySelectorAll('input[name="quarters"]:checked')).map((checkbox) => checkbox.value);
        let tempFinished = course.querySelector('input[name="course-finished"]').checked;
        let tempExplanation = course.querySelector('textarea[name="courseexplanation"]').value;

        courses.push([tempCourseName, tempQuarters, tempFinished, tempExplanation]);
    });
    console.log(courses);

    firstName = document.getElementById("first_name").value;
    middleInitial = document.getElementById("middle_initial").value;
    lastName = document.getElementById("last_name").value;
    nickname = document.getElementById("nickname").value;
    adjectiveAnimal = document.getElementById("animal").value;
    briefIntro = document.getElementById("briefintro").value;
    personalBackground = document.getElementById("personalBackground").value;
    professionalBackground = document.getElementById("professionalBackground").value;
    academicBackground = document.getElementById("academicBackground").value;
    computerModel = document.getElementById("computermodel").value;
    operatingSystem = document.getElementById("operatingsystem").value;
    favoriteQuote = document.getElementById("quote").value;
    quoteAuthor = document.getElementById("quote-author").value;
    updateGenerator();
});