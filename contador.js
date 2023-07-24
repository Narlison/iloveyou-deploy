var dataInicio = new Date('2023-06-01')

function atualizarContador(){
    var dataAtual = new Date()
    var diferencaTempo = dataAtual.getTime()- dataInicio.getTime()
    var diferencaDias = Math.floor(diferencaTempo / (1000* 3600 * 24))
    
    var contadorElemento = document.getElementById('contador-dias')
    contadorElemento.textContent = diferencaDias;
    
    var diferencaSegundos = Math.floor(diferencaTempo / 1000)
    var horas = Math.floor(diferencaSegundos /3600)
    var minutos = Math.floor((diferencaSegundos % 3600) / 60)
    var segundos = diferencaSegundos % 60
    
    /* RETORNA AS HORAS */
    var contadorElementoTempo = document.getElementById('hora')
contadorElementoTempo.textContent = horas;
    /* RETORNA OS MINUTOS */
    var contadorElementoTempo = document.getElementById('minuto')
    contadorElementoTempo.textContent = minutos;
    /* RETORNA OS SEGUNDOS*/
    var contadorElementoTempo = document.getElementById('segundo')
    contadorElementoTempo.textContent = segundos;
}





atualizarContador()
setInterval(atualizarContador,1000)
