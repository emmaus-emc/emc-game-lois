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
var health = 6;
var punten = 0;
var score = 0;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var vijandX = 500; // x-positie van vijand
var vijandY = 500; // y-positie van vijand
var vijandX2 = 400;
var vijandY2 = 500;
var vijandX3 = 300;
var vijandY3 = 500;


/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
  vijandY = vijandY + 10;
  vijandY2 = vijandY2 + 10;
  vijandY3 = vijandY3 + 10;

  // kogel

  // speler
  if (keyIsDown(39)) {  // key 39 = arrow_right
    spelerX = spelerX + 10;
  }
  if (keyIsDown(37)) { // key 37 = arrow_left
    spelerX = spelerX - 10;
  }
  if (keyIsDown(38)) { // key 38 = arrow up
    spelerY = spelerY - 10;
  }
  if (keyIsDown(40)) { // key 40 = arrow down
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
  if (spelerX >= 1260) {
    spelerX = 1260;
  }
  if (spelerX <= 15) {
    spelerX = 15;
  }
  if (spelerY >= 600) {
    spelerY = 600;
  }
  if (spelerY <= 15) {
    spelerY = 15;
  }


  if  ((vijandX - spelerX) < 50 &&
    (vijandX - spelerX) > -50 &&
    (vijandY - spelerY) < 50 &&
    (vijandY - spelerY) > -50 || 
    (vijandX2 - spelerX) < 50 &&
    (vijandX2 - spelerX) > -50 &&
    (vijandY2 - spelerY) < 50 &&
    (vijandY2 - spelerY) > -50 || 
    (vijandX3 - spelerX) < 50 &&
    (vijandX3 - spelerX) > -50 &&
    (vijandY3 - spelerY) < 50 &&
    (vijandY3 - spelerY) > -50) {
    health = health - 1;
    spelerX = 1200;
    // botsing kogel tegen vijand
    console.log("botsing");
  }


  if (vijandY >= 720) {
    vijandY = 0;
    vijandX = random(0, 1280);
  }
  if (vijandY2 >= 720) {
    vijandY2 = 0;
    vijandX2 = random(0, 1280);
  }
    if (vijandY3 >= 720) {
    vijandY3 = 0;
    vijandX3 = random(0, 1280);
  }

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("pink");
  rect(0, 0, 1280, 720);
  // vijand
  fill(77, 51, 16);
  ellipse(vijandX, vijandY, 50, 50);
    ellipse(vijandX2, vijandY2, 50, 50);
    ellipse(vijandX3, vijandY3, 50, 50);
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
  textSize(60);
  text(health, 20, 50);
  text(score, 1170, 50);
  score = floor(punten);
  punten = punten + 1 / 50;



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
  background('yellow');
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
    if (health < 0) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  textSize(100); 
  text("game over ", 350, 200);
  text(score,900, 200);
  }
}
