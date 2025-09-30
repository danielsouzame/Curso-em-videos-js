function contar(){
    let inicio = document.getElementById("txtini")
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.getElementById('res')
    if (passo < 1 ){
        alert('Passo inserido é menor que 1. Considerarei o passo como 1')
        passo = 1
    } else {
        for(inicio; fim; passo){
            res++
        }
            
    }
}