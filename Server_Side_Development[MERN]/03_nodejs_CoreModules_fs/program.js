const fs = require('fs');
/*
//path,data,option
fs.writeFileSync('./notes.txt', 'welcome to filesystem of nodejs', 'utf-8');

//read from the file sync way 
let fileContent = fs.readFileSync('./notes.txt','utf-8');
console.log(fileContent);
*/

//async way reed the file
//fs.writefile(file,data,{[,option],callback)
let content = "Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable";
 
fs.writeFile('./data.txt',content,'utf-8',(err)=>{
if(err) throw error;
console.log('data written to a file');
 });

 //read file upper information show 
 // fs.readFile(path,[option],callback)-------callback content[err,data]below
 fs.readFile('./data.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data);
 })

 //copy the current program and write to new file "program.js"
fs.readFile('./app.js', 'utf-8', (err, data) => {
    if (err) throw err;

    fs.writeFile('./program.js', data, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data is written');
    });
});