const express = require('express');
const app = express();
const port = 2000

app.use("view engine", "hbs")
app.use('/public', express.static(__dirname + "/public" ))
app.use(express.urlencoded({extended: true}))

app.listen(port, function(){
    console.log(`Server Running Port : '${port}'`)
});   
