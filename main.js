
funcao();

function funcao (){
    let int = 5, int2 = 6;
    let a = test();
    console.log("Os numeros são", int, int2);

    int = int + int2;
    int2 = int - int2;
    int = int - int2;

    console.log
    ("os numeros são:",int, int2, a);
}

function test(){
    let  c = Number(prompt("Digite um numero:"));
    let  b = Number(prompt("Digite um numero:"));
    const a = b + c;
    return a;
}