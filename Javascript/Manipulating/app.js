const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationS
}



const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const spans = document.querySelectorAll('span');

let count = 0;
for (let span of spans) {
    span.style.color = colors[count];
    count++;
}