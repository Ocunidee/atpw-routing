import { AuthorDetail } from '../models/author-detail'
import { books } from '../data/book-list'

export const authorDetails = new Map<number, AuthorDetail>([
  [
    1,
    {
      id: 1,
      name: 'Patrick Rothfuss',
      nationality: 'American',
      birthYear: '1973',
      books: books.filter(book => book.author === 'Patrick Rothfuss')
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'Brandon Sanderson',
      nationality: 'American',
      birthYear: '1975',
      books: books.filter(book => book.author === 'Brandon Sanderson')
    }
  ],
  [
    3,
    {
      id: 3,
      name: 'Andrzej Sapkowski',
      nationality: 'Polish',
      birthYear: '1948',
      books: books.filter(book => book.author === 'Andrzej Sapkowski')
    }
  ],
  [
    4,
    {
      id: 4,
      name: 'Robert Jordan',
      nationality: 'American',
      birthYear: '1948',
      books: books.filter(book => book.author === 'Robert Jordan')
    }
  ]
])
