let contador = document.getElementById("contador");

function incrementar() {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
}

function decrementar() {
    if (contador.innerHTML != "0") {
        contador.innerHTML = parseInt(contador.innerHTML) - 1;
    } else {
        alert("O contador não pode ser menor que 0!");
    }
}

// CONTADOR DE CARACTERES
let contadorAtual = 0;

document.getElementById("caracter").addEventListener("input", function (event) {
    let valor = event.target.value;

    let semEspacos = valor.replace(/\s/g, "");
    contadorAtual = semEspacos.length;

    document.getElementById("contadorCaracteres").innerHTML =
        "Caracteres: " + contadorAtual;
});

// SALVAR TEXTO COM ENTER
document.getElementById("caracter").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let valor = event.target.value;

        let p = document.getElementById("resultado");

        p.innerHTML += valor + "<br>";

        event.target.value = "";

        contadorAtual = 0;
        document.getElementById("contadorCaracteres").innerHTML =
            "Caracteres: 0";
    }
});

// ADICIONAR LISTA
function adicionarLista() {
    let tipo = document.getElementById("tipoLista").value;
    let container = document.getElementById("listas");

    let lista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        let li = document.createElement("li");
        li.innerText = "Item " + i;
        lista.appendChild(li);
    }

    container.appendChild(lista);
}

// RESETAR TUDO
function resetar() {
    contador.innerHTML = "0";

    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listas").innerHTML = "";

    document.getElementById("caracter").value = "";

    contadorAtual = 0;
    document.getElementById("contadorCaracteres").innerHTML = "Caracteres: 0";
}