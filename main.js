const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('.clickbut')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) 
    // criar uma data , transformar em pt-br , recortar a data.

    // const today = "01/09"

    const dayExists = nlwSetup.dayExists(today) 
    // Aqui irá verificar na biblioteca  se haver o dia vai retornar true , se não haver o dia retorna false


    if(dayExists)   {
        alert('data já inclusa ❌') 
        return
    }  // condição para adicinar ou não os dias

        // se não tiver ,passa a informação como false ,dai o  dia passa direto na condição e é adicionado ... caso ja tenha o dia , vem a informção  como true ,dai ele valida o alert , para no return e não adiciona o dia 

    alert('Data adiconada com sucesso 🆗')
    nlwSetup.addDay(today) 
    //addDay adiciona o dia 
}


function save() {
    
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
    // armazena as informações no local storage na chave NLWSetup@habis que pode receber strings , por isso usou o JSON.stringify para transformar o objeto nlwSetup.data em string e armazenar 

    // e conforme for mudando o navegador de acesso , os dados não vão ser armazenador de forma universal para todos , pois cada navegador tem localstorage diferentes 
}


// const data = {
//     coder: ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21"],
//     training: ["01-17", "01-19", "01-20"],
//     games: ["01-17","01-19"]
// }


const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} 
// vai pegar as informações no local storage como strings dai vai converter para objeto usando json.parse.
// || { } é quando passar o programa pela primeira vez vai está vazio , dai precisa de uma saida q é || {}(ou objeto vazio) 

nlwSetup.setData(data) // armazena as const data
nlwSetup.load() // carrega na pagina