var plane

function setup() {
  createCanvas(640, 480)
  plane = new Plane()
}

function draw() {
  background(80, 80, 80)
  noFill()
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
  var noiseValue = random(10000)

  this.render = function () {
    fill(10, 100, nr * 12)
    beginShape(QUAD_STRIP)
    for (let i = 0; i <= cellCount; i++) {
      let h = cellHeight / 2
      let n = noise(noiseValue + i * 0.1)
      let m = map(n, 0, 1, -h, h)
      let x = i * cellWidth
      let y = nr * cellHeight + m

      vertex(x, y)
      vertex(x, y + cellHeight)
    }
    endShape()
    noiseValue += 0.007
  }
}

function createRows(count, cellHeight, cellWidth) {
  return Array.apply(null, Array(count))
    .map((x, i) => new Row(i, cellHeight, cellWidth))
}