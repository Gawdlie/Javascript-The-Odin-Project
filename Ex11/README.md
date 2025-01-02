You are given an array of objects that represent books with an author and a title that looks like this:

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
Your job is to write a function that takes the array and returns an array of titles:

getTheTitles(books) // ['Book','Book2']