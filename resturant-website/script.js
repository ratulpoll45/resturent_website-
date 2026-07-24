let topButton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

};

topButton.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Theme Toggle
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

};

// Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});

// Contact Form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    try {

        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            contactForm.reset();
        } else {
            alert(data.message);
        }

    } catch (error) {

        console.error(error);
        alert("Server connection failed.");

    }

});

// Booking Form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const bookingData = {
            name: document.getElementById("bookingName").value.trim(),
            email: document.getElementById("bookingEmail").value.trim(),
            phone: document.getElementById("bookingPhone").value.trim(),
            date: document.getElementById("bookingDate").value,
            time: document.getElementById("bookingTime").value,
            guests: document.getElementById("bookingGuests").value
        };

        try {

            const response = await fetch("http://localhost:3000/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookingData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message);
                bookingForm.reset();
            } else {
                alert(result.message);
            }

        } catch (error) {

            console.error(error);
            alert("Server Error");

        }

    });

}

// Scroll Animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
// ===============================
// Load Menu From Database
// ===============================

async function loadMenu() {

    try {

        const response = await fetch("http://localhost:3000/api/menu");

        const menu = await response.json();

        const menuContainer = document.getElementById("menuContainer");

        menuContainer.innerHTML = "";

        menu.forEach((item) => {

            menuContainer.innerHTML += `

                <div class="menu-card">

                    <img src="${item.image}" alt="${item.name}">

                    <h3>${item.name}</h3>

                    <p>${item.description}</p>

                    <h4>₹${item.price}</h4>

                    <button>Order Now</button>

                </div>

            `;

        });

    } catch (error) {

        console.error("Menu Error:", error);

    }

}

loadMenu();