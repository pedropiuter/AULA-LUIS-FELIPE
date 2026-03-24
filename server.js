//importação a partir de CommonJS:
//var express = require("express");

import express, { response } from "express";

const app = express();
const porta = 3000;

app.get("/",(request,response) => {
  response.send("Olá (^-^)")
});

app.listen(porta, (request,response)=>{
    console.log(`servidor rodando: http://127.0.0.1:${porta}`)
}
);