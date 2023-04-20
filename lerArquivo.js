import fs from 'fs';

async function lerArquivo(pathFile) {
    const arquivoTexto = await fs.promises.readFile(pathFile, 'utf-8')
    return(arquivoTexto)
}

export default lerArquivo('./arquivos/texto.md');