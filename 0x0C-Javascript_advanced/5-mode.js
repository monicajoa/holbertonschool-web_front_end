#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  let paragraph = document.createElement('p');
  let textParagraph = document.createTextNode('Welcome Holberton!');
  paragraph.appendChild(textParagraph);
  document.body.appendChild(paragraph);

  let buttonSpooky = document.createElement('button');
  buttonSpooky.innerHTML = 'Spooky';
  buttonSpooky.addEventListener('click', spooky);
  document.body.appendChild(buttonSpooky);

  let buttonDark = document.createElement('button');
  buttonDark.innerHTML = 'Dark mode';
  buttonDark.addEventListener('click', darkMode);
  document.body.appendChild(buttonDark);

  let buttonScream = document.createElement('button');
  buttonScream.innerHTML = 'Scream mode';
  buttonScream.addEventListener('click', screamMode);
  document.body.appendChild(buttonScream);
}

main();
