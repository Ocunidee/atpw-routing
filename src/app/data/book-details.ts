import { BookDetail } from '../models/book-detail'


export const bookDetails = new Map<number, BookDetail>([
  [
    1,
    {
      id: 1,
      title: 'Name of the Wind',
      author: {
        name: 'Patrick Rothfuss',
        id: 1
      },
      editor: 'DAW Books',
      parutionYear: '2007'
    }
  ],
  [
    2,
    {
      id: 2,
      title: 'The Wise Man\'s Fear',
      author: {
        name: 'Patrick Rothfuss',
        id: 1
      },
      editor: 'DAW Books',
      parutionYear: '2011'
    }
  ],
  [
    3,
    {
      id: 3,
      title: 'Words of Radiance',
      author: {
        name: 'Brandon Sanderson',
        id: 2
      },
      editor: 'Tor Books',
      parutionYear: '2014'
    }
  ],
  [
    4,
    {
      id: 4,
      title: 'Oathbringer',
      author: {
        name: 'Brandon Sanderson',
        id: 2
      },
      editor: 'Tor Books',
      parutionYear: '2017'
    }
  ],
  [
    5,
    {
      id: 5,
      title: 'The Last Wish',
      author: {
        name: 'Andrzej Sapkowski',
        id: 3
      },
      editor: 'superNOWA',
      parutionYear: '1993'
    }
  ],
  [
    6,
    {
      id: 6,
      title: 'The Eye of the World',
      author: {
        name: 'Robert Jordan',
        id: 4
      },
      editor: 'Tor Books',
      parutionYear: '1990'
    }
  ]
])
