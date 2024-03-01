import {Request, Response} from "express";
import axios from "axios";

export async function obter(cep: string) {
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const { data } = await axios.get(url); //data é uma variável retornada pelo axios que tem como conteúdo o resultado da url
        return data;
    }
    catch (e: any) {
        return { message: e.message };
    }
}

async function getCEP(req:Request, res:Response) {
    const {cep} = req.body;
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const { data } = await axios.get(url); //data é uma variável retornada pelo axios que tem como conteúdo o resultado da url
        return res.json(data);
    }
    catch (e: any) {
        return res.json({ message: e.message });
    }
}

export default getCEP;