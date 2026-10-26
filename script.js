const books = [
    {
        id: 1,
        title: "Noli Me Tangere",
        author: "Jose Rizal",
        status: "Available"
    },
    {
        id: 2,
        title: "El Filibusterismo",
        author: "Jose Rizal",
        status: "Borrowed"
    },
    {
        id: 3,
        title: "Florante at Laura",
        author: "Francisco Balagtas",
        status: "Available"
    },
    {
        id: 4,
        title: "Ibong Adarna",
        author: "Traditional",
        status: "Reserved"
    },
    {
        id: 5,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        status: "Available"
    }
];

let selectedFilter = "All";
const reservations = [];

const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const reservationList = document.getElementById("reservationList");

function displayBooks() {
    const keyword = searchInput.value.toLowerCase().trim();

    const filteredBooks = books.filter(book => {
        const matchesSearch =
            book.title.toLowerCase().includes(keyword) ||
            book.author.toLowerCase().includes(keyword);

        const matchesStatus =
            selectedFilter === "All" ||
            book.status === selectedFilter;

        return matchesSearch && matchesStatus;
    });

    bookList.innerHTML = "";

    if (filteredBooks.length === 0) {
        bookList.innerHTML = "<p>No books found.</p>";
        return;
    }

    filteredBooks.forEach(book => {
        const card = document.createElement("article");
        card.className = "book-card";

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const status = document.createElement("p");
        status.className = "status " + book.status;
        status.textContent = "Status: " + book.status;

        const button = document.createElement("button");
        button.textContent =
            book.status === "Available"
                ? "Reserve Book"
                : book.status;

        button.disabled = book.status !== "Available";

        button.addEventListener("click", () => {
            reserveBook(book.id);
        });

        card.append(title, author, status, button);
        bookList.appendChild(card);
    });
}

function filterBooks(status) {
    selectedFilter = status;
    displayBooks();
}

function reserveBook(bookId) {
    const book = books.find(item => item.id === bookId);

    if (!book || book.status !== "Available") {
        alert("This book is no longer available.");
        return;
    }

    const studentName = prompt("Enter your name:");

    if (!studentName || !studentName.trim()) {
        alert("Reservation cancelled. Please enter your name.");
        return;
    }

    const pickupDeadline = new Date();
    pickupDeadline.setDate(pickupDeadline.getDate() + 3);

    const reservation = {
        bookTitle: book.title,
        studentName: studentName.trim(),
        deadline: pickupDeadline.toLocaleDateString(),
        status: "Pending librarian approval"
    };

    reservations.push(reservation);

    // Mark the book as reserved to prevent duplicate reservations.
    book.status = "Reserved";

    displayBooks();
    displayReservations();

    alert("Reservation submitted successfully!");
}

function displayReservations() {
    reservationList.innerHTML = "";

    if (reservations.length === 0) {
        reservationList.textContent = "No reservations yet.";
        return;
    }

    reservations.forEach(reservation => {
        const item = document.createElement("div");
        item.className = "reservation-item";

        const title = document.createElement("h3");
        title.textContent = reservation.bookTitle;

        const student = document.createElement("p");
        student.textContent =
            "Student: " + reservation.studentName;

        const deadline = document.createElement("p");
        deadline.textContent =
            "Pickup deadline: " + reservation.deadline;

        const status = document.createElement("p");
        status.textContent =
            "Status: " + reservation.status;

        item.append(title, student, deadline, status);
        reservationList.appendChild(item);
    });
}

searchInput.addEventListener("input", displayBooks);

displayBooks();
displayReservations();