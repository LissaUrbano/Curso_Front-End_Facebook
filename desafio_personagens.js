/*Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema. 
 * A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho máximo dos arrays fornecidos e 
 * retornar uma frase com o seguinte modelo: "personagem é um personagem do filme filme que estreou no cinema em lançamento.
 * " Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida." 
 * Deve retornar a string:
 * Leia é um personagem do filme Star wars que estreou no cinema em 1977.*/

function filme(personagens, filmes, lancamentos, id)
{
  
  if(id > 0 && id<= filmes.length){
    id--
    return personagens[id] + " é um personagem do filme " + filmes[id] + " que estreou no cinema em " + lancamentos[id] +"."

  } else {
      return "Essa não é uma opção válida."
  }
}
