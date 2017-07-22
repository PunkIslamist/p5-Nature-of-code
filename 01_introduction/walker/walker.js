var walker

function setup() {
   createCanvas(640, 480)
   walker = new Walker()
   background(123)
}

function draw() {
   walker.step()
   walker.render()
}

function Walker() {
   this.x = width/2
   this.y = height/2

   this.render = function() {
      stroke(220, 50, 120)
      point(this.x, this.y)
   }

   this.step = function() {
      this.x += floor(random(-1, 2))
      this.x = constrain(this.x, 0, width-1)

      this.y += floor(random(-1, 2))
      this.y = constrain(this.y, 0, height-1)
   }
}
