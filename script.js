function adicionarTarefa() {
    const novaTarefa = document.getElementById("novaTarefa").value;

    if (novaTarefa !== "") { //se a pessoa não escreve nada, o código não prossegue
        const novaLi = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.onclick = function() {moverTarefa(novaLi);};

        const botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover";
        botaoRemover.onclick = function() {removerTarefa(novaLi);};

        novaLi.appendChild(checkbox);
        novaLi.appendChild(document.createTextNode(novaTarefa + " "));
        novaLi.appendChild(botaoRemover);

        document.getElementById("tarefasPendentes").appendChild(novaLi);
        document.getElementById("novaTarefa").value = "";
    }
}

function moverTarefa(tarefa) {
    const listaDestino = tarefa.querySelector("input").checked ? "tarefasConcluidas" : "tarefasPendentes";

//    if (listaDestino === "tarefasConcluidas") {
        const dataConclusao = new Date().toLocaleString()
        const spanData = document.createElement("span")
        spanData.innerText = ` (Concluída em ${dataConclusao})`; 
        tarefa.appendChild(spanData);   
//    }

    document.getElementById(listaDestino).appendChild(tarefa);
}

function removerTarefa(tarefa) {
    tarefa.remove();
}


function mudarLight() {
    const body = document.querySelector('body')
    body.classList.add('lightTheme')

    document.getElementById("myH1").style.color = "black";
}

function mudarDark() {
    const body = document.querySelector('body')
    body.classList.remove('lightTheme')

    document.getElementById("myH1").style.color = "white";
}