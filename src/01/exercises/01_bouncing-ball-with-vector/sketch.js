import p5 from 'p5'

const cfg = {
    windowSize: 1024,
    bgColor: 'gray',
    ballColor: 'orange',
    ballSize: 50
}

new p5(sketch, window.document.getElementById('p5-container'));

/**
 * @param {p5} p
 */
function sketch(p) {
    const windowSize = cfg.windowSize;
    let velocity = p.createVector(5, 0);
    let balloon = p.createVector(windowSize / 2, windowSize / 2);

    p.setup = () => setup(p, windowSize);
    p.draw = () => { ({ balloon, velocity } = draw(p, balloon, velocity)); }
}

/**
 * @param {p5} p
 * @param {number} windowSize
 */
function setup(p, windowSize) {
    p.createCanvas(windowSize, windowSize);
    p.background(cfg.bgColor);
    p.stroke(cfg.ballColor);
    p.strokeWeight(cfg.ballSize);
}

/**
 * @param {p5} p
 * @param {p5.Vector} balloon
 * @param {p5.Vector} velocity
 */
function draw(p, balloon, velocity) {
    const { movedBalloon, updatedVelocity } = update(balloon, velocity);

    render(p, movedBalloon);

    return {
        balloon: movedBalloon,
        velocity: updatedVelocity
    };
}

/**
 * @param {p5} p
 * @param {p5.Vector} balloon
 */
function render(p, balloon) {
    p.background(cfg.bgColor);
    p.point(balloon.x, balloon.y);
}

/**
 * @param {p5.Vector} balloon
 * @param {p5.Vector} velocity
 */
function update(balloon, velocity) {
    const movedBalloon = p5.Vector.add(balloon, velocity);
    const updatedVelocity = isOutside(movedBalloon)
        ? p5.Vector.mult(velocity, -1)
        : velocity;

    return { movedBalloon, updatedVelocity };
}

/**
 * @param {p5.Vector} balloon
 */
function isOutside(balloon) {
    return balloon.x <= 0 || balloon.x > cfg.windowSize;
}

