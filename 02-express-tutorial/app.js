// console.log('Express Tutorial')

const express = require ('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/navbar-app/index.html'));

})
//app.get post put delete all use listen

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});

app.all('*', (req, res) => {

})