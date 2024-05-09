// function signIn() {
//   alert("Sign In button clicked!");
//   // Add your sign-in logic here
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const bookingForm = document.getElementById("bookingForm");

//   bookingForm.addEventListener("submit", function (event) {
//     event.preventDefault();

//     // You can add your booking logic here
//     // For example, you can retrieve values like this:
//     const partySize = document.getElementById("partySize").value;
//     const date = document.getElementById("date").value;
//     //const time = document.getElementById("time").value;

//     // You can then send these values to your server or perform any other actions.
//     console.log("Party Size:", partySize);
//     console.log("Date:", date);
//     //console.log("Time:", time);
//   });
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const seats = document.querySelectorAll('.seat, .topseat');
//   const partySizeInput = document.getElementById('partySize');

//   let partySize = 1;

//   // Event listener for party size input change
//   partySizeInput.addEventListener('change', function() {
//     partySize = parseInt(this.value);
//     updateSeatSelection();
//   });

//   // Event listener for seat selection
//   seats.forEach(seat => {
//     seat.addEventListener('click', function() {
//       if (this.classList.contains('selected-seat') && !this.classList.contains("reserved") ) {
//         this.classList.remove('selected-seat');
//       } else {
//         if (countSelectedSeats() < partySize && !this.classList.contains("reserved") ) {
//           this.classList.add('selected-seat');
//         } else  {
//           if(this.classList.contains("reserved") ){
//             alert(`Seat  is already reserved.`);
//           } else
//           alert(`You can select maximum ${partySize} seats.`);
//         }
//       }
//     });
//   });

//   // Function to update seat selection based on party size
//   function updateSeatSelection() {
//     seats.forEach(seat => {
//       seat.classList.remove('selected-seat');
//     });
//   }

//   // Function to count selected seats
//   function countSelectedSeats() {
//     let count = 0;
//     seats.forEach(seat => {
//       if (seat.classList.contains('selected-seat')) {
//         count++;
//       }
//     });
//     return count;
//   }
// });


// document.addEventListener("DOMContentLoaded", function () {
//   // Select the book table button
//   const bookTableBtn = document.getElementById("bookTableBtn");

//   // Add click event listener to the book table button
//   bookTableBtn.addEventListener("click", function () {
//       // Check if party size and date fields are filled out properly
//       const partySize = document.getElementById("partySize").value;
//       const date = document.getElementById("date").value;
      
//       // Validate if party size and date are not empty
//       if (partySize && date) {
//           // If valid, allow the user to book the table
//           alert("Table booked!");
//           // Reload the page after the message is popped up
//           location.reload();
//       } else {
//           // If invalid, show an alert message to fill out the required fields
//           alert("Please fill out the party size and date fields.");
//       }
//   });
// });


//6 april ficxinf please selct seat:
function signIn() {
  alert("Sign In button clicked!");
  // Add your sign-in logic here
}

document.addEventListener("DOMContentLoaded", function () {
  const bookingForm = document.getElementById("bookingForm");

  bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const partySize = document.getElementById("partySize").value;
    const date = document.getElementById("date").value;
    
    // Validate form values
    if (!partySize || !date) {
      alert("Please fill out the party size and date fields.");
      return;
    }

    // You can then send these values to your server or perform any other actions.
    console.log("Party Size:", partySize);
    console.log("Date:", date);
    //console.log("Time:", time);
  });

  const seats = document.querySelectorAll('.seat, .topseat');
  const partySizeInput = document.getElementById('partySize');

  let partySize = 1;

  // Event listener for party size input change
  partySizeInput.addEventListener('change', function() {
    partySize = parseInt(this.value);
    updateSeatSelection();
  });

  // Event listener for seat selection
  seats.forEach(seat => {
    seat.addEventListener('click', function() {
      if (!this.classList.contains("reserved")) {
        if (countSelectedSeats() < partySize) {
          this.classList.toggle('selected-seat');
        } else {
          alert(`You can select maximum ${partySize} seats.`);
        }
      } else {
        alert(`Seat ${this.dataset.seatName} is already reserved.`);
      }
    });
  });

  // Function to update seat selection based on party size
  function updateSeatSelection() {
    seats.forEach(seat => {
      seat.classList.remove('selected-seat');
    });
  }

  // Function to count selected seats
  function countSelectedSeats() {
    let count = 0;
    seats.forEach(seat => {
      if (seat.classList.contains('selected-seat')) {
        count++;
      }
    });
    return count;
  }

  // Select the book table button
  const bookTableBtn = document.getElementById("bookTableBtn");

  // Add click event listener to the book table button
  bookTableBtn.addEventListener("click", function () {
    // Check if party size and date fields are filled out properly
    const partySize = document.getElementById("partySize").value;
    const date = document.getElementById("date").value;

    // Validate if party size and date are not empty
    if (!partySize || !date) {
      // If invalid, show an alert message to fill out the required fields
      alert("Please fill out the party size and date fields.");
    } else {
      // If valid, allow the user to book the table
      alert("Table booked!");
      // Reload the page after the message is popped up
    }
  });
});
