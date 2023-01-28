// criar uma variável para a caixa, vamos chamá-la de var box1
// Essa variável se tornará o objeto da classe
var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box();
// A palavra-chave new (nova) é usada para criar o objeto e,após a palavra-chave new, adicionamos o nome da classe
// preste atenção no nome da classe, sua primeira letra é maiúscula como quando criamos a classe.  
}



function draw() {
  background(220);

  // chamar as funções show() e set_speed()para que possamos observar os efeitos no objeto.
  box1.show();

  // A próxima etapa é chamar a função para definir a velocidade da caixa
  // podemos escrever qualquer velocidade que quisermos entre os parênteses da função.
  box1.set_speed(2);
}




 //O principal benefício da POO é que podemos criar vários objetos e dar a eles diferentes velocidades,
  
//var box1;
//var box2;

//function setup() {
  //createCanvas(600, 400);
  //box1 = new Box();
  //box2 = new Box();
//}

//function draw() {
  //background(220);
  //box1.show();
  //box2.show();
  //box2.set_speed(1);
//}  

  

