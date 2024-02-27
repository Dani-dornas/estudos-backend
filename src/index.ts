import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import obter from "./cep";
dotenv.config();

const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json()); //para receber json pelo body

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});

app.get("/", async function(req:Request, res: Response){
  const {cep} = req.body;
  const resp = await obter(cep);
  res.json(resp);
});