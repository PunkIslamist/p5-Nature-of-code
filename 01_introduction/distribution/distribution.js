var randomCounts

function setup() {
   createCanvas(640, 480)
   randomCounts = Array(20).fill(0)
}

function draw() {
   var index = floor(random(randomCounts.length))
   randomCounts[index]++

   background(123)
   stroke(200, 100, 50)
   fill(175)

   var barWidth = width/randomCounts.length

   randomCounts.forEach(function (bar, i) {
      rect(i * barWidth, height - bar, barWidth - 1, bar)
   })
}
