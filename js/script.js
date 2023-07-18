// Business Logic  ---------
// Ticket constructor function
function Ticket(movieName, timeOfDay, age) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.age = age;
}

// Prototype method to calculate ticket price
Ticket.prototype.calculatePrice = function () {
  const basePrice = 10; // Regular ticket price

  if (this.movieName.includes("First Release") && this.age >= 60) {
    return 13;
  }

  // Check if the movie is a non-"first-release" movie
  if (this.movieName.includes("First Release")) {
    return 15;
  }

  // Apply discounts for matinee and senior tickets
  if (this.timeOfDay === "matinee" && this.age >= 60) {
    return basePrice - 4;
  }

  if (this.timeOfDay === "matinee") {
    return basePrice - 2;
  }

  if (this.timeOfDay === "regular" && this.age >= 60) {
    return basePrice - 2;
  }

  return basePrice;
};

// User Interface Logic ---------
// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get user inputs
  const movieName = $("#movieName").val();
  const timeOfDay = $("#timeOfDay").val();
  const age = parseInt($("#age").val());

  // Create a new ticket object
  const ticket = new Ticket(movieName, timeOfDay, age);

  // Calculate ticket price
  const ticketPrice = ticket.calculatePrice();

  // Display the result
  const resultElement = $("#result");
  resultElement.text(`The ticket price for ${ticket.movieName} is $${ticketPrice}`);
}

// Add event listener to the form
$(document).ready(function () {
  $("#ticketForm").on("submit", handleFormSubmit);
});
