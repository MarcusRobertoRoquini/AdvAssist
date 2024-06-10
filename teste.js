function addFields() {
    // Cria um novo elemento select
    var newSelect = document.createElement("select");
    var options = ["tipo de trabalho","Empregado, Empregado Doméstico e Trabalhador Avulso", "Facultativo Baixa Renda e Microempreendedor Individual - MEI", "Plano Simplificado de Previdência", "MEI Transportador Autônomo de Cargas - TAC (MEI Caminhoneiro)", "Contribuinte Individual, Facultativo e Microempreendedor Individual - MEI"];
    for(var i = 0; i < options.length; i++) {
        var option = document.createElement("option");
        option.value = options[i];
        option.text = options[i];
        newSelect.appendChild(option);
    }

    // Cria dois novos elementos de entrada do tipo number
    var newInput1 = document.createElement("input");
    newInput1.type = "number";
    var newInput2 = document.createElement("input");
    newInput2.type = "number";

    // Adiciona os novos elementos ao contêiner
    var container = document.getElementById("inputContainer");
    container.appendChild(newSelect);
    container.appendChild(newInput1);
    container.appendChild(newInput2);

    var label1 = document.createElement("label");
    label1.textContent = "Salário: ";
    var label2 = document.createElement("label");
    label2.textContent = "Meses trabalhados: ";

    // Adiciona os novos elementos ao contêiner
    var container = document.getElementById("inputContainer");
    container.appendChild(newSelect);
    container.appendChild(label1);
    container.appendChild(newInput1);
    container.appendChild(label2);
    container.appendChild(newInput2);
}
