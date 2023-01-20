const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('.clickbut')

button.addEventListener('click', add)

function add() {
    const today = '01-01'

    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert('data já inclusa')
        return
    }

    alert('Data adiconada com sucesso')
    nlwSetup.addDay(todayz)
}


// const data = {
//     coder: ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21"],
//     training: ["01-17", "01-19", "01-20"],
//     games: ["01-17","01-19"]
// }


// nlwSetup.setData(data)
// nlwSetup.load()