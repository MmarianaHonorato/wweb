
alert("Olá mundo!");
console.log("Testando impressão");
 
//variaveis
/*var= varchar */
var animal="gato"
animal="peixe"

//constantes
//-const: não permite reatribuir valor
const valor1=10;

console.log(animal);

//verificar os tipos
console.log(typeof animal)

//entrada e saida pelo prompt
var nome=window.prompt("Digite o nome:");                                     //ENTRADA
console.log("Nome digitado:"+nome+" Aproveite");                              //SAIDA

//PROCESSAMENTO
//operadores aritméticos: / *  - +
//operadores que comparção: <> >= <= == != !
console.log(5 =='5');//Quando usa dois == ele interpreta so o valor   (VALOR)
console.log(5 ==='5'); // Estritamente igual     (tipo e valor)



//template literal:le texto e tag (com CRASE!!!)
    console.log(`Nome:${nome}. Aproveite.`)




/*  -let:para trabalhar com escopo de bloco?
    -const: não permite reatribuir valor
    -escorpo global
    -escopo de bloco
    -variaveis com escopo iferente podem ter o mesmo nome
    -4 partes de um algoritimo
    -verificar os tipos
    -template literal
    -estritamante igual:=== estritamenta desigual:!== 
    -parseFloat: muda o tipo 
 */ 


    //criar um algoritimo que realize a soma de 2 n
    //user informa os n
    //e o resutado e apresentado
                                                                //PROCESSAMENTO
 var n1 = parseFloat(window.prompt("Digite o numero 1:"));
 var n2 = parseFloat(window.prompt("Digite o numero 2:"));
var resu=n1+n2;
console.log(resu);


//ESTRUTURAS DE CONDIÇõo
//if-else      switch-case
var idade=10;
if(idade>=18){
        console.log("Maior de idade");
}else{
    console.log("Menor de idade");
}

