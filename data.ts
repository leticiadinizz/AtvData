/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução (acredito que é possível),
utilizar a classe/objeto Date() do typescript para validação dos dados
Letícia Calixto Diniz
*/
function saudacao(nome, periodo) {
    function funcaoBomDia(nome) {
        console.log(`Bom Dia, ${nome}!!`);
    }
    function funcaoBoaTarde (nome){
        console.log(`Boa Tarde, ${nome}!!`);
    }
    function funcaoBoaNoite(nome){
        console.log(`Boa Noite,${nome}!!`);
    }
switch (periodo) {
    case 'bd': funcaoBomDia(nome); break;
    case 'bt': funcaoBoaTarde(nome); break; 
    case 'bn': funcaoBoaNoite(nome); break;
     default:
         console.log('Período inválido.');
    }
}

function perguntarSentimento() {
    const teclado = require('prompt-sync')();
    let sentimento = teclado('Como você está hoje?  b -- Bem|| m -- Mal ');

    if (sentimento === 'b') {
        console.log('Fico feliz que você se sente Bem!!');
    } else if (sentimento === 'm') {
        console.log( 'Fico triste que você se sinta Mal:(. Tudo vai melhorar! ');
    } else {
        console.log('Opção inválida.');
    }
}  
function s (): void{}
function mostrarDataAtual(): void {
    var hoje = new Date();
    var dia = hoje.getDate();
    var mes = hoje.getMonth() + 1;
    var ano = hoje.getFullYear();
    console.log(`${nome},a data de hoje é: ${dia}/${mes}/${ano}!`);
     }

const tecla = require('prompt-sync')();
let nome: string = tecla('Digite seu nome: ');

console.log(`Olá, ${nome}! Qual período é agora?`);
console.log(`Digite:`);
console.log(`bd - Matutino`);
console.log(`bt - Vespertino`);
console.log(`bn - Noturno`);

let opcao: string = tecla();

saudacao(nome, opcao);
perguntarSentimento();
mostrarDataAtual();
function sair() :void{
    console.clear();
    console.log(`Fim de programa...`);
    process.exit(0);
}