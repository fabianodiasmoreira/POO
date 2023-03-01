// const divVazia = document.querySelector(".resultados");

// class Cliente{
//     constructor(){
//         this.id = 1,
//         this.arrayCliente = []
//     }

//     mostrarDados(){
//       let dados =  this.lerDados()
//       let validacao = this.validacaoDados(cliente)

//       if(validacao){
//         this.adicionarDadosArray(cliente)
//       }

//       console.log(this.arrayCliente);


      
//       divVazia.innerHTML += `
//       <h2>ID ${this.id}</h2>
//       <h2>Nome: ${dados.nomeCliente}</h2>
//       <h2>Email: ${dados.emailCliente}</h2>
//       <h2>Telefone: ${dados.telCliente}</h2>
//       `
//     }

//     adicionarDadosArray(cliente){
//         this.arrayCliente.push(cliente)
//         this.id++
//     }



//     lerDados(){
//         let cliente = {};

//         cliente.nomeCliente = document.querySelector("#nome").value;
//         cliente.emailCliente = document.querySelector("#email").value;
//         cliente.telCliente = document.querySelector("#telefone").value;

//         return cliente;
//     }

//     validacaoDados(cliente){
//         if(cliente.nomeCliente === ''){
//             alert("Digite seu nome!")
//         }
//         if(cliente.emailCliente === ''){
//             alert("Digite seu email!")
//         }
//         if(cliente.telCliente === ''){
//            alert("Digite seu telefone!")
//         }
//     }

//     excluirDados(){
//         alert('Excluir dados do cliente')
//     }
// }


// const cliente = new Cliente()

// const url = "https://api.chucknorris.io/jokes/random"

// async function randomJoke(){
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);

// const divVazia = document.querySelector(".resultados")
//     divVazia.innerHTML = `
//          <h1>Datas from API</h1>
//          <h3>Criation: ${data.created_at}</h3>
//          <h3>Value: ${data.value}</h3>
//     `
// }

// const botao = document.querySelector(".btn")
// botao.addEventListener("click", function(){
//     randomJoke()
// })


// const botao = document.querySelector(".btn")


// function shuffleCards(){
//     fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
//     .then((response) =>{
//        return response.json()
//     })
//     .then((data) =>{
//        const dataCards = data
//        console.log(dataCards);
//     })
// }

// function drawCard(deck_id){
//     fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
//     .then((response) =>{
//         return response.json()
//     })
//     .then((data) =>{
//         const id = data
//         console.log(id);
//     })
// }

// function catchACard(){
//     const deck = shuffleCards()
//     const card = drawCard(deck.deck_id)
// }

// botao.addEventListener("click", function(){
//     const divVazia = document.querySelector(".resultados")
//     catchACard()
// })



// const formulario = document.querySelector("#formulario")

// formulario.addEventListener("click", function(){
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     const titulo = document.querySelector("#titulo").value;
//     const body = document.querySelector("#body").value;

//     const init = {
//         method: "POST",
//         body: JSON.stringify({
//             title: titulo,
//             body: body
//         }),
//         headers: {
//             "Content-type":"application/json;charset=UTF-8"
//         }
//     }

//     fetch(url, init)
//     .then((response) =>{
//         return response.json()
//     })
//     .then((data) =>{
//         console.log(data);
//     })
//     .catch((e) =>{
//         console.log(e);
//     })

// })


// class ContaBancaria{
//     constructor(nome, numero){
//         if(this.constructor === ContaBancaria){
//             throw new Error("Essa classe é abstrata e não pode ser usada diretamente")
//         }
//         this.nome = nome,
//         this.numero = numero,
//         this.saldo = 0
//     }

//     depositar(valorDepositado){
//         this.saldo += valorDepositado
//     }

//     sacar(valorRetirado){
//         if(valorRetirado > this.saldo){
//             throw new Error("Saldo insuficiente")
//         }
//         this.saldo -= valorRetirado
//     }
// }


// class PessoaFisica extends ContaBancaria{
//     constructor(nome, numero, cpf){
//         super(nome, numero)
//         this.cpf = cpf
//     }
// }

// const cliente1 = new PessoaFisica("Sjsdjsd", 8, 11110145785)

// console.log(cliente1.depositar(1000));
// console.log(cliente1.sacar(5000));
// console.log(cliente1);


class ClienteDados{
    constructor(){
        this.saldo = 0
    }

    mostrarDados(){
        let dados = this.lerDados()
    }


    lerDados(){
        let cliente = {}

        cliente.nomeCliente = document.querySelector("#nome").value
        cliente.numeroConta = document.querySelector("#numero").value
        cliente.deposito = document.querySelector("#deposito").value
        cliente.saque = document.querySelector("#saque").value

        return cliente
    }

    validacao(){
        let msg = '';

        if(cliente.nomeCliente === ''){
            msg += alert("Você precisa digitar seu nome")
        }else if(numeroConta === ''){
            msg += alert("Digite o número da conta")
        }else if(cliente.deposito === ''){
            msg += alert("Digite o valor do depósito")
        }else if(cliente.saque === ''){
            msg += alert("Digite o valor do saque")
        }
    }

}

var cliente = new ClienteDados()




