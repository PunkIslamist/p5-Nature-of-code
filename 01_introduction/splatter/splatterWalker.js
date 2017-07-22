var walker

function setup() {
   createCanvas(640, 480)
   background(0)
   walker = new Walker()
}

function draw() {
   let red = randomGaussian(180, 40)
   let green = randomGaussian(128, 40)
   let blue = randomGaussian(128, 40)
   fill(red, green, blue, 10)
   noStroke()

   walker.move()
   walker.draw()
}

function Walker() {
   this.x = width/2
   this.y = height/2

   this.move = function() {
      this.x = randomGaussian(this.x, 2)
      this.y = randomGaussian(this.y, 2)
      this.x = constrain(this.x, 0, width-1)
      this.y = constrain(this.y, 0, height-1)
   }

   this.draw = function() {
      let x = randomGaussian(this.x, 10)
      let y = randomGaussian(this.y, 10)

      ellipse(x, y, 10, 10)
   }
}
