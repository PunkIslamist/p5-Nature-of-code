var walker

function Walker() {
  this.location = createVector(random(width), random(height))
  this.velocity = createVector(random(-2, 2), random(-2, 2))

  this.constrain = function () {
    if (this.location.x > width || this.location.x < 0) {
      this.velocity.x *= -1
    }

    if (this.location.y > height || this.location.y < 0) {
      this.velocity.y *= -1
    }
  }

  this.move = function () {
    this.location.add(this.velocity)
    this.constrain()
  }

  this.display = function () {
    stroke(40, 50, 180)
    ellipse(this.location.x, this.location.y, 10)
  }
}

function setup() {
  createCanvas(1280, 600)
  walker = new Walker()
}

function draw() {
  background(100)
  walker.move()
  walker.display()
}