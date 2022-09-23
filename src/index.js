const fs = require('fs');
const path = require('path');

const PATH_FILE = path.join(__dirname, '../static_files/Address.csv')

const mainFunction = () => {
    let count = 0;
    fs.readFile(PATH_FILE, 'utf8', (err, data) => {
        if(!err){
            const arrayLines = data.split('\n');
            for( const registro in arrayLines ) {
                const result = arrayLines[registro];
                //console.log(result);
               if(result.includes('La Paz')) count += 1;
            }
            console.log(`Esta es la cantidad de veces que aparece la palabra: Torrance `, count);
        }
    })
}

mainFunction();