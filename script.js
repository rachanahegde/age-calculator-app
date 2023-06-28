// Change color of arrow when it's clicked on

// function changeBackground() {
//   var arrowDiv = document.getElementById('down-arrow'); // Retrieve div element
//   arrowDiv.style.backgroundColor = 'hsl(0, 0%, 8%)'; // Set background color to black
// }

var arrowDiv = document.getElementById('down-arrow');

// Change background color when mouse button presses down on div
arrowDiv.addEventListener('mousedown', function() {
    arrowDiv.style.backgroundColor = 'hsl(0, 0%, 8%)';
  });
  
  arrowDiv.addEventListener('mouseup', function() {
    arrowDiv.style.backgroundColor = 'hsl(259, 100%, 65%)';
  });