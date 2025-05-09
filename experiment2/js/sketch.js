/* exported setup, draw */

let seed = 7;

const reimagine = document.querySelector("#reimagine");

const leafColor = "#719552";
const leaf2Color = "#4b6732";
const leaf3Color = "#637e40";
const sky1Color = "#5380c1";
const sky2Color = "#5481c0";
const sky3Color = "#6089c0";
const sky4Color = "#6f93ca";
const sky5Color = "#86a6d2";
const sky6Color = "#b8c6d2";
const treeColor = "#374427";
const flowerColor = "#e8b32b";
const insideColor = "#57470b";
const cloudColor = "#dee5ed";
//const cloud2Color = "#c9cdd6";
const stemColor = "#81804d";

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

function setup() {  
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  background(100);
  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
}

reimagine.addEventListener("click", (e) => {
  seed++;
});


function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(sky1Color);
  rect(0, 0, width, height);
  
  fill(sky2Color);
  rect(0, height*0.66 - height*0.66*(5/6),width, height);
  
  fill(sky3Color);
  rect(0, height*0.66 - height*0.66*(4/6), width, height);
  
  fill(sky4Color);
  rect(0, height*0.66 - height*0.66*(3/6), width, height);
  
  fill(sky5Color);
  rect(0, height*0.66 - height*0.66*(2/6), width, height);
  
  fill(sky6Color);
  rect(0, height*0.66 - height*0.66*(1/6), width, height);
  
  fill(cloudColor);
  const clouds = 30;
  for (let i = 0; i < clouds + 1; i++) {
    let x = width * random() + (millis() / 5000.0) % 1;
    let y = height * random();
    let x2 = width/5 + (10*random());
    let y2 = height/3*random();
    arc(x, y, x2, y2, 0, 2*Math.PI);
    arc(x+30*random(), y+30*random(), x2 * random() + 25, y2*random() + 30, 0, 2*Math.PI);
    arc(x+10*random(), y+60*random(), x2 * random() + 25, y2*random() + 30, 0, 2*Math.PI);
    //fill(cloud2Color);
    //arc(x, y, x2 - 10, y2-10, 2*Math.PI, Math.PI);
    //fill(cloudColor);
  }

  //trees
  fill(treeColor);
  const steps = 22;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    arc(x, height*0.66+height/25, width/steps + (width/17*random()), height/steps*random() + (height/5*random()), 0, 2*Math.PI, PIE, 5);
  }
  
  fill(leafColor);
  rect(0, height * 0.66+height/40, width, height * 0.66);

  //dark leaves
  const scrub = mouseX/width;
  const leaves = 2000+ 2000*random();
  for (let i = 0; i < leaves; i++) {
    let z = random();
    let x = width * ((random() + (scrub/50 + millis() / 500000.0) / z) % 1);
    //let s = width / 100 / z;
    let y = height * 0.66 + height / (40 * z);
    fill(leaf2Color);
    arc(x, y+5, y/30, y/20, 0, 2 * Math.PI);
  }
  
  //light leaves
  const leaves2 = 1000 + 500 * random();
  for (let i = 0; i < leaves2; i++) {
    let z = random();
    let x = width * ((random() + (scrub/50 + millis() / 500000.0) / z) % 1);
    //let s = width / 100 / z;
    let y = height * 0.66 + height / (40 * z);
    fill(leaf3Color);
    arc(x, y+5, y/30, y/20, 0, 2 * Math.PI);
  }
  
  
  const flowers = 700 + 500*random();
  for (let i = 0; i < flowers; i++) {
    let z = random();
    let x = width * ((random() + (scrub/50 + millis() / 500000.0) / z) % 1);
    //let s = width / 100 * z;
    let y = height * 0.66 + height / (40* z);
    if (y >= height*0.93){
      continue;
    }
    //stems
    if (y >= height*0.85){
      stroke(stemColor);
      line(x, y, x, y+height);
      noStroke();
    }
    fill(flowerColor);
    arc(x, y, y/30 + 3*random(), y/30, 180*random(), 2 * Math.PI);//flower
    fill(insideColor);
    arc(x, y, y/50 + 3*random(), y/50, 0, 2 * Math.PI);//inside
  }
}
