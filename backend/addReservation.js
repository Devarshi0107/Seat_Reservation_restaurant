// const { MongoClient, ObjectId } = require('mongodb');

// // Function to add event listeners for seat selection
// function addSeatSelectionListeners() {
//   document.querySelectorAll('.seat').forEach(seat => {
//     seat.addEventListener('click', function() {
//       const seatNumber = this.getAttribute('data-seat-name'); // Get the seat number from data-seat-name attribute
//       const name = "John Doe"; // Assuming you have a way to capture the user's name
//       const date = new Date(); // Use the current date for demonstration purposes
//       const timeSlot = "5-6";
//       bookSeat(name, date, timeSlot, seatNumber);
//     });
//   });
// }

// // Function to book a seat
// async function bookSeat(name, date, timeSlot, seatNumber) {
//   const uri = 'mongodb://localhost:27017'; // Your MongoDB connection URI
//   const client = new MongoClient(uri);

//   try {
//     await client.connect();

//     const db = client.db('seat_booking'); // Replace 'your_database_name' with your database name
//     const collection = db.collection('reservations'); // Collection for seat reservations

//     const reservationDocument = {
//       "_id": new ObjectId(),
//       "name": name,
//       "date": date,
//       "time_slot": timeSlot,
//       "seat_number": parseInt(seatNumber) // Convert seatNumber to integer before storing
//     };

//     await collection.insertOne(reservationDocument);

//     console.log("Reservation added successfully!");
//   } catch (error) {
//     console.error("Error adding reservation:", error);
//   } finally {
//     await client.close();
//   }
// }

// // Call the function to add seat selection listeners when the DOM is ready
// document.addEventListener('DOMContentLoaded', function() {
//   addSeatSelectionListeners();
// });


//date 4 april

// Function to add event listeners for seat selection
async function addSeatSelectionListeners() {
  document.querySelectorAll('.seat').forEach(async seat => {
    seat.addEventListener('click', async function() {
      const seatNumber = this.getAttribute('data-seat-name'); // Get the seat number from data-seat-name attribute
      const name = "John Doe"; // Assuming you have a way to capture the user's name
      const date = new Date(); // Use the current date for demonstration purposes
      const timeSlot = "5-6";

      // Check if the seat is already reserved
      const isSeatReserved = await checkSeatReservation(date, timeSlot, seatNumber);
      
      // If the seat is reserved, do not book it
      if (isSeatReserved) {
        console.log("Seat already reserved!");
        return;
      }

      // If the seat is not reserved, proceed with booking
      bookSeat(name, date, timeSlot, seatNumber);
    });
  });
}

// Function to check if a seat is already reserved
async function checkSeatReservation(date, timeSlot, seatNumber) {
  try {
    const response = await fetch(`/check-reservation?date=${date}&timeSlot=${timeSlot}&seatNumber=${seatNumber}`);
    const data = await response.json();
    console.log('seat reserved');

    return data.reserved; // true if seat is reserved, false otherwise
  } catch (error) {
    console.error("Error checking seat reservation:", error);
    return false; // Assume seat is not reserved in case of error
  }
}

// Function to book a seat
async function bookSeat(name, date, timeSlot, seatNumber) {
  // Your booking logic remains unchanged
}
