import getCEP, {obter} from "../src/cep";
import { Request, Response } from "express";

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
