



function rolarIndividual(faces){
    let qtdInput = document.getElementById('qtyD' + faces);
    let modInput = document.getElementById('modD' + faces);

    let qtd = Number(qtdInput.value) || 0;
    let mod = Number(modInput.value) || 0;

    if (qtd <= 0) {
        document.getElementById('output').innerHTML = "Coloque pelo menos 1 dado para rolar!";
        return; 
    }


    let dice = [];
    let somaDices = 0;




    for(let i = 0; i < qtd; i++){
        let valorSoerteado = Math.floor(Math.random()*faces)+1;
        dice.push(valorSoerteado);
        somaDices += valorSoerteado;
    }
    
   

    const totalComMod = somaDices + mod;
    const maior = Math.max(...dice);
    const menor = Math.min(...dice);
    const maiorComMod = maior + mod; 

    const advancedMode = document.getElementById('confResults1').checked; 

    let mensagem;

    if(advancedMode){
        mensagem = `
            <strong>Dados rolados:</strong> ${dice.join(", ")} <br>
            <strong>Total com Modificador:</strong> ${totalComMod} <br>
            <strong>Total sem Modificador:</strong> ${somaDices} <br>
            <strong>Maior com Modificador:</strong> ${maiorComMod} <br>
            <strong>Maior valor:</strong> ${maior} | <strong>Menor valor:</strong> ${menor}`;

    }else{
        mensagem = `
            <strong>Dados rolados:</strong> ${dice.join(", ")} <br>
            <strong>Total com Modificador:</strong> ${totalComMod} <br>`
    }

    const display = document.getElementById('output');
    display.innerHTML = mensagem;
}

