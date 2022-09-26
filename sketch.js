let base_url = 
"https://www.youtube.com/embed/RTGNU_o8EOY?autoplay=1&start=0";
let base_url1 = 
"https://www.youtube.com/embed/iwhx2gZ5fBE?&start=142&end=152&autoplay=1";
var player;
var posicionesX, posicionesY

function setup() {
  createCanvas(1366,768);
  background(0);
  //createVideo(base_url);
  //player = select("#yt_video");
  posicionesX = new Array(31);
  posicionesX = [150, 150, 150, 150, 150, 150, 150, 150, 150, 150,
    450, 450, 450, 450, 450, 450, 450, 450, 450, 450,
    900, 900, 900, 900, 900, 900, 900, 900, 900, 900, -10];

  posicionesY = new Array(31);

  posicionesY = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
    200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
    200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 100];
  //player.attribute('src', base_url);
  //player.position(0,0);  
}

var item = 0, steps = 1;
var xPos, yPos, stepsMax = 35.0;

let artober;
function preload() {
  artober = loadStrings('steps.txt');
}

function draw() {
  //var artober = loadStrings('assets/steps.txt');
  background(0);
  //textFont(titulo);
  textSize(45);
  text("ARTOBER 2021", width/2 - 450, 75);
  //textFont(subtitulo);
  text("One, Two, Three Kittens Prompt", width/2 - 450, 125);
  fill(255);
  for (var i = 0; i < item; i++) {
    //textFont(titulo);
    textSize(85);
    text("ARTOBER 2021", width/2 - 450, 75);
    //textFont(subtitulo);
    text("One, Two, Three Kittens Prompt", width/2 - 450, 125);
    fill(255);
    textSize(25);
    //textFont(fuente);
    text(str(i + 1) + ". " + artober[i], posicionesX[i], posicionesY[i] + 50);
    fill(255);
  }

  var value = artober[item];
  xPos = lerp(-100, posicionesX[item], steps/stepsMax);
  yPos = lerp(100, posicionesY[item] + 50, steps/stepsMax);
  textSize(25);
  text(str(item +1) + ". " + value, xPos, yPos);
  fill(255);

  steps++;
  if (steps >stepsMax) {
    steps = 1;
    item++;
    if (item>29) {
      item = 30;
    }
  }
}

/*void iniciarLista() {
  artober = new StringList();
  artober.append("Mother Talzin"); artober.append("Roy Mustang"); artober.append("Kindred");
  artober.append("Nyarlathotep"); artober.append("Azula"); artober.append("Ciri");
  artober.append("Mulan"); artober.append("Entrenador Pokémon"); artober.append("Sylvanas");
  artober.append("Sakura"); artober.append("Minerva McGonagall"); artober.append("Raven");
  artober.append("Eri"); artober.append("Yoshi"); artober.append("Princesa Leia");
  artober.append("Merida"); artober.append("Teemo"); artober.append("Cruella de vil");
  artober.append("Zelda"); artober.append("Legolas"); artober.append("Rayman");
  artober.append("Kidagakash"); artober.append("Wander"); artober.append("Ayesha");
  artober.append("Marco"); artober.append("Heather Mason"); artober.append("Sauron");
  artober.append("Impa"); artober.append("Wilbur Whateley"); artober.append("Kitana");
  randomSeed(0);
  artober.shuffle();
}*/

function mousePressed () {
	 
}
