import obter from "../src/cep";

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