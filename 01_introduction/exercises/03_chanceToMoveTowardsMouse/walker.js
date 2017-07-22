var hunter

function setup() {
   createCanvas(640, 480)
   hunter = new MouseHunter()
   background(123)
}

function draw() {
   hunter.step()
   hunter.render()
}

function MouseHunter() {
   this.x = width/2
   this.y = height/2

   this.render = function() {
      stroke(230, 90, 80)
      point(this.x, this.y)
   }

   this.step = function() {
      if (random() < 0.5)
         this.moveRandomly()
      else
         this.moveTowardsMouse()

      this.x = constrain(this.x, 0, width-1)
      this.y = constrain(this.y, 0, width-1)
   }

   this.moveRandomly = function() {
      this.x += floor(random(-1, 2))
      this.y += floor(random(-1, 2))
   }

   this.moveTowardsMouse = function() {
      var distanceX = pmouseX - this.x

      if (distanceX > 0)
         this.x++
      else if (distanceX < 0)
         this.x--

      var distanceY = pmouseY - this.y

      if (distanceY > 0)
      this.y++
      else if (distanceY < 0)
      this.y--
   }
}
