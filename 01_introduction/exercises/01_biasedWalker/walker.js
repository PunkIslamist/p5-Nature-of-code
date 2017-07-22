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
      stroke(230, 90, 80)
      point(this.x, this.y)
   }

   this.step = function() {
      var num = random()
      if (num < 0.4) {
         this.x -= 1
      }
      else if (num > 0.6) {
         this.x += 1
      }
      this.x = constrain(this.x, 0, width-1)

      var num = random()
      if (num < 0.4) {
         this.y -= 1
      }
      else if (num > 0.6) {
         this.y += 1
      }
      this.y = constrain(this.y, 0, width-1)
   }
}
