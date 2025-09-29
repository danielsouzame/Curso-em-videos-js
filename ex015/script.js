function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'm-c')
            } else if (idade < 21) {
                img.setAttribute('src', 'm-j')
            } else if (idade < 65) {
                img.setAttribute('src', 'm-a')
            } else {
                img.setAttribute('src', 'm-i')
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'feminino-crianca')
            } else if (idade < 21) {
                img.setAttribute('src', 'feminino-jovem')
            } else if (idade < 65) {
                img.setAttribute('src', 'feminino-adulto')
            } else {
                img.setAttribute('src', 'feminino-idoso')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
