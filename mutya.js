const mutyaBooks = [
  {
    id: 1,
    title: "Noli Me Tangere",
    author: "Jose Rizal",
    category: "Filipino Literature",
    status: "Available"
  },
  {
    id: 2,
    title: "El Filibusterismo",
    author: "Jose Rizal",
    category: "Filipino Literature",
    status: "Borrowed"
  },
  {
    id: 3,
    title: "Florante at Laura",
    author: "Francisco Balagtas",
    category: "Poetry",
    status: "Available"
  },
  {
    id: 4,
    title: "Ibong Adarna",
    author: "Anonymous",
    category: "Philippine Literature",
    status: "Reserved"
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    status: "Available"
  },
  {
    id: 6,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    category: "Fiction",
    status: "Available"
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Adventure",
    status: "Borrowed"
  },
  {
    id: 8,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Classic Literature",
    status: "Available"
  },
  {
    id: 9,
    title: "Mga Ibong Mandaragit",
    author: "Amado V. Hernandez",
    category: "Filipino Literature",
    status: "Reserved"
  },
  {
    id: 10,
    title: "Banaag at Sikat",
    author: "Lope K. Santos",
    category: "Filipino Literature",
    status: "Available"
  },
  {
    id: 11,
    title: "Alamat ng Gubat",
    author: "Bob Ong",
    category: "Fiction",
    status: "Available"
  },
  {
    id: 12,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    status: "Borrowed"
  }
];


function searchMutyaBooks(searchText = "", filterStatus = "All") {
  const query = searchText.trim().toLowerCase();

  return mutyaBooks.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.category.toLowerCase().includes(query);

    const matchesStatus =
      filterStatus === "All" || book.status === filterStatus;

    return matchesSearch && matchesStatus;
  });
}  