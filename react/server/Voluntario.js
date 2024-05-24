const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "projeto2semestre.mysql.database.azure.com",
  user: "projetoMysql",
  password: "@mw2302ee",
  database: "registro",
});

app.use(express.json());
app.use(cors());

app.post("voluntario", (req, res) => {
  const { nome, email, YourExperince } = req.body;

  console.log("Dados recebidos:", req.body);

  let SQL = "INSERT INTO voluntarioCad (Nome, Email, YourExperince) VALUES (?, ?, ?)";
  db.query(SQL, [nome, email, YourExperince], (err, result) => {
    if (err) {
      console.error("Erro na inserção de dados:", err);
      res.status(500).send("Erro ao inserir dados");
    } else {
      res.send("Dados inseridos com sucesso");
    }
  });
});

app.listen(3005, () => {
  console.log("Rodando servidor na porta 3005");
});