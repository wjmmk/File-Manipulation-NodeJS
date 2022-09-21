const fs = require('fs');
const path = require('path');

const PATH_FILE = path.join(__dirname, '../static_files/Address.csv')

const mainFunction = () => {
    fs.readFile(PATH_FILE, 'utf8', (err, data) => {
        if(!err){
            console.log(data)
        }
    })
}

mainFunction();