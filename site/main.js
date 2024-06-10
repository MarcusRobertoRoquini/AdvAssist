
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulação de validação 
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = '/site/pag_inicial.html'; // Redireciona para a página após o login
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
});


function calcularRestituicao() {
    var tipoTrabalho = document.getElementById('tipoTrabalho').value;
    var salario = document.getElementById('salario').value;
    var mesesTrabalhados = document.getElementById('mesesTrabalhados').value;

    var aliquota;
    if (tipoTrabalho === 'empregado') {
        if (salario <= 1412.00) {
            aliquota = 0.075;
        } else if (salario <= 2666.68) {
            aliquota = 0.09;
        } else if (salario <= 4000.03) {
            aliquota = 0.12;
        } else if (salario <= 7786.02) {
            aliquota = 0.14;
        }
    } else if (tipoTrabalho === 'facultativo') {
        aliquota = 0.05;
    } else if (tipoTrabalho === 'simplificado') {
        aliquota = 0.11;
    } else if (tipoTrabalho === 'mei-tac') {
        aliquota = 0.12;
    } else if (tipoTrabalho === 'individual') {
        if (salario <= 7786.02) {
            aliquota = 0.20;
        }
    }

    var restituicao = salario * aliquota * mesesTrabalhados;

    document.getElementById('resultado').innerText = 'O valor contribuído ao INSS é: R$ ' + restituicao.toFixed(2);

}

function limparCampos() {
    document.getElementById('tipoTrabalho').value = '';
    document.getElementById('salario').value = '';
    document.getElementById('mesesTrabalhados').value = '';
    document.getElementById('resultado').innerText = '';
}


function calcularRestituicao2() {
    var tipoTrabalho2 = document.getElementById('tipoTrabalho2').value;
    var salario2 = document.getElementById('salario2').value;
    var mesesTrabalhados2 = document.getElementById('mesesTrabalhados2').value;

    var aliquota2;
    if (tipoTrabalho2 === 'empregado2') {
        if (salario2 <= 1412.00) {
            aliquota2 = 0.075;
        } else if (salario2 <= 2666.68) {
            aliquota2 = 0.09;
        } else if (salario2 <= 4000.03) {
            aliquota2 = 0.12;
        } else if (salario2 <= 7786.02) {
            aliquota2 = 0.14;
        }
    } else if (tipoTrabalho2 === 'facultativo2') {
        aliquota2 = 0.05;
    } else if (tipoTrabalho2 === 'simplificado2') {
        aliquota2 = 0.11;
    } else if (tipoTrabalho2 === 'mei-tac2') {
        aliquota2 = 0.12;
    } else if (tipoTrabalho2 === 'individual2') {
        if (salario2 <= 7786.02) {
            aliquota2 = 0.20;
        }
    }

    var restituicao2 = salario2* aliquota2 * mesesTrabalhados2;

    document.getElementById('resultado2').innerText = 'O valor contribuído ao INSS é: R$ ' + restituicao2.toFixed(2);

}

function limparCampos2() {
    document.getElementById('tipoTrabalho2').value = '';
    document.getElementById('salario2').value = '';
    document.getElementById('mesesTrabalhados2').value = '';
    document.getElementById('resultado2').innerText = '';
}


