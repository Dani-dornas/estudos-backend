import getCEP, {obter} from "../src/cep";
import { Request, Response } from "express";
import request from "supertest";
import app from "../src";

test("Cep válido", async () => {
    const r = await obter("12328290");
    expect(r).toMatchObject(
        {
            "cep": "12328-290"
        }
    );
});

test("Cep inválido", async () => {
    const r = await obter("12328298");
    expect(r).toMatchObject(
        {
            "erro": "true"
        }
    );
});

describe("CEP HTTP", () => {
    it("CEP Válido", async () => {
        // Simula Request e Response em um oibjeto
        const req = {body:{cep: "12328290"}} as Request;
        const res = {json:jest.fn()} as unknown as Response;
        
        await getCEP(req, res);

        // Compara se o retorno da função getCEP possui a propriedade "cep". Dessa maneira, não preciso comparar todo o objeto
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({"cep":"12328-290"})
        )
    });

    it("CEP inválido", async () => {
        const req = {body:{cep: "12328071"}} as Request;
        const res = {json:jest.fn()} as unknown as Response;
        await getCEP(req, res);
        expect(res.json).toHaveBeenCalledWith({
            "erro": "true"
        });
    });

    it("CEP incompleto", async () => {
        const req = {body:{cep: "1232807"}} as Request;
        const res = {json:jest.fn()} as unknown as Response;
        await getCEP(req, res);
        expect(res.json).toHaveBeenCalledWith({
            "message": expect.stringMatching(/Request failed/i)
        });
    });
});

describe("Teste de integração", () => { 
    it("CEP Válido", async () => {
        const response = await request(app).get("/").send({cep: "12328290"})
        
        expect(response.body.cep).toBe("12328-290");
    });

    it("CEP inválido", async () => {
        const response = await request(app).get("/").send({cep: "12328071"})
        
        expect(response.body.erro).toBe("true");
    });

    it("CEP incompleto", async () => {
        const response = await request(app).get("/").send({cep: "1238290"})
        
        expect(response.body.message).toMatch(/Request failed/i);
    });

});
