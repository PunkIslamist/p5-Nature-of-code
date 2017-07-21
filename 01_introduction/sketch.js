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
      stroke(0)
      point(this.x, this.y)
   }

   this.step = function() {
      choice = floor(random(4))

      switch (choice) {
         case 0:
            this.x++
            break;

         case 1:
            this.x--
            break;

         case 2:
            this.y++
            break;

         default:
            this.y--
      }

      this.x = constrain(this.x, 0, width-1)
      this.y = constrain(this.y, 0, height-1)
   }
}
