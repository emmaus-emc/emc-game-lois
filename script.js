/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand

  // kogel

  // speler
  if (keyIsDown(39)) {  // key 39 = arrow_right
    spelerX = spelerX + 10;
  }
  if (keyIsDown(37)){ // key 37 = arrow_left
    spelerX = spelerX - 10;
  }
  if (keyIsDown(38)){ // key 38 = arrow up
    spelerY = spelerY - 10;
  }
  if (keyIsDown(40)){ // key 40 = arrow down
    spelerY = spelerY + 10;
  }

  
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("purple");
rect(0,0,1280,720);
  // vijand

  // kogel

  // speler
  fill(115, 191, 94);
  rect(spelerX - 25, spelerY - 25, 50, 50);
  rect(spelerX - 20, spelerY + 25, 40, 50);
  rect(spelerX - 60, spelerY + 25, 40, 15);
  rect(spelerX + 20, spelerY + 25, 40, 15);
  rect(spelerX - 20, spelerY + 75, 15, 40);
  rect(spelerX + 7, spelerY + 75, 15, 40);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);




  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('purple');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm

  }
}
