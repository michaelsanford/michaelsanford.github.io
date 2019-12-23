const want = navigator.languages.map(lang => lang.split("-")[0]);
const available = [...document.querySelectorAll("section")].map(e => e.getAttribute("lang"));
const nodes = [...document.querySelectorAll("section")];

// if (want.length > 1) {
let cursor = 0;
setInterval(() => {
    nodes[cursor].classList.remove("show");
    cursor = ++cursor % nodes.length;
    nodes[cursor].classList.add("show");
}, 10000);
// } else {
//     // const preferred = available.filter(o => want.includes(o));
//     [...document.querySelectorAll("section")]
//     .forEach(e => e.getAttribute("lang") === preferred[0].split("-")[0] ?
//         e.classList.add("show") :
//         e.classList.remove("show")
//     );
// }