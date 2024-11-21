const form_atv = document.getElementById('formulario'); //Criei uma constante que recebe o DOM e a id da <div> "formulario"
let linhas = '';
let disciplinas = []
let notas = []
const aprovado = '<span class="resultado aprovado">Aprovado</span>'
const reprovado = '<span class="resultado reprovado">Reprovado</span>'

const img1 = '<img src="./images/aprovado.png" alt="Emoji festejando" />'
const img2 = '<img src="./images/reprovado.png" alt="Emoji triste" />'

const ND = document.getElementById('nd');


form_atv.addEventListener('submit', function(e){ //Criei a função de enviar do botão

    e.preventDefault(); //Minha variavel "e" que recebeu o atributo para chamar a função para bloquear o carregamento da pagina

    addLinhas()

    attTabela()

    mediaF()
    
});

function addLinhas(){
    
    const task_name = document.getElementById('disciplina'); //Criei uma constante que recebe o DOM e a id do campo "disciplina"
    const nota = document.getElementById('nota'); //Criei uma constante que recebe o DOM e a id do campo "nota"
    
    let linha = '<tr>';  //Estou declarando essa variavel para ser a abertura das linhas como <tr>

    if(disciplinas.includes(task_name.value)){

        alert('Essa matéria está inclusa')
    }else{

    disciplinas.push(task_name.value)
    notas.push(Number(nota.value))

    linha += `<td>${task_name.value}</td>`; //Concatenando com as strings
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value > 6 ? img1 : img2}</td>`; //Aqui eu usei o operador ternario

    linha += '</tr>'; //Vai haver o fechamento de <tr>
    
    linhas += linha;
    }
}

function attTabela(){

    const corpo = document.querySelector('tbody');
    corpo.innerHTML = linhas;
}

function CalcMedia(){

    let soma = 0
    
    for(let i = 0; i <notas.length; i++){

        soma += notas[i]
    }   

    return soma / notas.length
}

function mediaF(){

    const mediaFinal = CalcMedia()

    document.getElementById('mediaFinal').innerHTML = mediaFinal
    document.getElementById('resultado').innerHTML = mediaFinal >= 6 ? aprovado : reprovado

    console.log(disciplinas)
    console.log(notas)
}