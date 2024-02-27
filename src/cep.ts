import axios from "axios";

async function obter(cep:string){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const {data} = await axios.get(url); //data é uma variável retornada pelo axios que tem como conteúdo o resultado da url
    return {data};
}

export default obter;