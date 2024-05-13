//elementos html (select e input)
let tipo = document.getElementById('tipo');
let situacao = document.getElementById('situacao');
let filtro = document.getElementById('filtro');

//quando houver uma mudança no select tipo é chamada essa função
tipo.addEventListener('change', function () {
    //verifica o valor do select e mostra/esconde o campo correto
    if (tipo.value == 'solicitante') {
        situacao.style.display = 'block';
        filtro.style.display = 'none';
    } else {
        situacao.style.display = 'none';
        filtro.style.display = 'block';
    }

});

tipo.addEventListener('change', function () {
    //verifica o valor do select e mostra/esconde o campo correto
    if (tipo.value == 'solicitante_2') {
        situacao2.style.display = 'block';
        filtro.style.display = 'none';
    } else {
        situacao2.style.display = 'none';
        filtro.style.display = 'block';
    }

    
});