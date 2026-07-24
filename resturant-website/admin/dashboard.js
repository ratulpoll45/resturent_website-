// ==========================
// Load Bookings
// ==========================

async function loadBookings() {

    try {

        const response = await fetch("http://localhost:3000/api/booking");
        const result = await response.json();

        const bookings = result.data;

        document.getElementById("bookingCount").innerText = bookings.length;

        const table = document.getElementById("bookingTable");

        table.innerHTML = "";

        bookings.forEach((booking) => {

            table.innerHTML += `
                <tr>
                    <td>${booking.name}</td>
                    <td>${booking.email}</td>
                    <td>${booking.phone}</td>
                    <td>${booking.date}</td>
                    <td>${booking.time}</td>
                    <td>${booking.guests}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}


// ==========================
// Load Contacts
// ==========================

async function loadContacts() {

    try {

        const response = await fetch("http://localhost:3000/api/contact");
        const result = await response.json();

        const contacts = result.data;

        document.getElementById("contactCount").innerText = contacts.length;

        const table = document.getElementById("contactTable");

        table.innerHTML = "";

        contacts.forEach((contact) => {

            table.innerHTML += `
                <tr>
                    <td>${contact.name}</td>
                    <td>${contact.email}</td>
                    <td>${contact.message}</td>
                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}


// ==========================
// Load Menu
// ==========================

async function loadMenu() {

    try {

        const response = await fetch("http://localhost:3000/api/menu");

        const menu = await response.json();

        document.getElementById("menuCount").innerText = menu.length;

        const table = document.getElementById("menuTable");

        table.innerHTML = "";

        menu.forEach((item) => {

            table.innerHTML += `
                <tr>

                    <td>${item.name}</td>

                    <td>₹${item.price}</td>

                    <td>

                        <button onclick="editMenu('${item._id}','${item.name}',${item.price})">
                            Edit
                        </button>

                        <button onclick="deleteMenu('${item._id}')">
                            Delete
                        </button>

                    </td>

                </tr>
            `;

        });

    } catch (error) {

        console.log(error);

    }

}
const menuForm = document.getElementById("menuForm");

menuForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("foodName").value;
    const description = document.getElementById("foodDescription").value;
    const category = document.getElementById("foodCategory").value;
    const price = document.getElementById("foodPrice").value;
    const image = document.getElementById("foodImage").value;

    try {

        const response = await fetch("http://localhost:3000/api/menu", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                name,
                description,
                category,
                price,
                image

            })

        });

        const result = await response.json();

        if (response.ok) {

            alert("Food Added Successfully");

            menuForm.reset();

            loadMenu();

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);

    }

});

// ==========================
// Delete Food
// ==========================

async function deleteMenu(id) {

    if (!confirm("Delete this food?")) return;

    const response = await fetch(`http://localhost:3000/api/menu/${id}`, {

        method: "DELETE"

    });

    if (response.ok) {

        alert("Food Deleted");

        loadMenu();

    }

}


// ==========================
// Edit Food
// ==========================

function editMenu(id, name, price) {

    document.getElementById("editMenuForm").style.display = "block";

    document.getElementById("editId").value = id;

    document.getElementById("editName").value = name;

    document.getElementById("editPrice").value = price;

}


// ==========================
// Update Food
// ==========================

const editForm = document.getElementById("editMenuForm");

editForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const id = document.getElementById("editId").value;

    const name = document.getElementById("editName").value;

    const price = document.getElementById("editPrice").value;
    console.log({
    id,
    name,
    price
    });
    const response = await fetch(`http://localhost:3000/api/menu/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            name,
            price

        })

    });
   console.log(response.status);
    if (response.ok) {

        alert("Food Updated");

        editForm.reset();

        editForm.style.display = "none";

        loadMenu();

    }

});


// ==========================
// Load Dashboard
// ==========================

loadBookings();

loadContacts();

loadMenu();