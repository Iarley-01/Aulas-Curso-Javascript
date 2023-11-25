//Código que lê um arquivo csv com promises
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefas.csv')

async function buscaArquivo() {
    try {
        const arquivo = await fs.promises.readFile(filePath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('finalizou!')
    }
}

buscaArquivo()

/*const promessaDaLeituraArquivo = fs.promises.readFile(filePath)

promessaDaLeituraArquivo
    .then((arquivo) => arquivo.toString('utf8'))
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(';')
        return{
            nome,
            feito: feito.trim() === 'true'
        }
    }))
    .then((listaDeTarefas) => console.log(listaDeTarefas))
    .catch((error) => console.log('Deu ruim!', error))*/
