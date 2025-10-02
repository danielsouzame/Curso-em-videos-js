// function adicionar(){
//     let txtn = document.getElementById('txtn')
//     let seltab = document.getElementById('seltab')
//     if (txtn.value.length == 0 || txtn.value > 100){
//         window.alert('[ERRO] Por favor digite um número válido!')
//     }else {
//         let n = Number(txtn.value)
//         let alln = []
//         alln.push(n)
//         let item = document.createElement('option')
//         item.text = `Valor ${n} adicionado`
//         seltab.appendChild(item)
        
//     }
// }

// function finalizar(){
//     let seltab = document.getElementById('seltab')
//     if (seltab.value.length == 0){
//         alert('[ERRO] Adicione algum número.')
//     }    
// }
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        // lógica de adicionar vai aqui
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
