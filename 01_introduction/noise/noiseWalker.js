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
  this.noiseCoordinateX = random(10000)
  this.noiseCoordinateY = random(10000)

  this.render = function () {
    stroke(220, 50, 120)
    ellipse(this.x, this.y, 5)
  }

  this.step = function () {
    let range = 5
    let min = range / 2
    this.noiseCoordinateX += 0.05
    this.noiseCoordinateY += 0.05

    this.x += noise(this.noiseCoordinateX) * range - min
    this.x = constrain(this.x, 0, width - 1)

    this.y += noise(this.noiseCoordinateY) * range - min
    this.y = constrain(this.y, 0, height - 1)
  }
}
