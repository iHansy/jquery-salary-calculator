// console.log('js source working'); // testing js source

// $(document).ready(jqueryTest); // testing jquery source
// function jqueryTest() {
//     console.log('jquery source working');
// }

$(document).ready(salaryCalc) // linking function to jquery

let employeesArray = [];

function salaryCalc() { // function start
    $('#submitButton').on('click', getInfo); // click submit button, run getInfo function






}

function getInfo() { // start info
    console.log('in getInfo function');
    let employeeObject = { // creating object to store each employee in
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()), // storing input values to object keys
        title: $('#titleInput').val(),
        salary: Number($('#salaryInput').val()), // converting value to number from string
    }

    employeesArray.push(employeeObject); // pushing employeeObject to array
    // console.log(employeesArray); // confirm object goes in array
    appendToDom(); // adding each employee to DOM
    


} // end getInfo function

function appendToDom() {
        // $('#tbody').append(`<tr>${Object.values(employeeObject).map((v)=>`<td>${v}</td>`).join`` }</tr>`); // Ronald's example, don't understand fully
        $('#tbody').empty();

    for (let employee of employeesArray) { //start for loop through employeesArray

        $('#tbody').append( // appending a row and cell info for each row, also adding button in last cell of row
            `<tr>
                <td>${employee.firstName}
                <td>${employee.lastName}
                <td>${employee.id}
                <td>${employee.title}
                <td>${employee.salary}
                <td>
                <button class="deleteButton" id="deleteButton">delete</button> 
                </td>
            </tr>`
        )
    }



}


