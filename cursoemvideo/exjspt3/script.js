function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var vano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (vano.value.length == 0 || vano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var vsex = document.getElementsByName('radsex')
        var idade = ano - Number(vano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (vsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'img/fotobebem.png')
                
            } else if (idade < 21){
                img.setAttribute('src', 'img/fotojovemm.png')

            } else if (idade < 60){
                img.setAttribute('src', 'img/fotoadultom.png')

            } else {
                img.setAttribute('src', 'img/fotoidosom.png')

            }

        } else if (vsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13){
                img.setAttribute('src', 'img/fotobebef.png')

            } else if (idade < 20){
                img.setAttribute('src', 'img/fotojovemf.png')

            } else if (idade < 60){
                img.setAttribute('src', 'img/fotoadultof.png')

            } else {
                img.setAttribute('src', 'img/fotoidosof.png')

            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}