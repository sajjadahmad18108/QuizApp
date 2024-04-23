let stdDatabase = JSON.parse(localStorage.getItem("studentDetails")) || [];


let addStudent = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    let studentName = document.querySelector("#StudentName").value;
    let rollNo = document.querySelector("#RollNo").value;
    let batch = document.querySelector("#Batch").value;
    let session = document.querySelector("#section").value;

    let studentDetails = {
        studentName,
        rollNo,
        batch,
        session,
        // score:score,
    };

    // Push the student details to the database
    stdDatabase.push(studentDetails);

    console.log("studentDetail", studentDetails);
    console.log("stddatabase" , stdDatabase)
    localStorage.setItem("studentDetail",JSON.stringify(stdDatabase))

    // Redirect to another page
    window.location.href = "./html/quiz.html"; //
};

let form = document.querySelector("#form");

form.addEventListener('submit', addStudent);
