var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas}h`)
if (horas < 12){
    console.log('Bom dia')
} else if (horas <= 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
} 
