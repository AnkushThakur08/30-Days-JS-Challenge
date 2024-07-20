// Task 5 : Create a Nested Object with name and array of books
const library = [
  {
    name: "The Shimla Library",
    books: [
      {
        title: "The PARA SF Operative",
        author: "Swapnil Pandey",
        year: 2015,
      },
      {
        title: "The Accidental Prime Minister",
        author: "Yash",
        year: 2020,
      },
      {
        title: "5 AM CLUB",
        author: "Rohit",
        year: 2024,
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Ankush",
        year: 2011,
      },
    ],
  },
  {
    name: "The Chandigarh Library",
    books: [
      {
        title: "Heritage of Shimla",
        author: "Swapnil Pandey",
        year: 2020,
      },
      {
        title: "Heritage of British",
        author: "Bipin Chandra",
        year: 1998,
      },
      {
        title: "How to influence People",
        author: "Robert Haddon",
        year: 2001,
      },
    ],
  },
  {
    name: "The Himachal Library",
    books: [
      {
        title: "The Gandhi JI",
        author: "AAM Admi party",
        year: 2010,
      },
      {
        title: "GC Leong",
        author: "Amit Shah",
        year: 2020,
      },
      {
        title: "How to Crack UPSC",
        author: "Robin Sharma",
        year: 2005,
      },
    ],
  },
  {
    name: "The HPU Library",
    books: [
      {
        title: "Who to win World Cup",
        author: "MS Dhoni",
        year: 2007,
      },
      {
        title: "The India History",
        author: "NCERT",
        year: 1998,
      },
      {
        title: "How to be learn Coding",
        author: "Hitesh Choudhary ",
        year: 2025,
      },
    ],
  },
];

console.log(library);

// Task 6 : access & log the name of the library and titles of all the books
const finalResult = library.map((item) => {
  return {
    name: item.name,
    books: item.books.map((book) => book.title),
  };
});

console.log(finalResult);
