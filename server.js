import express from "express";
import dontenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./src/database/index.js";
import routes from "./src/routes/routes.js";

//  Faz a leitura do arquivo .env
dontenv.config();
const { MONGODB_URL, PORT } = process.env;

const app = express();

// Instanciando ReactJS no NodeJS
app.use("/", express.static("./client/build"));

app.use(cors());

app.use(routes);
// Configuro minhas APIs para trabalhar com retorno JSON.
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Aplicação iniciada na porta ${PORT}!`);
  connectMongoDB(MONGODB_URL);
});
