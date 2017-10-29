var iteration = 0

function setup() {
  createCanvas(1280, 650)
  background(123)
}

function draw() {
  iteration += 0.02
  loadPixels()
  for (column = 0; column < width; ++column) {
    for (row = 0; row < height; ++row) {
      let factor = 500
      noiseDetail(8, 0.6)
      let brightness = map(noise(column / factor, row / (factor * 10), iteration), 0, 1, 0, 255)
      let c = color(brightness)
      let index = (row * (width * 4)) + (column * 4);
      pixels[index] = c._getRed()
      pixels[index + 1] = c._getGreen()
      pixels[index + 2] = c._getBlue()
      pixels[index + 3] = c._getAlpha()
    }
  }

  updatePixels()
}