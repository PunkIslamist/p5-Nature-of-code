import sketches_01 from 'src/01/module_01';

const sketches = [...sketches_01];
const sketchContainer = window.document.getElementById('p5-container');

sketches
    .map((s, i) => createNode(s, i))
    .forEach(n => sketchContainer.appendChild(n));

function createNode(sketch, index) {
    const node = document.createElement("span");
    node.textContent = index;
    node.addEventListener("click", (event) => {
        const sketchNode = node.appendChild(document.createElement("div"));
        sketch(sketchNode);
    });

    return node;
}