function cal() {
    const nome = document.getElementById('nome').value
    const peso = document.getElementById('peso').value
    const distancia = document.getElementById('distancia').value
    const tempo = document.getElementById('tempo').value
    if(nome !== "" && peso !== "" && distancia !== "" && tempo !== ""){
        const tempo_corte = tempo.split(":")
        const horas = parseInt(tempo_corte[0])
        const minutos = parseInt(tempo_corte[1])
        const segundos = parseInt(tempo_corte[2])
        const tempo_horas = horas + minutos/60 + segundos/3600
        const tempo_minutos = horas*60 + minutos + segundos/60
        const velocidade = (distancia/tempo_horas).toFixed(2)
        const peace = (60/velocidade).toFixed(2)
        const calorias = (velocidade*peso*0.0175*(tempo_minutos)).toFixed(2)
        const p = document.createElement('p')
        p.setAttribute('class', 'mx-3 my-3');
        var conteudo = document.createTextNode(`Olá,  ${nome}! Você percorreu ${distancia}km em ${horas}h, ${minutos}m, ${segundos}s.
        Isso quer dizer que a sua velocidade média foi de ${velocidade} km/h,
        o que corresponde a uma pace de ${peace}min/km. Com ${peso}kg, você gastou cerca de ${calorias} cal`)
        p.appendChild(conteudo);
        document.getElementById('teste').appendChild(p)
    }else{
        window.alert('Digite os valores')
    }
}