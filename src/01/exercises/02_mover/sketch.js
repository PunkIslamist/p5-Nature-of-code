import p5 from 'p5'

const cfg = {
    windowSize: 512,
    bgColor: 'gray',
    ballColor: 'orange',
    ballSize: 50
}

/**
 * @param {HTMLElement} element
 */
export default function (element) {
    new p5(sketch, element);
}

/**
 * @param {p5} p
 */
function sketch(p) {
    const windowSize = cfg.windowSize;
    const acceleration = p.createVector(-0.001, 0.01);
    let balloon = {
        pos: p.createVector(windowSize / 2, windowSize / 2),
        vel: p.createVector(0, 0)
    }

    p.setup = () => setup(p, windowSize);
    p.draw = () => {
        const movedBalloon = updateState(acceleration, balloon);
        renderImage(p, movedBalloon.pos);
        balloon = movedBalloon;
    }
}

/**
 * @param {p5} p
 * @param { p5.Vector} position
 */
function renderImage(p, position) {
    p.background(cfg.bgColor);
    p.point(position.x, position.y);
}

/**
 * @param {p5.Vector} accel
 * @param {{ pos: p5.Vector; vel: p5.Vector; }} balloon
 */
function updateState(accel, balloon) {
    const veli = p5.Vector.add(accel, balloon.vel);
    const posi = p5.Vector.add(veli, balloon.pos);

    posi.x = mod(posi.x, cfg.windowSize);
    posi.y = mod(posi.y, cfg.windowSize);
    posi.limit(10);

    return { pos: posi, vel: veli };
}

/**
 * Calculates value in Z/limit Z (as long as it is not less than 0 - limit).
 * @param {number} value
 * @param {number} limit
 */
function mod(value, limit) {
    return (value + limit) % limit;
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
