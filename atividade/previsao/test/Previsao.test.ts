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

    it("Previsão", async () => {
        // Simula Request e Response em um oibjeto
        const req = {} as Request;
        const res = {
            json: jest.fn(),
            locals:{id: "4528"}
        } as unknown as Response;
        
        await controller.previsao(req, res);
        
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({"nome": "Santa Branca"})
            // {"atualizacao": "2024-02-29", "nome": "Santa Branca", "previsao": [{"dia": "2024-03-01", "iuv": "12.0", "maxima": "28", "minima": "20", "tempo": "c"}, {"dia": "2024-03-02", "iuv": "12.0", "maxima": "27", "minima": "19", "tempo": "pn"}, {"dia": "2024-03-03", "iuv": "12.0", "maxima": "30", "minima": "16", "tempo": "pn"}, {"dia": "2024-03-04", "iuv": "12.0", "maxima": "33", "minima": "19", "tempo": "pn"}], "uf": "SP"}
       );
    });

    it("Previsão de 7 dias", async () => {
        // Simula Request e Response em um oibjeto
        const req = {} as Request;
        const res = {
            json: jest.fn(),
            locals:{id: "4528"}
        } as unknown as Response;
        
        await controller.previsao7dias(req, res);
        
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({"nome": "Santa Branca"})
            // {"atualizacao": "2024-02-29", "nome": "Santa Branca", "previsao": [{"dia": "2024-03-01", "iuv": "12.0", "maxima": "28", "minima": "20", "tempo": "c"}, {"dia": "2024-03-02", "iuv": "12.0", "maxima": "27", "minima": "19", "tempo": "pn"}, {"dia": "2024-03-03", "iuv": "12.0", "maxima": "30", "minima": "16", "tempo": "pn"}, {"dia": "2024-03-04", "iuv": "12.0", "maxima": "33", "minima": "19", "tempo": "pn"}], "uf": "SP"}
       );
    });

    it("Previsão Estendida", async () => {
        // Simula Request e Response em um oibjeto
        const req = {} as Request;
        const res = {
            json: jest.fn(),
            locals:{id: "4528"}
        } as unknown as Response;
        
        await controller.previsaoEstendida(req, res);
        
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({"nome": "Santa Branca"})
            // {"atualizacao": "2024-02-29", "nome": "Santa Branca", "previsao": [{"dia": "2024-03-01", "iuv": "12.0", "maxima": "28", "minima": "20", "tempo": "c"}, {"dia": "2024-03-02", "iuv": "12.0", "maxima": "27", "minima": "19", "tempo": "pn"}, {"dia": "2024-03-03", "iuv": "12.0", "maxima": "30", "minima": "16", "tempo": "pn"}, {"dia": "2024-03-04", "iuv": "12.0", "maxima": "33", "minima": "19", "tempo": "pn"}], "uf": "SP"}
       );
    });
});