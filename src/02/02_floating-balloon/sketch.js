import p5 from 'p5'

new p5(sketch, window.document.getElementById('p5-container'));

/**
 * @param {p5} p
 */
function sketch(p) {
    p.setup = () => {
        p.createCanvas(1024, 1024);
        p.background('gray');
    };
    p.draw = () => {
        p.stroke('orange');
        p.strokeWeight(10);
        p.point(512, 512);
    };
}

