const express = require("express");
const app = express();
const employee = require("./api/emp");

app.use(employee);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('I am Up!!')
})

app.listen(PORT, console.log(`Running @ ${PORT}`));