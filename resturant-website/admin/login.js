async function loadBookings() {

    try {

        const response = await fetch("http://localhost:3000/api/booking");

        const result = await response.json();

        const bookings = result.data;

        // Booking Count
        document.getElementById("bookingCount").innerText = bookings.length;

    } catch (error) {

        console.error(error);

    }

}

loadBookings();