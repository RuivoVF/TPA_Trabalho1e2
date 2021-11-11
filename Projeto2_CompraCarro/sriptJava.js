function cal(){
    let mensal = Number(document.getElementById('rmensal').value)
    let vprod = Number(document.getElementById('vprod').value)
    let entrada = Number(document.getElementById('ventrada').value)
    let tjuros = Number(document.getElementById('txjuros').value)
    let prestacoes = Number(document.getElementById('nprestacoes').value)

    if(mensal !== "" && vprod !== "" && entrada !== "" && tjuros !== "" && prestacoes !== ""){

        let juros = tjuros/100
        var financiamento  = vprod - entrada
        var pmt = (financiamento *(((1+juros)**prestacoes*juros)/ ((1+juros)**prestacoes-1))).toFixed(2)
    }else{
        window.alert("Confira os campos!!")
    }
    const p = document.createElement('p')
    p.setAttribute('class', 'mx-3 my-3');
    if(pmt <= (0.3*mensal)){
        var conteudo = document.createTextNode(`Cada parcela sai a ${pmt}$ por mês`)
        p.appendChild(conteudo);
        document.getElementById('teste').appendChild(p)
    }else{
        var conteudo = document.createTextNode(`Valor acima dos 30% do seu salário`)
        p.appendChild(conteudo);
        document.getElementById('teste').appendChild(p)
    }
}