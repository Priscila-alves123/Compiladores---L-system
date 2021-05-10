var angle;
var axiom = 'F';
var sentence = axiom;
var len = 100;
let canva;

var rules = [];
rules[0] = {
  a: 'F',
  b: 'FF+[+F-F-F]-[-F+F+F]'
};

function  generate() {
  len *= 0.5;
  var nextSentence = '';
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if (current == 'F') {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == '+') {
      rotate(angle);
    } else if (current == '-') {
      rotate(-angle);
    } else if (current == '[') {
      push();
    } else if (current == ']') {
      pop();
    }
  }
}



function setup() {
    
  canva = createCanvas(400, 400);
  angle = radians(25);
  background(51);
  createP(axiom);
  turtle();
  reader();
  var button = createButton('Criar árvore');
  button.mousePressed(generate);
}

function handleSavePNGBtn() {
  save(canva, `Compilers_Image_${Date.now()}.png`);
}

function reader(){
fetch('arquivo.txt')
  .then(response => response.text())
  .then(text => {
    const array = text.split("\n");
    console.log(array);

    var axiom= array[0];
var regra= array[1];
var inicializador = array[2];

var numero = array[3];
var len= array[4];
var angle = array[5];

console.log(numero);
console.log(tamanho);
console.log(angulo);
  })
}