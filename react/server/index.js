const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "projeto2semestre.mysql.database.azure.com",
  user: "projetoMysql",
  password: "@mw2302ee",
  database: "Registro",
});

app.use(express.json());
app.use(cors());

app.post("/registro/padrao", (req, res) => {
  const { nome, email, telefone } = req.body;

  console.log("Dados recebidos:", req.body);

  let SQL = "INSERT INTO Cadastro (Nome, Email, Telefone) VALUES (?, ?, ?)";
  db.query(SQL, [nome, email, telefone], (err, result) => {
    if (err) {
      console.error("Erro na inserção de dados:", err);
      res.status(500).send("Erro ao inserir dados");
    } else {
      res.send("Dados inseridos com sucesso");
    }
  });
});

app.post("/registro/voluntario", (req, res) => {
  const { nome, email, message } = req.body;

  console.log("Dados recebidos:", req.body);

  let SQL = "INSERT INTO voluntarioCad (Nome, Email, YourExperience) VALUES (?, ?, ?)";
  db.query(SQL, [nome, email, message], (err, result) => {
    if (err) {
      console.error("Erro na inserção de dados:", err);
      res.status(500).send("Erro ao inserir dados");
    } else {
      res.send("Dados inseridos com sucesso");
    }
  });
});

app.listen(3001, () => {
  console.log("Rodando servidor na porta 3001");
});
