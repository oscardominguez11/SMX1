/*
let a = document.getElementById("buttonNewElem");
let b = document.getElementById("inputNewElem");



let c = document.createElement("div"); 

a.addEventListener('click', function() {
  b.value
  let button = document.createElement('div');
  button.innerHTML = b.value;
  button.className = 'btn-styled';

  button.onclick = function() {
      
  };

  var container = document.getElementById('listElems');
  container.appendChild(button);
}, false);
*/


// get references to DOM elements
const numBtns = document.getElementById('numBtns');
const createBtn = document.getElementById('createBtn');
const listElems = document.getElementById('listElems');

// add event listener to create button
createBtn.addEventListener('click', () => {
  // get number of buttons to create
  const num = parseInt(numBtns.value);

  // create new row element
  const newRow = document.createElement('div');
  newRow.classList.add('row');

  // create specified number of button elements
  for (let i = 0; i < num; i++) {
    const newBtn = document.createElement('button');
    newBtn.textContent = `Button ${i+1}`;
    newBtn.addEventListener('click', () => {
      newBtn.remove();
    });

    // create element to display number
    const numElem = document.createElement('span');
    numElem.textContent = `${i+1}. `;
    numElem.classList.add('num');
    newRow.appendChild(numElem);

    // add button to row
    newRow.appendChild(newBtn);

    // add line break
    newRow.appendChild(document.createElement('br'));
  }

  // add row element to list
  listElems.appendChild(newRow);

  // clear input
  numBtns.value = '';
});







