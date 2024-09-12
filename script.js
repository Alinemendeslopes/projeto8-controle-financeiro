let current = parseInt(prompt("Qual a quantidade inicial de dinheiro disponível? ")) 
let chooseOption
let additionalMoney
let subtractionMoney
do { 
  chooseOption = prompt("Quantidade inicial de dinheiro disponível: R$"+current + "\nEscolha uma opção: \n1. Adicionar dinheiro \n2 remover dinheiro \n3. Sair")
  switch(option) {
    case `1`: 
      additionalMoney = parseInt(prompt("Quanto deseja adicionar?"))
      current += additionalMoney
      break
    case `2`:
      subtractionMoney = parseInt(prompt("Quanto deseja remover?"))
      current -= subtractionMoney
      break
  }    
} while (chooseOption != `3`);
if (chooseOption == `3`) {
  alert('O programa foi encerrado. ')
}
