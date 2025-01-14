function calcular(){
    var nmb = document.getElementById('nmb')
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (nmb.value.length == 0){
        window.alert('[ERRO] Preencha com um número!')
    } else {
        for(var mlt = 1; mlt <=10; mlt++){
            let item = document.createElement('option')
            var pro = Number(nmb.value)*mlt
            item.text = `${nmb.value} x ${mlt} = ${pro}`
            res.appendChild(item)
            
        }

    }
}