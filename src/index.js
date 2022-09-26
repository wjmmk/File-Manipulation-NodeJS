const queue = require('bull');

const fs = require('fs');
const eStream = require('event-stream');
const path = require('path');

const lineQueue = new queue('Line_Queue', 'redis://redis:6380');

    lineQueue.process( (job, done) => {
        setTimeout(() => {
            const { data } = job;
            console.log(data);
            done();
        }, 2000)
    })

const PATH_FILE = path.join(__dirname, '../static_files/Customer.csv')

const mainFunction = () => {
    
    fs.createReadStream(PATH_FILE, "utf-8")
    .pipe(eStream.split()) // Separa la data del archivo x salto de Linea
    .pipe(eStream.map(function (line, cb) {
        //do something with the line 
        cb(null, line)
      }))
    .on("data", (data) => {
       // console.log(Buffer.byteLength(data));
       lineQueue.add({data}, {
         attempts:1
       })
    })

}

mainFunction();