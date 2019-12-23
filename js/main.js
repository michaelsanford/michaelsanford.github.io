const available = [...document.querySelectorAll("section")].map(e => e.getAttribute("lang"));
const nodes = [...document.querySelectorAll("section")];

let cursor = 0;
setInterval(() => {
    nodes[cursor].classList.remove("show");
    cursor = ++cursor % nodes.length;
    nodes[cursor].classList.add("show");
}, 10000);
