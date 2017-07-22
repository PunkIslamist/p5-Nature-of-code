function setup() {
   createCanvas(640, 480)
   background(0)
}

function draw() {
   noStroke()
   let red = randomGaussian(180, 40)
   let green = randomGaussian(128, 40)
   let blue = randomGaussian(128, 40)

   fill(red, green, blue, 20)

   let x = randomGaussian(mouseX, 10)
   let y = randomGaussian(mouseY, 10)

   ellipse(x, y, 10, 10)
}
