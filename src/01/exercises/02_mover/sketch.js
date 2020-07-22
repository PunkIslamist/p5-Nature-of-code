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
    const accel = p.createVector(-0.001, 0.01);
    let balloon = {
        pos: p.createVector(windowSize / 2, windowSize / 2),
        vel: p.createVector(0, 0)
    }

    p.setup = () => setup(p, windowSize);
    p.draw = () => {
        const veli = p5.Vector.add(balloon.vel, accel);
        const posi = p5.Vector.add(balloon.pos, veli);
        posi.x %= cfg.windowSize;
        posi.x = posi.x > 0 ? posi.x : cfg.windowSize;
        posi.y %= cfg.windowSize;
        posi.y = posi.y > 0 ? posi.y : cfg.windowSize;
        posi.limit(10);
        const b = { pos: posi, vel: veli };

        p.background(cfg.bgColor);
        p.point(b.pos.x, b.pos.y);
        balloon = b;
    }
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
