//                                                Tela de Guia Perfi

//Constantes
//Seleciona o Seletor do <p> do Divisão Imagem e Frase
const frasePorMomento = document.querySelector("#fraseMomento")
//Pega a data e a hora do dia
const dataHora = new Date().getHours()

//Função para Definir A frase que vai ser exibida com base na hora
const validarFrase = () => {
  //Condição para frase

  if (dataHora >= 12) {
    //Frase: "Não deixe o cavalo arreado passar na sua porteira e ir embora"
    frasePorMomento.textContent =
      "Não deixe o cavalo arreado passar na sua porteira e ir embora"
  } else {
    //Frase: "Eu não tenho medo de morrer, tenho de não viver o extraordinário"
    frasePorMomento.textContent =
      "Eu não tenho medo de morrer, tenho de não viver o extraordinário"
  }
}
//Chama a função ao entrar no site
window.onload = validarFrase

//                                                Tela de Guia Perfi
