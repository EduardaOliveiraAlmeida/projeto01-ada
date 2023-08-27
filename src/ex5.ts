/* 5. Crie um programa de controle de estoque utilizando programação orientada a objetos com as classes
"Produto" e "Estoque" descritas acima. Implemente a funcionalidade para adicionar produtos ao estoque,
remover produtos por código, alterar produtos por código, buscar produtos por código, listar todos os
produtos no estoque e calcular o valor total do estoque. Crie instâncias de produtos e adicione-os ao
estoque. Teste os métodos implementados através de um menu no console, permitindo que o usuário
realize as operações de controle de estoque. */

/* OBS: Vocês precisam instalar a biblioteca prompt-sync
   Para instalar ---> npm i prompt-sync
 */


   var prompt_ = require('prompt-sync')();
   function exibirMenu() {
       console.log("Este é o menu de opções disponível: ")
       console.log("1. Adicionar produto");
       console.log("2. Remover produto");
       console.log("3. Alterar produto");
       console.log("4. Buscar produto");
       console.log("5. Listar produtos");
       console.log("6. Calcular valor total do estoque");
       console.log("0. Sair");
     }
     function main() {
       let choice = -1;
       while (choice !== 0) {
         exibirMenu();
         choice = parseInt(prompt_("Escolha uma opção:"));
         switch (choice) {
           case 1:
             // Adicionar produto
             const codigo = parseInt(prompt_("Digite o código do produto:"));
             const nome = prompt_("Digite o nome do produto:");
             const preco = parseFloat(prompt_("Digite o preço do produto:"));
             const quantidade = parseInt(prompt_("Digite a quantidade do produto:"));
             const novoProduto = new Produtos(codigo, nome, preco, quantidade);
             estoque.adicionarProduto(novoProduto);
             break;
           case 2:
             // Remover produto
             const codigoRemover = parseInt(prompt_("Digite o código do produto a ser removido:"));
             estoque.removerProduto(codigoRemover);
             break;
           case 3:
             // Alterar produto
             const codigoAlterar = parseInt(prompt_("Digite o código do produto a ser alterado:"));
             const produtoExistente = estoque.buscarProduto(codigoAlterar);
             if (produtoExistente) {
               const novoNome = prompt_("Digite o novo nome do produto:");
               const novoPreco = parseFloat(prompt_("Digite o novo preço do produto:"));
               const novaQuantidade = parseInt(prompt_("Digite a nova quantidade do produto:"));
               const novoProdutoAlterado = new Produtos(codigoAlterar, novoNome, novoPreco, novaQuantidade);
               estoque.alterarProduto(codigoAlterar, novoProdutoAlterado);
             } else {
               console.log("Produto não encontrado.");
             }
             break;
           case 4:
             // Buscar produto
             const codigoBuscar = parseInt(prompt_("Digite o código do produto a ser buscado:"));
             const produtoBuscado = estoque.buscarProduto(codigoBuscar);
             if (produtoBuscado) {
               console.log("Produto encontrado:", produtoBuscado);
             } else {
               console.log("Produto não encontrado.");
             }
             break;
           case 5:
             // Listar produtos
             const listaProdutos = estoque.listarProdutos();
             console.log("Lista de produtos no estoque:");
             listaProdutos.forEach(produto => {
               console.log(produto);
             });
             break;
           case 6:
             // Calcular valor total do estoque
             const valorTotal = estoque.calculoValorTotal();
             console.log("Valor total do estoque:", valorTotal.toFixed(2));
             break;
           case 0:
             // Sair
             console.log("Encerrando o programa.");
             break;
           default:
             console.log("Opção inválida. Digite um número válido.");
         }
       }
     }
   class Produtos {
       codigo:number
       nome:string
       preco:number
       quantidade:number
       //const produtos = ['camisa', 'casaco', 'saia']
       constructor(codigo:number, nome:string, preco:number, quantidade:number){
           this.codigo = codigo
           this.nome = nome
           this.preco = preco
           this.quantidade = quantidade
       }
   }
   class Estoque {
       produtos:Array<Produtos>
       constructor(){
           this.produtos = [];
       }
       adicionarProduto(produto:Produtos) {
           this.produtos.push(produto);
       }
       removerProduto(codigo:number){
           const index = this.produtos.findIndex(produto => produto.codigo === codigo);
           if (index !== -1) {
               this.produtos.splice(index, 1);
           }
       }
      alterarProduto(codigo:number, novoProduto:Produtos){
           const index = this.produtos.findIndex(produto => produto.codigo === codigo);
               if(index !== -1){
                   this.produtos[index] = novoProduto
               }
      }
      buscarProduto(codigo:number){
           return this.produtos.find(produto => produto.codigo === codigo)
       }
       listarProdutos(){
           return this.produtos
       }
       calculoValorTotal(){
           return this.produtos.reduce((total, produto) => total + produto.preco, 0)
       }
   }
   
   // Testes
   
   const estoque = new Estoque()
   const produto1 = new Produtos(1, "Vestido", 100, 2)
   const produto2 = new Produtos(2, "saia", 60, 3)
   estoque.adicionarProduto(produto1)
   estoque.adicionarProduto(produto2)
   main()