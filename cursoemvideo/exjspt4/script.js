function contar() {
    var ini = document.getElementById('innb')
    var fm = document.getElementById('fmnb')
    var ps = document.getElementById('psnb')
    var res = document.querySelector('div#res')
    res.innerHTML = ''

    if (Number(ini.value) > Number(fm.value)){
        window.alert('[ERRO] O valor de "INICIO" tem que ser menor que "FIM"!')
    } else {
        if (ini.value.length == 0){
            window.alert('[ERRO] Verifique os dados de "INICIO" e tente novamente!')
        } else if (fm.value.length == 0){
            window.alert('[ERRO] Verifique os dados de "FIM" e tente novamente!')
        } else if (Number(ps.value) == 0){
            window.alert('"Passo = 0", então será considerado o número "1"')
            ps = 1
            for(var cnt = Number(ini.value); cnt <= Number(fm.value); cnt += ps){
                res.innerHTML += `${cnt} \u{1F449} `//emoji de dedo apontando para a direita \u{1F449}
            }
            res.innerHTML += '\u{1F3C1}' //emoji de bandeira de fim \u{1F3C1 
        } else {
            for(var cnt = Number(ini.value); cnt <= Number(fm.value); cnt += Number(ps.value)){
                res.innerHTML += `${cnt} \u{1F449} `//emoji de dedo apontando para a direita \u{1F449}
            }
            res.innerHTML += '\u{1F3C1}' //emoji de bandeira de fim \u{1F3C1}
        }
    }
}

