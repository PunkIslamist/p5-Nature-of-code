function setup() {
  createCanvas(640, 480)
}

function draw() {
  background(150, 80, 120)
  fill(230, 80, 100)

  let rectangleCount = 10
  let rectangleWidth = width / rectangleCount
  let rectangleHeight = height / rectangleCount

  for (let j = 0; j < rectangleCount; j++) {
    beginShape(QUAD_STRIP)
    for (let i = 0; i <= rectangleCount; i++) {
      let x = i * rectangleWidth
      let y = j * rectangleHeight

      vertex(x, y)
      vertex(x, y + rectangleHeight)
    }
    endShape()
  }
}
