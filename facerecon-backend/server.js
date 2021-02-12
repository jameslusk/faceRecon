const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('error');
    }

    console.log(data.toString());
});

const file = fs.readFileSync('./hello.txt');
console.log(file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// });

// WRITE NEW FILE

// fs.writeFile('by.txt', 'Sad to see you go', err => {
//     if (err) {
//         console.log(err);
//     }
// });

// DELETE

fs.unlink('./by.txt', err => {
    if (err) {
        console.log(err);
    }
    console.log('Inception');
});