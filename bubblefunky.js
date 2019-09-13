var bubbles = [];

function setup() {
  createCanvas(1000, 1000);

  for (var i = 0; i < 4; i++) {
    var bubble = {
      x: random(width),
      y: random(height),
      radius: random(50, 100)
    };
    bubbles.push(bubble);
  }
}

function draw() {
  background(53, 133, 249 );

  for (var i = 0; i < bubbles.length; i++) {
    var bubble = bubbles[i];

    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1); // remove this bubble!
      }
      fill(53, 249, 174  );
    } else {
      fill(53, 225, 249 );
    }

    ellipse(bubble.x, bubble.y, bubble.radius * 7);
    bubble.x += random(-1, 1);
    bubble.y += random(-1, 1);
  }
}
