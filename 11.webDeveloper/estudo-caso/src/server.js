import express from "express";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const SECRET_KEY = "your_secret_key"; // Substitua por uma chave secreta segura

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email } = req.body;

  // Verifique se o email é "asd@asd.com"
  if (email === "asd@asd.com") {
    // Gere um token JWT com o email
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });

    // Retorne o token
    return res.json({ token });
  } else {
    // Retorne um erro se o email não for "asd@asd.com"
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
