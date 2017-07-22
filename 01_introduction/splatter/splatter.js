function setup() {
   createCanvas(640, 480)
   background(123)
}

function draw() {
   noStroke()
   fill(40, 120, 240, 20)

   let x = randomGaussian(mouseX, 10)
   let y = randomGaussian(mouseY, 10)

   ellipse(x, y, 10, 10)
}
