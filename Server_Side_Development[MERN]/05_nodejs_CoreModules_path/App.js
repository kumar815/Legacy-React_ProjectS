//const { error } = require('console');
//const path = require('path');
//const fs = require('fs');
/*
    this is old(not perminate setting) path 
./Util/Emplyoess/Data/employee.json', 'utf-8'=.windows
.\Util\Emplyoess\Data\employee.json', 'utf-8'  =>linix

fs.readFile('./Util/Emplyoess/Data/employee.json', 'utf-8', (error, data) => {
    if (error) throw error;
    let employee = JSON.parse(data);
    console.log(employee);
})
*/

//perminate path setting 

const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, 'util', 'Employee', 'Data', 'employees.json');
fs.readFile(filePath, 'utf-8', (readError, data) => {
    if (readError) throw readError;
    let employeesData = JSON.parse(data);

    // Write the data to the customar folder inside
    fs.writeFile(path.join(__dirname, 'util', 'Customar', 'Customar.json'), JSON.stringify(employeesData, null, 2), 'utf-8', (writeError) => {
        if (writeError) throw writeError;
        console.log('Data written to the file in the Customar folder');
    });
});