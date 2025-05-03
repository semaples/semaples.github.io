// Fetch data from the PostgreSQL database
function fetchGradeData() {
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }

            let data = JSON.parse(xhr.responseText);
            populateGradebook(data);
        }
    };

    xhr.open("GET", apiRoute, true);
    xhr.send();
}

// Populate the table with grade data
function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);

    let tableElm = document.getElementById("gradebook");
    if (!tableElm) {
        console.error("Table element with id 'gradebook' not found.");
        return;
    }

    data.forEach(function (assignment) {
        let row = document.createElement('tr'); // each student = 1 row

        let nameCell = document.createElement('td');
        nameCell.appendChild(
            document.createTextNode(`${assignment.last_name}, ${assignment.first_name}`)
        );

        let gradeCell = document.createElement('td');
        gradeCell.appendChild(
            document.createTextNode(assignment.total_grade)
        );

        row.appendChild(nameCell);
        row.appendChild(gradeCell);
        tableElm.appendChild(row);
    });
}

// Start everything when the page loads
window.onload = function () {
    fetchGradeData();
};
