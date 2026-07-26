async function loadBookings() {

    try {

        const response = await fetch("https://resturent-website-sv01.onrender.com/api/booking");

        const result = await response.json();

        const bookings = result.data;

        // Booking Count
        document.getElementById("bookingCount").innerText = bookings.length;

    } catch (error) {

        console.error(error);

    }

}

loadBookings();