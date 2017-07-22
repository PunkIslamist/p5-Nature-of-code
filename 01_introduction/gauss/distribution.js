var values

function setup() {
   createCanvas(640, 480)
   values = new Array(640).fill(0)
}

function draw() {
   background(150, 80, 120)
   noStroke()
   fill(230, 80, 100)

   let x = floor(randomGaussian(320, 30) + 0.5)
   values[x]++

   values.forEach(function(occurences, i) {
      ellipse(i, height - occurences, 8, 8)
   })
}
