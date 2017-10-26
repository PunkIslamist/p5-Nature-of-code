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
  this.x = width / 2
  this.y = height / 2

  this.render = function () {
    noStroke()
    fill(255, 255, 255, 40)
    ellipse(this.x, this.y, 4)
  }

  this.step = function () {
    let stepSize = this.monteCarlo() * 20

    let stepX = random(-stepSize, stepSize)
    this.x += stepX
    this.x = constrain(this.x, 0, width - 1)

    let stepY = random(-stepSize, stepSize)
    this.y += stepY
    this.y = constrain(this.y, 0, height - 1)
  }

  this.monteCarlo = function () {
    var someNumber, qualifier

    do {
      someNumber = random()
      qualifier = random()
    } while (someNumber * someNumber > qualifier)

    return someNumber
  }
}
