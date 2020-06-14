'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());

const port = 3001;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * POST API
 * 
 */
app.post('/postapi', function (req, res) {
    const body = req.body;
    console.log(body);

    loggers.push(body);

    res.status(201);
    res.json({ "code": 201, "message": "sucesso" });
});

/**
 * GET API
 */
app.get('/getapi/:qualquercoisa', (req, res) => {
    var param = req.params.qualquercoisa;
    console.log(param);
    res.send("Requisição reqlizada!")
});

//app.listen(3001); pode usar assim tbm 
http.createServer(app).listen(port, () => console.log("O servidor rodando na porta " + port));