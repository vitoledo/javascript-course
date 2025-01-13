function contar() {
    var ini = document.getElementById('innb')
    var fm = document.getElementById('fmnb')
    var ps = document.getElementById('psnb')
    var res = document.querySelector('div#res')
    res.innerHTML = ''

    if (ini.value.length == 0){
        window.alert('[ERRO] Verifique os dados de "INICIO" e tente novamente!')
    } else if (fm.value.length == 0){
        window.alert('[ERRO] Verifique os dados de "FIM" e tente novamente!')
    } else if (ps.value.length == 0){
        window.alert('[ERRO] Verifique os dados de "PASSO" e tente novamente!')
    } else {
        for(var cnt = Number(ini.value); cnt <= Number(fm.value); cnt = cnt + Number(ps.value)){
            res.innerHTML += `${cnt} ,`
        }
        res.innerHTML += ' FIM!'

    }
    
}

