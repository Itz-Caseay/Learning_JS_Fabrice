//Names of the buttons to click to show form package
const showSquare = document.getElementById('sqre')
const showRect = document.getElementById('rec')
const showTri = document.getElementById('tri')
const showCir = document.getElementById('cir')

//Get all forms
const square = document.getElementById('square')
const rectangle = document.getElementById('rectangle')
const triangle = document.getElementById('triangle')
const circle = document.getElementById('circle')

//Making the buttons to display a specific form
showSquare.addEventListener('click', () => {
  square.style.display = 'block';
  rectangle.style.display = 'none';
  triangle.style.display = 'none';
  circle.style.display = 'none';
});

showRect.addEventListener('click', () => {
  square.style.display = 'none';
  rectangle.style.display = 'block';
  triangle.style.display = 'none';
  circle.style.display = 'none';
});

showTri.addEventListener('click', () => {
  square.style.display = 'none';
  rectangle.style.display = 'none';
  triangle.style.display = 'block';
  circle.style.display = 'none';
});

showCir.addEventListener('click', () => {
  square.style.display = 'none';
  rectangle.style.display = 'none';
  triangle.style.display = 'none';
  circle.style.display = 'block';
});

//function to calculate different areas
function calculateSqr() {
  const side = document.getElementById('side');
  const answer = document.getElementById('ans');
  
  answer.textContent = `Your area is: ${side.value*side.value}`;
}

function calculateRec() {
  const length = document.getElementById('length')
  const width = document.getElementById('width')
  const answer2 = document.getElementById('ans1')
  
  answer2.textContent = `Your area is: ${length.value*width.value}`;
}

function calculateCir() {
  const radius = document.getElementById('radius');
  const area = document.getElementById('circlearea')
  
  area.textContent = `Your area is: ${Math.floor(Math.PI*radius.value*radius.value)}`
}

function calculateTri() {
  const base = document.getElementById('base');
  const height = document.getElementById('height')
  const area = document.getElementById('ans2')
  
  area.textContent = `Your area is: ${base.value*height.value/2}`
}