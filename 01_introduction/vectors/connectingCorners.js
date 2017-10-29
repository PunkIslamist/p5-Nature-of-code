function setup() {
  createCanvas(1280, 600)
}

function draw() {
  background(60)
  let mouse = createVector(mouseX, mouseY)
  let topLeft = createVector(0, 0)
  let topRight = createVector(width, 0)
  let bottomLeft = createVector(0, height)
  let bottomRight = createVector(width, height)

  let topLeftConnector = p5.Vector.sub(mouse, topLeft)
  let topRightConnector = p5.Vector.sub(mouse, topRight)
  let bottomLeftConnector = p5.Vector.sub(mouse, bottomLeft)
  let bottomRightConnector = p5.Vector.sub(mouse, bottomRight)

  line(0, 0, topLeftConnector.x, topLeftConnector.y)

  translate(topRight.x, topRight.y)
  line(0, 0, topRightConnector.x, topRightConnector.y)

  translate(0, height)
  line(0, 0, bottomRightConnector.x, bottomRightConnector.y)

  translate(-width, 0)
  line(0, 0, bottomLeftConnector.x, bottomLeftConnector.y)
}