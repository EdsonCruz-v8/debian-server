const express = require('express');
const cors = require("cors");
const path = require("path");

const app = express();
const port = 8080;




const indexRouter = require("./src/routes/index.js");

app.use('/', indexRouter);
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});

