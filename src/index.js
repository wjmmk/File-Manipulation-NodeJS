const fs = require('fs');
const path = require('path');
const { on } = require('stream');

const PATH_FILE = path.join(__dirname, '../static_files/Person.csv')

const mainFunction = () => {
    
    fs.createReadStream(PATH_FILE, "utf-8")
    .on("data", (data) => {
        console.log(Buffer.byteLength(data));
    })

}

mainFunction();