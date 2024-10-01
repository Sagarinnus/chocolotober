var posicionesX, posicionesY;
let myDictionary;

function setup() {
  createCanvas(1600,1000);
  background(0);
  //createVideo(base_url);
  //player = select("#yt_video");
  posicionesX = new Array(32);
  posicionesX = [150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    150, 150, 150, 150, 150, 900, 900, 900, 900, 900,
    900, 900, 900, 900, 900, 900, 900, 900, 900, 900, 900, -200];

  posicionesY = new Array(32);

  posicionesY = [150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
    700, 750, 800, 850, 900, 200, 250, 300, 350, 400, 
    450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 900];
  //player.attribute('src', base_url);
  //player.position(0,0); 
  myDictionary =  createStringDict('start', 'start');
  item = day() - 1;
  links();
}

var item = 0;
var steps = 1;
var xPos, yPos, stepsMax = 32.0;

let artober;
let loadedJson
function preload() {
  artober = loadStrings('steps.dat');
}

function draw() {
  //var artober = loadStrings('assets/steps.txt');
  background(0);
  //textFont(titulo);
  textSize(45);
  text("KALUTOBER 2024", width/2 - 250, 75);
  //textFont(subtitulo);
  text("Tematica Videojuegos", width/2 - 180, 125);
  fill(255);
  for (var i = 0; i < item; i++) {
    //textFont(titulo);
    textSize(45);
    text("KALUTOBER 2024", width/2 - 250, 75);
    //textFont(subtitulo);
    text("Tematica Videojuegos", width/2 - 180, 125);
    fill(255);
    textSize(25);
    //textFont(fuente);
    //link = createA(loadedJson[artober[i]], artober[i],'_blank');
    //link.position(posicionesX[i], posicionesY[i] + 50);
    text(str(i + 1) + ". " + artober[i], posicionesX[i] - 100, posicionesY[i] + 50);
    fill(255);
  }

  var value = artober[item];
  xPos = lerp(-100, posicionesX[item] -100, steps/stepsMax);
  yPos = lerp(100, posicionesY[item] + 50, steps/stepsMax);
  textSize(25);
  text(str(item +1) + ". " + value, xPos, yPos);
  fill(255);

  steps++;
  if (steps>stepsMax) {
    steps = 1;
    item++;
    if (item>30) {
      item = 31;
    }
  }
}

function doubleClicked() {

}

function links() {
  myDictionary.create('The Devil Within - Digital Daggers', 'https://www.youtube.com/watch?v=O3UuqCN1sQs');
  myDictionary.create('Mascara - XG', 'https://www.youtube.com/watch?v=aVatpxBTfZs');
  myDictionary.create('La llorona - Angela Aguilar', 'https://www.youtube.com/watch?v=h5z99EYHY4I');
  myDictionary.create('Maniac - Stray Kids', 'https://www.youtube.com/watch?v=OvioeS1ZZ7o');
  myDictionary.create('Therefor I Am - Bilie Eilish', 'https://www.youtube.com/watch?v=RUQl6YcMalg');
  myDictionary.create('The Truth Beneath the Rose - Within Temptation', 'https://www.youtube.com/watch?v=9fLjMt41JU8');
  myDictionary.create('La Geografia de mi Camino - Laura Pausini', 'https://www.youtube.com/watch?v=Ef6niKnp4vU');
  myDictionary.create('Akai ito - Kobukuro/Yui Aragaki', 'https://www.youtube.com/watch?v=SqdwJkSSzhI');
  myDictionary.create('Tras de mí - RBD', 'https://www.youtube.com/watch?v=Q1P04glmc_8');
  myDictionary.create('Cactus - TWICE', 'https://www.youtube.com/watch?v=OTHG8RqPSKE');

  myDictionary.create('Pharao - Freedom Call', 'https://www.youtube.com/watch?v=HPmxb4ITm0k');
  myDictionary.create('Rocky Road to Dublin - The High Kings', 'https://www.youtube.com/watch?v=tMFvPXklQyU');
  myDictionary.create('Only the Broken Hearts Make You Beautiful - Sonata Arctica', 'https://www.youtube.com/watch?v=rK88c-QAKbw');
  myDictionary.create('Téir Abhaile Riú - Celtic woman', 'https://www.youtube.com/watch?v=EjyljC5fSeU');
  myDictionary.create('In the Land of Twilight - Yuki Kajiura', 'https://www.youtube.com/watch?v=km6Mp-U3LmY');
  myDictionary.create('El Trino del Diablo - Tartini', 'https://www.youtube.com/watch?v=ZkX8YyA4Wp4');
  myDictionary.create('La Quemona - Mishelle Master Boys', 'https://www.youtube.com/watch?v=HkRqgxS6SgM');
  myDictionary.create('Quizas - Afaz natural', 'https://www.youtube.com/watch?v=OkAG-lE7kpM');
  myDictionary.create('Engel - Rammstein', 'https://www.youtube.com/watch?v=x2rQzv8OWEY');
  myDictionary.create('The Vengeful Onne - Disturbed', 'https://www.youtube.com/watch?v=8nW-IPrzM1g');

  myDictionary.create('The Asylum - Edguy', 'https://www.youtube.com/watch?v=CpGGBgOKwmk');
  myDictionary.create('Armata Strigoi - Powerwolf', 'https://www.youtube.com/watch?v=3zx1ZtxUbGE');
  myDictionary.create('The Boy Who Want To Be A Real Puppet - Sonata Arctica', 'https://www.youtube.com/watch?v=RbSMiyjFJeM');
  myDictionary.create('To Mega Therion - Therion', 'https://www.youtube.com/watch?v=2ZQ0BsNi24A');
  myDictionary.create('One for All, All for One - Nostradameus', 'https://www.youtube.com/watch?v=NqLVfxQnLfA');
  myDictionary.create('Welcome To The Black Parade - My Chemical Romance', 'https://www.youtube.com/watch?v=RRKJiM9Njr8');
  myDictionary.create('Symphony of Life - Avantasia', 'https://www.youtube.com/watch?v=Kdtfzv5X4Nc');
  myDictionary.create('Mephistopheles Return - Trans-Siberian Orchestra', 'https://www.youtube.com/watch?v=ploxWruSqLE');
  myDictionary.create('Perfect World - TWICE', 'https://www.youtube.com/watch?v=fmOEKOjyDxU');
  myDictionary.create('Demons Are a Girl Best Friend - Powerwolf', 'https://www.youtube.com/watch?v=jhK2ev_O-pc');
}
