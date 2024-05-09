
// 5 april one 

document.addEventListener("DOMContentLoaded", async function () {
    const seats = document.querySelectorAll('.seat');
    const partySizeInput = document.getElementById('partySize');
    const dateInput = document.getElementById('date');
    const timeSelect = document.getElementById('timeSelect');
    
    let partySize = 1;
    let selectedDate = '';
    let selectedTime = '';
    
    // Function to fetch reservation data from the server
    async function fetchReservations() {
      try {
        const response = await fetch('http://localhost:3000/reservations');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching reservations:', error);
        return [];
      }
    }
    
    // Function to update seat selection based on party size, date, and time slot
    async function updateSeatSelection() {
      const reservations = await fetchReservations();
      const selectedDateTime = selectedDate + '-' + selectedTime;
    
      seats.forEach(seat => {
        const seatNumber = seat.dataset.seatNumber;
        const isBooked = reservations.some(reservation => reservation.seat_number === parseInt(seatNumber) && reservation.date === selectedDate && reservation.time_slot === selectedDateTime);
    
        if (isBooked) {
          seat.classList.add('booked');
          seat.classList.remove('selected');
          seat.removeEventListener('click', handleSeatClick);
        } else {
          seat.classList.remove('booked');
          seat.addEventListener('click', handleSeatClick);
        }
      });
    }
    
    // Event listener for party size input change
    partySizeInput.addEventListener('change', function() {
      partySize = parseInt(this.value);
      updateSeatSelection();
    });
    
    // Event listener for date input change
    dateInput.addEventListener('change', function() {
      selectedDate = this.value;
      updateSeatSelection();
    });
    
    // Event listener for time slot select change
    timeSelect.addEventListener('change', function() {
      selectedTime = this.value;
      updateSeatSelection();
    });
    
    // Function to handle seat selection
    function handleSeatClick() {
      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
      } else {
        if (countSelectedSeats() < partySize) {
          this.classList.add('selected');
        } else {
          alert(`You can select maximum ${partySize} seats.`);
        }
      }
    }
    
    // Function to count selected seats
    function countSelectedSeats() {
      let count = 0;
      seats.forEach(seat => {
        if (seat.classList.contains('selected')) {
          count++;
        }
      });
      return count;
    }
    
    // Initial call to update seat selection based on default values
    updateSeatSelection();
  });
  

