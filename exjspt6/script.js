var num = []
var res = document.getElementById('res')

function adicionar(){
    let nmb = document.getElementById('nmb')
    let sel = document.getElementById('sel')

    if (nmb.value.length == 0){
        window.alert('[ERRO] Preencha com um número!')
    } else if (Number(nmb.value) < 1 || Number(nmb.value) > 100 ) {
        window.alert('[ERRO] O valor não está dentro da faixa permitida!')    
    } else if (num.includes(nmb.value)) {
        window.alert('[ERRO] Este número já foi adicionado!');
    } else {
        num.push(nmb.value) // adiciona o valor colocado ao vetor
        let valor = nmb.value
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado!`
        sel.appendChild(item)
    }
    nmb.value = '' //limpar a entrada
    nmb.focus() //volta o foco para a caixa de entrada
    res.innerHTML = ''

}

function finalizar(){
    num.sort() // organiza do menor para o maior
    let max = num.length
    var soma = 0
    for (let i = 0; i < max; i++){
        soma += Number(num[i])
    } //faz a soma dos valores do vetor
    var media = soma/max
    max -= 1 // lugar em que o ultimo valor esta
    

    if (num.length == 0){
        window.alert('[ERRO] Nenhum número adicionado!')
    } else if (num.length == 1) {
        res.innerHTML = `
        <strong>
        Ao todo temos ${num.length} numero!</br>
        Para ter mais funções adicione mais de um numero!
        </strong>
        `
    } else {
        res.innerHTML = `
        <strong>
        Ao todo temos ${num.length} numeros!</br>
        O maior valor adicionado foi ${num[max]}</br>
        A soma de todos os valores é ${soma}</br>
        A media dos valores é ${media}
        </strong>
        `
    }
}