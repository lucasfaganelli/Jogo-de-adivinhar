// Variáveis
const screen1 = document.querySelector('.screen1') // Criando variaveis para não ficar repetindo mesmo código
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10) // vai arredondar para cima ou para baixo
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick) // esta executando a função handleTryClick
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

// Função
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector('h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = '' // vai deixar caixa de numero vazia ao tentar acertar número
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10) // Vai Criar numeros aleatorios quando resetar a tela
}

function toggleScreen() {
  screen1.classList.toggle('hide') // toggle vai tirar ou colocar Hide se ja tiver
  screen2.classList.toggle('hide')
}
