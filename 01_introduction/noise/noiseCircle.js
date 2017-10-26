var walker

function setup() {
  createCanvas(1280, 650)
  walker = new Walker()
}

function draw() {
  walker.step()
  walker.render()
}

function Walker() {
  this.x = width / 2
  this.y = height / 2
  this.radius = 0
  this.noiseCoordinate = 0

  this.render = function () {
    background(123)
    stroke(this.radius, 255, 255)
    noFill()
    ellipse(this.x, this.y, this.radius)
  }

  this.step = function () {
    this.noiseCoordinate += 0.01
    this.radius = noise(this.noiseCoordinate) * height / 2
  }
}
