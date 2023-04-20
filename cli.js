import pegaArquivo from "./index.js";
import validaURL from "./http.js";
import lerArquivo from "./lerArquivo.js";
import arrayLinks from './arrayLinks.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === "valida") {
        console.log('Lista de validados', await validaURL(resultado));
    } else if (caminho[3] === "links") {
        console.log('Lista de array', arrayLinks(resultado));
    }else if(caminho[3] === 'leitura'){
        console.log('Leitura de todo o arquivo', lerArquivo);
    }
    else {
        console.log('Este arquivo não apresenta nenhum link');
    }
}

processaTexto(caminho);