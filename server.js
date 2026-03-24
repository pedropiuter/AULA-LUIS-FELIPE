//importação a partir de CommonJS:
//var express = require("express");

import express, { response } from "express";
import { request } from "express";

const app = express();
const porta = 3000;

app.get("/",(request,response) => {
  response.send("Olá (^-^)")
});

app.get("/usuario", (request, response) => {
    response.json({
      id:1,
      nome: "Pedro felipe",
      profissao: "vagabundo"
    });
});

app.get("/usuarios", (request, response) =>{
  response.json([
    {
      id:1,
      nome:"maria",
      profissao:"mecanica"
    },
    {
      id:2,
      nome:"pedro",
      profissao:"servente"
    }
  ]);
});

app.listen(porta, (request,response)=>{
    console.log(`servidor rodando: http://127.0.0.1:${porta}`)
}
);