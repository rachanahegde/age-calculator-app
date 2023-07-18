const arrowDiv = document.getElementById("down-arrow");
const resultDays = document.getElementById("result-days").textContent;
const resultMonths = document.getElementById("result-months").textContent;
const resultYears = document.getElementById("result-years").textContent;

arrowDiv.addEventListener("click", function () {
  //   arrowDiv.style.backgroundColor = "hsl(0, 0%, 8%)";
  displayAge();
});

// arrowDiv.addEventListener("mouseup", function () {
//   arrowDiv.style.backgroundColor = "hsl(259, 100%, 65%)";
// });

// Display required field error to user
function displayRequiredField(field, errorMessage) {
  document.getElementById(`${field}`).classList.add("empty-error");
  document.getElementById(`${field}-descrip`).style.color = "hsl(0, 65%, 67%)";
  document.getElementById(`${field}-error`).textContent = errorMessage;
}

function removeErrorMessage(field) {
  document.getElementById(`${field}`).classList.remove("empty-error");
  document.getElementById(`${field}-descrip`).style.color = "hsl(0, 1%, 44%)";
  document.getElementById(`${field}-error`).textContent = "";
}

// Display age in years, months, and days after submitting a valid date through the form
function displayAge() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const dateValue = `${year}-${month}-${day}`;
  const newDate = new Date(dateValue); // Create a new Date object from the input value

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Get the current month (returns a value from 0 to 11)
  const currentDay = new Date().getDate();

  if (!day || day < 1 || day > 31) {
    if (!day) {
      displayRequiredField("day", "This field is required");
    } else if (day > 31 || day < 1) {
      displayRequiredField("day", "Must be a valid day");
    }
  } else {
    removeErrorMessage("day");
  }

  if (!month || month > 12 || month < 1) {
    if (!month) {
      displayRequiredField("day", "This field is required");
    } else if (month > 12 || month < 1) {
      displayRequiredField("month", "Must be a valid month");
    }
  } else {
    removeErrorMessage("day");
  }

  if (!year || year > 2023) {
    if (!year) {
      displayRequiredField("year", "This field is required");
    } else if (year > 2023) {
      displayRequiredField("year", "Must be in the past");
    }
  } else {
    removeErrorMessage("day");
  }

  if (day && month && year && isNaN(newDate.getTime())) {
    displayRequiredField("day", "Must be a valid date");
    displayRequiredField("month", "");
    displayRequiredField("year", "");
  } else {
    removeErrorMessage("day");
    removeErrorMessage("month");
    removeErrorMessage("year");
  }

  // Receive validation errors if any field is empty when the form is submitted
  //   if (!day || !month || !year) {
  //     console.log("This is getting triggered");
  //     if (!day) {
  //       displayRequiredField("day", "This field is required");
  //     } else {
  //       removeErrorMessage("day");
  //     }

  //     if (!month) {
  //       displayRequiredField("month", "This field is required");
  //     } else {
  //       removeErrorMessage("month");
  //     }

  //     if (!year) {
  //       displayRequiredField("year", "This field is required");
  //     } else {
  //       removeErrorMessage("year");
  //     }
  //   } else {
  //     removeErrorMessage("day");
  //     removeErrorMessage("month");
  //     removeErrorMessage("year");
  //   }

  //   if (isNaN(newDate.getTime())) {
  //     displayRequiredField("day", "Must be a valid date");
  //   } else {
  //     removeErrorMessage("day");
  //   }

  // Receive validation errors if:
  // The day number is not between 1-31
  // The month number is not between 1-12
  // The year is in the future

  // The date is invalid e.g. 31/04/1991 (there are 30 days in April)
}

// Check that the UI looks good with error messages displayed for phone + tablet screen sizes

// Bonus: See the age numbers animate to their final number when the form is submitted
