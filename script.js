function conta() {
    var block = 'block';
    const textConta = '18 + 9 = '
    document.getElementById('test').style.display = block;
    document.getElementById('test').innerHTML = `${textConta} 27`
};

function funcaoMudarTamanhoGrande () {
    var variavel = '2.5rem';
    document.getElementById('test').style.fontSize = variavel;
};

function funcaoMudarTamanhoPequeno () {
    var variavel = '1rem';
    document.getElementById('test').style.fontSize = variavel;
};
