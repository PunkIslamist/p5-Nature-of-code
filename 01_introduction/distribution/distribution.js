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
   fill(90, 60, 90)

   var barWidth = width/randomCounts.length

   randomCounts.forEach(function (bar, i) {
      rect(0, i * barWidth, bar, barWidth - 1)
      rect(width, i * barWidth, -bar, barWidth - 1)
   })
}
