function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    // msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        //6EA8BE
        document.body.style.background = '#6EA8BE'
        img.src = 'img/fotomanha.png'
        msg.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora <= 18){
        //E8B35B
        document.body.style.background = '#E8B35B'
        img.src = 'img/fototarde.png'
        msg.innerHTML = 'Boa Tarde'
    } else {
        //091735
        document.body.style.background = '#091735'
        img.src = 'img/fotonoite.png'
        msg.innerHTML = 'Boa Noite'
    }

}
