var walker

function setup() {
  createCanvas(1280, 650)
  walker = new Walker()
  background(123)
}

function draw() {
  walker.step()
  walker.render()
}

function Walker() {
  this.x = 0
  this.y = height / 2
  this.noiseCoordinate = 0

  this.render = function () {
    noStroke()
    fill(255, 255, 255)
    ellipse(this.x, this.y, 4)
  }

  this.step = function () {
    this.x += 1
    this.x = constrain(this.x, 0, width - 1)

    this.noiseCoordinate += 0.01
    this.y = noise(this.noiseCoordinate) * height
    this.y = constrain(this.y, 0, height - 1)
  }
}
