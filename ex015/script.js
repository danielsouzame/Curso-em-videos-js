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
                img.setAttribute('src', 'm-c.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'm-j.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'm-a.png')
            } else {
                img.setAttribute('src', 'm-i.png')
            }
        } else if (fsex[1].checked) {
            genero = "mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'feminina-crianca.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'feminina-jovem.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'feminina-adulta.png')
            } else {
                img.setAttribute('src', 'feminina-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
