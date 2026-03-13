//buscar elemento
let meuElemento = document.getElementById("paragrafo");//id 
console.log(meuElemento);// vai a tag toda
console.log(meuElemento.textContent)//vai o conteudo d tag


let paragrafo1 = document.getElementsByClassName("paragrafo");// classe
console.log(paragrafo1);

for(let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("p");//tag
console.log(paragrafo2);

//criar elemento
let destino=document.getElementById("elemento");
let elementoHtml = document.createElement("p");
elementoHtml.textContent = "Paragrafo criado via Js";
destino.append(elementoHtml);

let lista=document.getElementById("lista");
let ul = document.createElement("ul");//lista nao orde
let itens=["Arroz","Feijão","Suco"];
for(i=0;i<itens.length;i++){
    let li=document.createElement("li");
    li.textContent=itens[i];
    ul.append(li);

}
lista.append(ul);

function somar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);
    console.log(typeof n1);
    let soma = n1 + n2;
    let saida = `Resultado: <b>${soma}</b>`;
    document.getElementById("resultado").innerHTML = saida; 
} 

let botao = document.getElementById("botao");
botao.onclick=function(){
    alert("clicou!");
    botao.style.backgroundColor ="red";
    botao.textContent="Você clicou aqui";
}