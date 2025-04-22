// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;
var centerHorz, centerVert;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

function resizeScreen() {
  centerHorz = canvasContainer.width() / 2; // Adjusted for drawing logic
  centerVert = canvasContainer.height() / 2; // Adjusted for drawing logic
  console.log("Resizing...");
  resizeCanvas(canvasContainer.width(), canvasContainer.height());
  // redrawCanvas(); // Redraw everything based on new size
}

let seed = 0;
let tilesetImage;
let currentGrid = [];
let numRows, numCols;

function preload() {
  tilesetImage = loadImage(
    "https://cdn.glitch.com/25101045-29e2-407a-894c-e0243cd8c7c6%2FtilesetP8.png?v=1611654020438"
  );
}

function reseed() {
  seed = (seed | 0) + 1108;
  randomSeed(seed);
  noiseSeed(seed);
  select("#seedReport").html("seed " + seed);
  regenerateGrid();
}

const reseed_button = document.querySelector("#reseed");

reseed_button.addEventListener("click", (e) => {
  reseed();
});


function regenerateGrid() {
  select("#asciiBox").value(gridToString(generateGrid(numCols, numRows)));
  reparseGrid();
}

function reparseGrid() {
  currentGrid = stringToGrid(select("#asciiBox").value());
}

function gridToString(grid) {
  let rows = [];
  for (let i = 0; i < grid.length; i++) {
    rows.push(grid[i].join(""));
  }
  return rows.join("\n");
}

function stringToGrid(str) {
  let grid = [];
  let lines = str.split("\n");
  for (let i = 0; i < lines.length; i++) {
    let row = [];
    let chars = lines[i].split("");
    for (let j = 0; j < chars.length; j++) {
      row.push(chars[j]);
    }
    grid.push(row);
  }
  return grid;
}

// setup() function is called once when the program starts
function setup() {
  numCols = select("#asciiBox").attribute("rows") | 0;
  numRows = select("#asciiBox").attribute("cols") | 0;
  // place our canvas, making it fit our container
  canvasContainer = $("#canvas-container");
  let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
  canvas.parent("canvas-container");
  // resize canvas is the page is resized

  // create an instance of the class
  myInstance = new MyClass("VALUE1", "VALUE2");

  $(window).resize(function() {
    resizeScreen();
  });
  resizeScreen();
  createCanvas(16 * numCols, 16 * numRows).parent("canvasContainer");
  select("canvas").elt.getContext("2d").imageSmoothingEnabled = false;

  select("#asciiBox").input(reparseGrid);

  reseed();
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
  randomSeed(seed);
  drawGrid(currentGrid);
}

function placeTile(i, j, ti, tj) {
  image(tilesetImage, 16 * j, 16 * i, 16, 16, 8 * ti, 8 * tj, 8, 8);
}

/* exported generateGrid, drawGrid */
/* global placeTile */

function generateGrid(numCols, numRows) {
  let grid = [];
  
  for (let i = 0; i < numRows; i++) {
    let row = [];
    for (let j = 0; j < numCols; j++) {
      let noiseLevel = noise(i/8, j/8);
      if(noiseLevel <= .44){
        row.push("W");
      } 
      else if(.47 <= noiseLevel && noiseLevel < .55) {
        if(random() < 0.05){
          row.push("H");
          continue;
        }
        row.push("F");
      } 
      else {
        row.push("_");
      }
    }
    grid.push(row);
  } 
  for(let i = 4; i < numRows - 4; i++) {
    for(let j = 4; j < numCols - 4; j++) {
      if(random() < 0.01){
        grid[i][j] = "T";
        grid[i + 1][j] = "T";
      }
    }
  }
  return grid;
}

function drawGrid(grid) {
  background(128);
  //const tileStyles = {
    //'W': [waterLookup],
    //'F': [groundLookup],
    //'H': [groundLookup, houseLookup],
  //};

  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "W"){
        drawContext(grid, i, j, grid[i][j], 0, 0, lookupWater);
        drawContext(grid, i, j, grid[i][j], 0, 0, lookupWaterEdge)
      }
      else if (grid[i][j] == "F"){
        placeTile(i, j, (floor(random(4))),0);
        drawContext(grid, i, j, grid[i][j], 0, 0, lookupGround);
      }
      else if (grid[i][j] == "H"){
        placeTile(i, j, (floor(random(4))),0);
        placeTile(i, j, 26, (floor(random(4))));
      }
      else if (grid[i][j] == "T"){
        placeTile(i, j, (floor(random(4))),0);
        drawContext(grid, i, j, grid[i][j], 0, 0, lookupTower);
      }
      else {
        placeTile(i, j, (floor(random(4))),0);
      }
    }
  }
  drawClouds(grid);
}

function drawClouds(grid){
  noStroke();
  const scrub = mouseX/width;
  const scrub2 = mouseX/height;
  let z = random();
  let c = color(255, 255, 255);
  c.setAlpha(240);
  fill(c);
  const clouds = 9;
  for (let i = 0; i < clouds + 1; i++) {
    let x = (grid.length*7) * ((random() + (scrub/10 + millis() / 9000.0) / z) % 2);
    let y = (grid.length*7) * ((random() + (scrub2/10 + millis() / 9000.0) / z) % 2);
    let x2 = grid.length/3 + (10*random());
    let y2 = grid.length/2*random();
    rect(x, y, x2* grid.length * 0.5, y2* grid.length * 0.4);
  }
}

function gridCheck (grid, i, j, target){
  if (i >= 0 && i < grid.length  && j >= 0 && j < grid.length) {
    if (grid[i][j] == target){
      return true;
    }
  }
  return false;
}

function gridCode(grid, i, j, target) {
  let northBit = gridCheck(grid, i - 1, j, target);
  let southBit = gridCheck(grid, i + 1, j, target);
  let westBit = gridCheck(grid, i, j + 1, target);
  let eastBit = gridCheck(grid, i, j - 1, target);
  //console.log((northBit << 0) + (southBit << 1) + (eastBit << 2) + (westBit << 3));
  return (northBit << 0) + (southBit << 1) + (eastBit << 2) + (westBit << 3);
}

function drawContext(grid, i, j, target, dti, dtj, table) {
  let code = gridCode(grid, i, j, target);
  const [tiOffset, tjOffset] = table[code]; 
  placeTile(i, j, dti + tiOffset, dtj + tjOffset);
}


const lookupWater = [
  [1,13],//0000 
  [2,13],//0000 
  [3,13],//0000 
  [3,13],//0000 
  [0,13],//0000 
  [1,13],//0000 
  [2,13],//0000 
  [3,13],//0000 
  [1,13],//0000 
  [2,13],//0000 
  [0,13],//0000 
  [3,13],//0000 
  [0,13],//0000 
  [0,13],//0000 
  [1,13],//0000 
  [3,13],//0000 
];

const lookupWaterEdge = [
  [0,0],//0000 
  [2,13],//0001 (N)
  [9,0],//0010 (S)
  [10,0],//0011 (NS)
  [10,0],//0100 (E) (W)
  [2,13],//0101 (NE) (SE)
  [11,0],//0110 (SE) (NE)
  [1,13],//0111 (NSE) (E)
  [10,0],//1000 (W)
  [0,13],//1001 (NW) (SW)
  [9,0],//1010 (SW) (NW)
  [3,13],//1011 (NSW) (W)
  [10,0],//1100 (EW)
  [3,13],//1101 (NEW) (S)
  [10,0],//1110 (SEW) (N)
  [3,13]//1111 (NESW)
];


const lookupGround = [
  [0,0],//0000 
  [17,2],//0001 (N)
  [17,2],//0010 (S)
  [24,2],//0011 (NS)
  [20,6],//0100 (E) (W)
  [17,2],//0101 (NE) (SE)
  [17,0],//0110 (SE) (NE)
  [17,2],//0111 (NSE) (E)
  [20,6],//1000 (W)
  [15,2],//1001 (NW) (SW)
  [15,0],//1010 (SW) (NW)
  [17,2],//1011 (NSW) (W)
  [14, 0],//1100 (EW)
  [17,2],//1101 (NEW) (S)
  [17,2],//1110 (SEW) (N)
  [16,1]//1111 (NESW)
];

const lookupTower = [
  [29,0],//0000 
  [30,1],//0001 (N)
  [30,0],//0010 (S)
  [29,1],//0011 (NS)
  [29,1],//0100 (E) (W)
  [29,1],//0101 (NE) (SE)
  [29,1],//0110 (SE) (NE)
  [29,1],//0111 (NSE) (E)
  [29,1],//1000 (W)
  [29,1],//1001 (NW) (SW)
  [29,1],//1010 (SW) (NW)
  [29,1],//1011 (NSW) (W)
  [29,1],//1100 (EW)
  [29,1],//1101 (NEW) (S)
  [29,1],//1110 (SEW) (N)
  [29,1]//1111 (NESW)
];



