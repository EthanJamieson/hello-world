const newH3 = document.createElement('h3')

newH3.innerText('I am new!')

document.body.appendChild(newH3)



const newB = document.createElement('b')
newB.append('Hi')

// append adds to encodeURI, prepend adds to the beginning



const h2 = document.createElement('h2')

h2.append('are very cute chickens')

const h1 = document.querySelector('h1')

h1.insertAdjacentElement('afterend', h2)




// Exercise 58!
const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const btn = document.createElement('BUTTON');
    btn.innerText = 'Hey!';
    container.appendChild(btn);
}
