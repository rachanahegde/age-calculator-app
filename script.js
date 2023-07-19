"use strict";

const arrowDiv = document.getElementById("down-arrow");
const resultDays = document.getElementById("result-days");
const resultMonths = document.getElementById("result-months");
const resultYears = document.getElementById("result-years");

arrowDiv.addEventListener("click", function () {
  displayAge();
});

// Display error to user
function displayErrorMessage(field, errorMessage) {
  document.getElementById(`${field}`).classList.add("empty-error");
  document.getElementById(`${field}-descrip`).style.color = "hsl(0, 65%, 67%)";
  document.getElementById(`${field}-error`).textContent = errorMessage;
}

// Remove error message
function removeErrorMessage(field) {
  document.getElementById(`${field}`).classList.remove("empty-error");
  document.getElementById(`${field}-descrip`).style.color = "hsl(0, 1%, 44%)";
  document.getElementById(`${field}-error`).textContent = "";
}

// Display age in years, months, and days after submitting a valid date through the form
function displayAge() {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // TODO - These variables are never used ---- delete them ?
  // const currentYear = new Date().getFullYear();
  // const currentMonth = new Date().getMonth() + 1; // Get the current month (returns a value from 0 to 11)
  // const currentDay = new Date().getDate();

  // Receive validation errors if any field is empty when the form is submitted
  if (!day || !month || !year) {
    if (!day) {
      displayErrorMessage("day", "This field is required");
    } else {
      removeErrorMessage("day");
    }

    if (!month) {
      displayErrorMessage("month", "This field is required");
    } else {
      removeErrorMessage("month");
    }

    if (!year) {
      displayErrorMessage("year", "This field is required");
    } else {
      removeErrorMessage("year");
    }
  } else {
    removeErrorMessage("day");
    removeErrorMessage("month");
    removeErrorMessage("year");
  }

  // Display error if day, month or year input fields aren't within specified bounds
  if (day !== "") {
    if (day < 1 || day > 31) {
      displayErrorMessage("day", "Must be a valid day");
    }
  }

  if (month !== "") {
    if (month < 1 || month > 12) {
      displayErrorMessage("month", "Must be a valid month");
    }
  }

  if (year !== "") {
    if (year.length > 4 || year.length < 4 || year > 2023) {
      displayErrorMessage("year", "Must be in the past");
    }
  }

  // Check if date is valid
  if (day !== "" && month !== "" && year !== "") {
    if (0 < day < 32 && 0 < month < 13 && year <= 2023) {
      // Check if user has entered a leading zero before modifying the day and month strings
      day = Number(day) < 10 && day[0] !== "0" ? "0" + day : day;
      month = Number(month) < 10 && month[0] !== "0" ? "0" + month : month;

      const dateString = `${year}-${month}-${day}`;
      const date = moment(dateString, "YYYY-MM-DD", true);
      if (!date.isValid()) {
        displayErrorMessage("day", "Must be a valid date");
        displayErrorMessage("month", "");
        displayErrorMessage("year", "");

        // Display age
      } else {
        // TODO uncomment the below line
        // const birthDate = new Date(`${year}-${month}-${day}`); // Convert birthdate to Date object
        const birthDate = new Date("1972-06-25"); // FOR TESTING

        const today = new Date(); // New Date object representing current date and time

        // Calculate age in years, months, and days
        let ageYears = today.getFullYear() - birthDate.getFullYear();
        let ageMonths = today.getMonth() - birthDate.getMonth();
        let ageDays = today.getDate() - birthDate.getDate();

        // Handle cases where birthday hasn't occurred in current year or current month
        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
          ageYears--;
          ageMonths += 12;
          const prevMonthDate = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            1
          );

          // Calculate number of days in previous month
          const prevMonthDays = new Date(
            prevMonthDate.getFullYear(),
            prevMonthDate.getMonth() + 1,
            0
          ).getDate();

          // Check if ageDays value is greater than current day value. If greater, subtract 1 from ageMonths and add number of days in previous month to ageDays
          if (ageDays < 0) {
            ageDays += prevMonthDays;
            ageMonths--;
          }
        }

        resultDays.textContent = ageDays;
        resultMonths.textContent = ageMonths;
        resultYears.textContent = ageYears;
      }
    }
  }
}

// TODO Fix the -7 that results when dad enters his birth date - june 25 1972
