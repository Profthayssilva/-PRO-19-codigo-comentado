
//Para definir uma classe, primeiro escrevemos a palavra-chave class em minúsculas e depois escrevemos o nome da classe que tem a primeira letra maiúscula, emnosso caso, Box (caixa).

class Box
  {
    //Para adicionar atributos, criamos uma função constructor (construtora). 
    //É como nossa função normal, mas não precisamos escrever a palavra-chave function
    constructor()
    {
      //Neste construtor, vamos definir as propriedades
      //quando definirmos propriedades dentro de uma classe, vamos usar a palavra-chave this
      this.x =100;
      this.y = 200
      this.w = 50;
      this.h = 50;
      //palavra-chave this significa que nós estamos nos referindo a esse construtor em particular
    }
    
    // precisamos agora definir a funcionalidade da caixa.
    //Vamos escrever uma função para mostrar a caixa na tela, podemos chamar essa função de show (mostrar) a si mesma
    show()
    {
      //Adicionaremos a função rect() dentro da função show() porque queremos que nossa caixa seja retangular.
      rect(this.x,this.y,this.w,this.h)
      // temos que usar a palavra-chave this, caso contrário o programa terá um erro que não entende a propriedade.

    }
    

    //A última função que precisamos para a nossa classe é definir a velocidade da caixa.
    set_speed(v)
    {
    
    // colocaremos um argumento, portanto, quando o usuário chamar esta função, poderá fornecer qualquer velocidade.
    // podemos simplesmente adicionar a instrução para alterar this.x adicionando o argumento passado pelo usuário
      this.x = this.x + v
    }

  }

  
