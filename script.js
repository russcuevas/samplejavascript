// QUERIES!

var students = [];

function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var year = document.getElementById("year").value;
    var course = document.getElementById("course").value;

    var student = { name: name, age: age, address: address, year: year, course: course };
    students.push(student);

    updateStudentTable();
    resetInputs();
}

function updateStudentTable() {
var table = document.getElementById("studentTable");

while (table.rows.length > 1) {
    table.deleteRow(1);
}

for (var i = 0; i < students.length; i++) {
    (function (index) {
    var student = students[index];
    var row = table.insertRow();

    row.insertCell().textContent = student.name;
    row.insertCell().textContent = student.age;
    row.insertCell().textContent = student.address;
    row.insertCell().textContent = student.year;
    row.insertCell().textContent = student.course;

    var removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-user-minus"> Remove Students</i>';
    removeButton.classList.add("btn", "btn-danger");
    removeButton.onclick = function () {
        removeStudent(index);
    };
    row.insertCell().appendChild(removeButton);
    })(i);
}
}

function removeStudent(index) {
    students.splice(index, 1);
    updateStudentTable();
}

function resetInputs() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("year").value = "";
    document.getElementById("course").value = "";
}

function sortByName() {
    students.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    updateStudentTable();
}

function sortByAge() {
    students.sort(function (a, b) {
        return a.age - b.age;
    });
    updateStudentTable();
}

function sortByAddress() {
    students.sort(function (a, b) {
        return a.address.localeCompare(b.address);
    });
    updateStudentTable();
}

function sortByYear() {
    students.sort(function (a, b) {
        return a.year.localeCompare(b.year);
    });
    updateStudentTable();
}

function sortByCourse() {
    students.sort(function (a, b) {
        return a.course.localeCompare(b.course);
    });
    updateStudentTable();
}