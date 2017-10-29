var walker

function Walker() {
  this.location = createVector(width / 2, height / 2)
  this.velocity = createVector(0, 0)
  this.acceleration = createVector(0.01, -0.005)

  this.constrainLocation = function () {
    if (this.location.x > width || this.location.x < 0) {
      this.velocity.x *= -1
      this.acceleration.x *= -1
    }

    if (this.location.y > height || this.location.y < 0) {
      this.velocity.y *= -1
      this.acceleration.y *= -1
    }
  }

  this.constrainVelocity = function () {
    this.velocity.limit(10)
  }

  this.move = function () {
    this.velocity.add(this.acceleration)
    this.location.add(this.velocity)
    this.constrainLocation()
    this.constrainVelocity()
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