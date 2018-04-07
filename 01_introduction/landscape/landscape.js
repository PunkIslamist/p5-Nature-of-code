var plane

function setup() {
  createCanvas(640, 480)
  plane = new Plane()
}

function draw() {
  background(20, 20, 20)
  noStroke()
  plane.render()
}

function Plane() {
  let cellsPerRow = 10
  let cellHeight = height / cellsPerRow
  let cellWidth = width / cellsPerRow
  let rows = createRows(cellsPerRow, cellHeight, cellWidth)

  this.render = function () { rows.forEach(r => r.render()) }
}

function Row(nr, cellHeight, cellWidth) {
  let cellCount = width / cellWidth
  var noiseX = random(10000)
  var noiseY = random(10000)
  var noiseZ = random(10000)

  this.render = function () {
    let r = map(noise(noiseX), 0, 1, 0, 255)
    let g = map(noise(noiseY), 0, 1, 0, 255)
    let b = map(noise(noiseZ), 0, 1, 0, 255)
    fill(r, g, b)
    beginShape(QUAD_STRIP)
    for (let i = 0; i <= cellCount; i++) {
      let h = cellHeight / 2
      let n = noise(noiseX + i * 0.1)
      let m = map(n, 0, 1, -h, h)
      let x = i * cellWidth
      let y = nr * cellHeight + m

      vertex(x, y)
      vertex(x, y + cellHeight)
    }
    endShape()
    noiseX += 0.007
    noiseY += 0.007
    noiseZ += 0.007
  }
}

function createRows(count, cellHeight, cellWidth) {
  return Array.apply(null, Array(count))
    .map((x, i) => new Row(i, cellHeight, cellWidth))
}