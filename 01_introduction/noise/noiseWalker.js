var walker

function setup() {
  createCanvas(1280, 600)
  walker = new Walker()
  background(123)
}

function draw() {
  walker.step()
  walker.render()
}

function Walker() {
  this.x = width / 2
  this.y = height / 2
  this.noiseCoordinateX = 1234
  this.noiseCoordinateY = 780000

  this.render = function () {
    stroke(220, 50, 120)
    ellipse(this.x, this.y, 5)
  }

  this.step = function () {
    let max = 20
    let min = 10
    this.noiseCoordinateX += 0.05
    this.noiseCoordinateY += 0.05

    this.x += noise(this.noiseCoordinateX) * max - min
    this.x = constrain(this.x, 0, width - 1)

    this.y += noise(this.noiseCoordinateY) * max - min
    this.y = constrain(this.y, 0, height - 1)
  }
}
