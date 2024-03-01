import { Request, Response } from "express";
import request from "supertest";
import PrevisaoController from "../src/controllers/PrevisaoController";
import Cptec from "../src/services/Cptec";
import { parseString } from 'xml2js';

describe("Cptec", () => {
    it("Cptec válido", async () => {
        const cptec = new Cptec();
        
        const listaCidadesData = await cptec.listaCidades("santa branca");
        
        expect(listaCidadesData).toEqual(
        expect.stringContaining("<nome>Santa Branca</nome>")
       );
    });

    it("Previsão", async () => {
        const cptec = new Cptec();
        
        const previsao = await cptec.previsao("4528");
        
        expect(previsao).toEqual(
        expect.stringContaining("<nome>Santa Branca</nome>")
       );
    });

    it("Previsão 7 dias", async () => {
        const cptec = new Cptec();
        
        const previsao = await cptec.previsao7dias("4528");
        
        expect(previsao).toEqual(
        expect.stringContaining("<nome>Santa Branca</nome>")
       );
    });

    it("Previsão Estendida", async () => {
        const cptec = new Cptec();
        
        const previsao = await cptec.previsaoEstendida("4528");
        
        expect(previsao).toEqual(
        expect.stringContaining("<nome>Santa Branca</nome>")
       );
    });

});
