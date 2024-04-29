document.addEventListener("DOMContentLoaded", function () {

    var salarioInput = document.getElementById('salario');
    var opcoesSelect = document.getElementById('opcoes');
    var calcularBtn = document.querySelector('.button-container input[type="submit"]');
    var cancelarBtn = document.querySelector('.button-container input[type="reset"]');
    var resultadoDiv = document.getElementById('resultado');

    function calcularAliquota() {
        var salario = parseFloat(salarioInput.value.replace(/\D/g, ''));
        var faixaSelecionada = opcoesSelect.value.split('-');
        var faixaLimite = parseFloat(faixaSelecionada[0].replace(/\D/g, ''));
        var aliquota = parseFloat(faixaSelecionada[1].replace(/\D/g, '')) / 100;

        var valorAliquota = salario <= faixaLimite ? salario * aliquota : faixaLimite * aliquota;

        resultadoDiv.textContent = 'Valor da alíquota: R$ ' + valorAliquota.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }

    function limparResultado() {
        resultadoDiv.textContent = ''; // Limpa o conteúdo do elemento
    }

    calcularBtn.addEventListener('click', function (event) {
        event.preventDefault();
        calcularAliquota();
    });

    cancelarBtn.addEventListener('click', function (event) {
        limparResultado();
    });
});
