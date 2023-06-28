// Change background color of arrow when mouse button presses down on div
var arrowDiv = document.getElementById('down-arrow');

arrowDiv.addEventListener('mousedown', function() {
    arrowDiv.style.backgroundColor = 'hsl(0, 0%, 8%)';
});
  
arrowDiv.addEventListener('mouseup', function() {
    arrowDiv.style.backgroundColor = 'hsl(259, 100%, 65%)';
});

// Display age in years, months, and days after submitting a valid date through the form
function displayAge() {
    
}

// Receive validation errors if:
    // Any field is empty when the form is submitted
    // The day number is not between 1-31
    // The month number is not between 1-12
    // The year is in the future
    // The date is invalid e.g. 31/04/1991 (there are 30 days in April)

// Bonus: See the age numbers animate to their final number when the form is submitted
