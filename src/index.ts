import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import getCEP from "./cep";
dotenv.config();

const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json()); //para receber json pelo body

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.get("/", getCEP);

export default app;