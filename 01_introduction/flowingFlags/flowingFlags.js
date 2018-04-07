var plane

function setup() {
  createCanvas(1280, 720)
  noStroke()
  plane = new Plane()
}

function draw() {
  background(20, 20, 20)
  plane.update()
  plane.render()
}

function Plane() {
  let cellsPerRow = 20
  let cellHeight = height / cellsPerRow
  let cellWidth = width / cellsPerRow
  let rows = createStripes(cellsPerRow, cellHeight, cellWidth)

  this.update = function () { rows.forEach(r => r.update()) }
  this.render = function () { rows.forEach(r => r.render()) }
}

function Stripe(nr, cellHeight, cellWidth) {
  let cellCount = width / cellWidth
  let noiseIncrement = 0.01
  var noiseX = random(10000)
  var noiseY = random(10000)
  var noiseZ = random(10000)
  var stripeColor = color(0, 0, 0)

  this.update = function () {
    let r = map(noise(noiseX), 0, 1, 0, 255)
    let g = map(noise(noiseY), 0, 1, 0, 255)
    let b = map(noise(noiseZ), 0, 1, 0, 255)

    stripeColor = color(r, g, b)
    noiseX += noiseIncrement
    noiseY += noiseIncrement
    noiseZ += noiseIncrement
  }

  this.render = function () {
    fill(stripeColor)
    beginShape(QUAD_STRIP)

    for (let i = 0; i <= cellCount; i++) {
      let noiseOfCurrentCell = noise(noiseX + i * 0.1)
      let adjustmentRange = cellHeight / 2
      let heightAdjustment = map(noiseOfCurrentCell, 0, 1, -adjustmentRange, adjustmentRange)
      let x = i * cellWidth
      let y = nr * cellHeight + heightAdjustment

      vertex(x, y)
      vertex(x, y + cellHeight)
    }

    endShape()
  }
}

function createStripes(count, cellHeight, cellWidth) {
  return Array.apply(null, Array(count))
    .map((x, i) => new Stripe(i, cellHeight, cellWidth))
}