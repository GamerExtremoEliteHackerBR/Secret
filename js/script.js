const $key = document.querySelector('.key');
const $code = document.querySelector('.code');
const $block = document.querySelector('.block');
const $codeInput = document.querySelector('.codeInput');

function key() {
    console.log("key");
    //if ($key.value === '768847436') {
    if ($key.value === 'Gamer Extremo') {
        console.log("key--if");
        $key.classList.add('certo');
        $key.classList.remove('efect');
        $code.removeAttribute('disabled');
        $codeInput.style.color = '#484848';
        $codeInput.style.opacity = '1';

        $block.innerHTML = `
            Muito bem, chave correta!
        `;
    }

    else {
        console.log("key--else");
        $key.classList.add('errado');
        $key.classList.remove('efect');
        $block.innerHTML = `
            Digite o código certo para desvendar o meu Segredo!
        `;
    }
    
};

/**Chuva 0 1 */
const numberAnonymous = ['0', '1'];//vai ser criado na tela igual a chuva de texto porém de baixo para cima, se digitar o código correto

function loaderHacking() {
    console.log("loaderHacking");
    const create9 = document.createElement('div');
    create9.classList.add('pos2');

    const numbersCounts = numberAnonymous.length;
    const numbersRandom = Math.floor(Math.random() * numbersCounts);

    create9.innerText = numberAnonymous[numbersRandom];

    let posX = Math.floor(Math.random() * 100);
    let posY = 0;

    /*
    //Cria chuva de 0 1 no lado esquerdo da página
    let posX = 0;
    let posY = Math.floor(Math.random() * 100);*/


    create9.setAttribute(
        'style', `left: ${posX}%; top: ${posY}; transform: translateX(-${posX}%);`
    );

    document.querySelector('.main').appendChild(create9);

    const cr = colorsRandom.length;//tamanho do array de cores
    const cs = Math.floor(Math.random() * cr);//
    create9.classList.add(colorsRandom[cs]);
}

function code() {
    //if ($code.value === '432333121') {
    if ($code.value === 'Elite H@cker BR') {
        console.log("code--if");
        $code.classList.add('certo');
        $code.classList.remove('efect');

        const createSct = document.createElement('h2');
        createSct.innerText = `I am Anonymous`;
        createSct.classList.add('sct');

        document.querySelector('.main').appendChild(createSct);

        //setInterval(loaderHacking, 10);
        setInterval(loaderHacking, 20);
    }

    else {
        console.log("code--else");
        $code.classList.add('errado');
        $code.classList.remove('efect');
        $block.innerHTML = `
        A chave está correta, mas o código está errado, digite o código correto!
    `;
    }
};

/**Clique para fun key */
function handleClickBoardKey(event) {
    if (event.keyCode === 13) {//a key code 13 é a tecla Enter
        key();
        console.log("Pressionou Enter");
    }
};

/**Clique para fun code */
function handleClickBoardCode(event) {
    if (event.keyCode === 13) {//a key code 13 é a tecla Enter
        code();
        console.log("Pressionou Enter");
    }
}

$key.addEventListener('keyup', handleClickBoardKey);
$code.addEventListener('keyup', handleClickBoardCode);


/**Chuva de caracteres */
//const countsSct = ['7....', '6...', '8..', '8...', '4...', '7...', '4.', '3..', '6.'];//conteúdo da chuva de texto
//const countsSct = ['SEGURANÇA', 'PRIVADA', 'ES'];//conteúdo da chuva de texto
const countsSct = ['Gamer', 'Extremo', 'Elite', 'H@cker', "BR" ];//conteúdo da chuva de texto
const colorsRandom = ['greenC', 'green'];//cor da fonte da chuva de texto

function loaderCounts() {
    console.log("loaderCounts");
    const numbersCounts = countsSct.length;//tamanho do conteúdo da chuva de texto
    const numberRandom = Math.floor(Math.random() * numbersCounts);//numberRandom guarda o valor de numbersCounts, ignora os decimais da multiplicação

    const createP = document.createElement('div');//cria o elemento div
    createP.classList.add('pos');//posição da chuva definida na class pos
    createP.innerText = countsSct[numberRandom];//passa o numberRandom
    let posX = Math.floor(Math.random() * 100);//ignora os decimais da multiplicação, multiplica por 100 para os itens da chuva serem criados em 100% da largura da página
    let posY = 0;
    createP.setAttribute(
        'style', `left: ${posX}%; top: ${posY}; transform: translateX(-${posX}%);`
    );
    /**Chuva */
    const cr = colorsRandom.length;//tamanho do array de cores
    const cs = Math.floor(Math.random() * cr);//

    createP.classList.add(colorsRandom[cs]);//passa a colorsRandom para cs, se eliminar essa linha ficará com as cores normais

    document.querySelector('.main').appendChild(createP);//passa pra class main
    return createP;
}

/**
 * Executa a chuva na tela, 
 * o segundo parâmetro de setInterval por padrão vou deixar 50, é a quatidade de criação dos intens da chuva, 
 * quanto menor mais itens terá na tela.
 * */
//const interval = setInterval(loaderCounts, 50);
const interval = setInterval(loaderCounts, 50);

/**Dá pra rodar sem essa parte */
window.onload = function () {
    console.log("window.onload")
    //setInterval();//estava assim, no console vai pedir ao menos um argumento
    setInterval( 100);//deixei assim e parou de pedir o argumento, passei como string e também parou de pedir, usei 10 mas usaria qualqueira valor

};