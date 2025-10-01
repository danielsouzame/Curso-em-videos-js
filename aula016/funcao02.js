// Pode se declarar o parametro recebendo um couteudo previo para n dar erro em caso de chamar apenas um dos parametros
function soma(n1 = 0, n2 = 0) {
    return n1 + n2
} 

console.log(soma(7))