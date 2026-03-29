


/*rola o valor individual de acordo com o botão do html */
function rolarIndividual(faces){
    // Localiza o campo de entrada de QUANTIDADE no HTML baseado no tipo de dado clicado.
    // Ex: Se faces for 20, ele busca o elemento com id "qtyD20".
    let qtdInput = document.getElementById('qtyD' + faces);

    // Localiza o campo de entrada de MODIFICADOR no HTML baseado no tipo de dado clicado.
    // Ex: Se faces for 12, ele busca o elemento com id "modD12".
    let modInput = document.getElementById('modD' + faces);

    // Extrai o VALOR digitado pelo usuário, converte para número e define 0 caso o campo esteja vazio.
    let qtd = Number(qtdInput.value) || 0;
    // Faz o mesmo para o MODIFICADOR: converte o texto do input em número real para o cálculo.
    let mod = Number(modInput.value) || 0;

    if (qtd <= 0) {// verifica se o ha valores no html se for 0 ele pede para colocar algum valor
        document.getElementById('output').innerHTML = "Coloque pelo menos 1 dado para rolar!";
        return; 
    }


    let dice = [];//um vetor vazio para receber os dados rolados
    let somaDices = 0;//variavel que vai armazenar a soma dos dados




    for(let i = 0; i < qtd; i++){ // gera os valores aleatorios e armazena no vetor 
        let valorSoerteado = Math.floor(Math.random()*faces)+1; // gera os numeros 
        dice.push(valorSoerteado); // armazena no vetor o push é o comando que adiciona o valor no final do do vetor.
        somaDices += valorSoerteado; // soma os valores em uma variavel
    }
    
    const totalComMod = somaDices + mod; //soma o valor dos dados somados com o modificador
    const maior = Math.max(...dice);// armazena separadamente o maior valor com o math,max
    const menor = Math.min(...dice);// armazena separadamente o menor valor com o math,min
    const maiorComMod = maior + mod;  // armazena o maior valor e soma o modificador

     //verifica se a check box esta selecionada para mostrar os valores avançados
    const advancedMode = document.getElementById('confResults1').checked;

    let mensagem; //cria uma variavel para armazenar a mensagem mostrada para os personagens

    if(advancedMode){// se a check box estiver marcada a mensagem vai ser essa
        mensagem = `
            <strong>Dados rolados:</strong> ${dice.join(", ")} <br>
            <strong>Total com Modificador:</strong> ${totalComMod} <br>
            <strong>Total sem Modificador:</strong> ${somaDices} <br>
            <strong>Maior com Modificador:</strong> ${maiorComMod} <br>
            <strong>Maior valor:</strong> ${maior} | <strong>Menor valor:</strong> ${menor}`;

    }else{ //se não sera essa
        mensagem = `
            <strong>Dados rolados:</strong> ${dice.join(", ")} <br>
            <strong>Total com Modificador:</strong> ${totalComMod} <br>`
    }

    const display = document.getElementById('utput'); // pega o "endereço" de um id e armazena na variavel display
    display.innerHTML = mensagem; // mostra no display a mensagem.
    return mensagem;
}
