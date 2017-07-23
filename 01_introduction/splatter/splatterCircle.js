function setup() {
   createCanvas(640, 480)
   background(0)
}

function draw() {
   let red = randomGaussian(180, 40)
   let green = randomGaussian(90, 20)
   let blue = randomGaussian(120, 20)
   fill(red, green, blue, 10)
   noStroke()
   drawEllipsis(10)
}

function drawEllipsis(n) {
   for (var i = 0; i < n; i++) {
      let x = randomGaussian(width/2, 70)
      let y = randomGaussian(height/2, 70)
      ellipse(x, y, 10, 10)
   }
}
