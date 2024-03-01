import { Request, Response } from "express";
import controller from "../src/controllers/PrevisaoController";
import Cptec from "../src/services/Cptec";

describe("Cptec", () => {
    it("Lista cidades", async () => {
        // Simula Request e Response em um oibjeto
        const req = {params:{cidade: "santa branca"}} as unknown as Request;
        const res = {} as unknown as Response;
        const next = () => {};
        
        await controller.listaCidades(req,res, next);
        
        expect(res.locals).toEqual( {
            id: "4528",
            nome: "Santa Branca",
            uf: "SP"
          });
    });

    it("Previsão de 7 dias", async () => {
        // Simula Request e Response em um oibjeto
        const req = {params:{cidade: "santa branca"}} as unknown as Request;
        const res = {} as unknown as Response;
        
        await controller.previsao(req, res);
        
        expect(res.locals).toEqual(
            expect.stringContaining("<nome>Santa Branca</nome>")
       );
    });
});