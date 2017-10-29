function setup() {
  createCanvas(1280, 600)
}

function draw() {
  background(100)
  let mouse = createVector(mouseX, mouseY)
  let center = createVector(width / 2, height / 2)
  let connector = p5.Vector.sub(mouse, center)
  translate(center.x, center.y)
  line(0, 0, connector.x, connector.y)
}