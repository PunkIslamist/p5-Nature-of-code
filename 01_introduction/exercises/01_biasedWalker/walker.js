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
      var weights = {'0.4': -1, '0.6': 0, '1.0': 1}

      this.x += this.match(weights, random())
      this.x = constrain(this.x, 0, width-1)
      this.y += this.match(weights, random())
      this.y = constrain(this.y, 0, width-1)
   }

   this.match = function(weights, value) {
      for (var weight in weights) {
         if (value < parseFloat(weight)) {
            return weights[weight]
         }
      }
   }
}
