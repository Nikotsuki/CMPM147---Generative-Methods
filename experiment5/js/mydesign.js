/* exported p4_inspirations, p4_initialize, p4_render, p4_mutate */


function getInspirations() {
    return [
      {
        name: "Aenima - Tool (1996)",
        assetUrl: "img/aenima.png",
        credit: "Tool's classic 1996 album."
      },
      {
        name: "Kendrick Lamar GNX (2024)",
        assetUrl: "img/GNX.jpeg",
        credit: "Kenrick Lamar's most recent, smash hit 2024 album."
      },
      {
        name: "To Pimp a Butterfly - Kendrick Lamar (2015)",
        assetUrl: "img/TPAB.jpg",
        credit: "Kendrick Lamar's legendary 2015 album."
      },
      {
        name: "Money Store - Death Grips (2012)",
        assetUrl: "img/money store.png",
        credit: "Death Grip's famous 20012 album."
      }
    ];
  }
  
  function initDesign(inspiration) {
    // set the canvas size based on the container
    let canvasContainer = $('.image-container'); // Select the container using jQuery
    let canvasWidth = canvasContainer.width(); // Get the width of the container
    let aspectRatio = inspiration.image.height / inspiration.image.width;
    let canvasHeight = canvasWidth * aspectRatio; // Calculate the height based on the aspect ratio
    resizeCanvas(inspiration.image.width / 2, inspiration.image.height / 2);
    $(".caption").text(inspiration.credit); // Set the caption text
  
    // add the original image to #original
    const imgHTML = `<img src="${inspiration.assetUrl}" style="width:${canvasWidth}px;">`
    $('#original').empty();
    $('#original').append(imgHTML);
  
    
    let design = {
      bg: 0,
      fg: []
    }
    
    for(let i = 0; i < 2000; i++) {
      design.fg.push({x: random(width),
                      y: random(height),
                      w: random(width/2),
                      h: random(height/2),
                      fill: random(255)})
    }
    return design;
  }
  
  function renderDesign(design, inspiration) {
    
    background(design.bg);
    noStroke();
    for(let box of design.fg) {
      fill(box.fill, 128);
      //rect(box.x, box.y, box.w, box.h);
      //stroke(box.fill, 128)
      //ellipse(box.x, box.y, box.w / 2, box.h / 2);
      var angle = TWO_PI / 5;
      var halfAngle = angle / 2.0;
      beginShape();
      for (var i = 0; i < TWO_PI; i += angle) {
        var sx = box.x + cos(i) * box.h/5;
        var sy = box.y + sin(i) * box.h/5;
        vertex(sx, sy);
        sx = box.x + cos(i + halfAngle) * box.w/5;
        sy = box.y + sin(i + halfAngle) * box.w/5;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    }
  }
  
  function mutateDesign(design, inspiration, rate) {
    design.bg = mut(design.bg, 0, 255, rate);
    for(let box of design.fg) {
      box.fill = mut(box.fill, 0, 255, rate);
      box.x = mut(box.x, box.x - 10, width + 10, rate);
      box.y = mut(box.y, box.y - 10, height + 10, rate);
      box.w = mut(box.w, box.w - 10, width/2 + 10, rate);
      box.h = mut(box.h, box.h - 10, height/2 + 10, rate);
    }
  }
  
  
  function mut(num, min, max, rate) {
      return constrain(randomGaussian(num, (rate * (max - min)) / 10), min, max);
  }