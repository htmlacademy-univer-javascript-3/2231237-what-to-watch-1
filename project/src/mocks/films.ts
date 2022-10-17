import {Film} from '../types/film';

const films: Film[] = [
  {
    id: '00000001',
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    description: 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to ' +
      'rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, ' +
      'who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love ' +
      'and loyalty are tested, even among the truest friends and family, in an increasingly divided ' +
      'wizarding world',
    releaseYear: 2018,
    genres: ['Adventure', 'Family', 'Fantasy'],
    rating: 6.5,
    starring: ['Eddie Redmayne', 'Katherine Waterson', 'Dan Fogler'],
    poster: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    directors: ['David Yates'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000002',
    name: 'Bohemian Rhapsody',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to ' +
      'their famous performance at Live Aid (1985).',
    releaseYear: 2018,
    genres: ['Biography', 'Drama', 'Music'],
    rating: 7.9,
    starring: ['Rami Malek', 'Lucy Boyton', 'Peter Morgan'],
    poster: 'img/bohemian-rhapsody.jpg',
    directors: ['Bryan Singler'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000003',
    name: 'Macbeth',
    description: 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become ' +
      'King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes ' +
      'the throne for himself.',
    releaseYear: 2015,
    genres: ['History', 'Drama', 'War'],
    rating: 6.6,
    starring: ['Michael Fassbender', 'Marion Cotillard', 'Jack Madigan'],
    poster: 'img/macbeth.jpg',
    directors: ['Justin Kurzel'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000004',
    name: 'Aviator',
    description: 'A biopic depicting the early years of legendary director and aviator Howard Hughes\' ' +
      'career from the late 1920s to the mid 1940s.',
    releaseYear: 2004,
    genres: ['Biography', 'Drama'],
    rating: 7.5,
    starring: ['Leonardo DiCaprio', 'Cate Blanchett', 'Kate Beckinsale'],
    poster: 'img/aviator.jpg',
    directors: ['Martin Scorsese'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000005',
    name: 'We need to talk about Kevin',
    description: 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things ' +
      'he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond ' +
      'anything anyone imagined.',
    releaseYear: 2011,
    genres: ['Drama', 'Mystery', 'Thriller'],
    rating: 7.5,
    starring: ['Tilda Swanton', 'John C. Reilly', 'Erza Miller'],
    poster: 'img/we-need-to-talk-about-kevin.jpg',
    directors: ['Lynne Ramsay'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000006',
    name: 'What We Do in the Shadows',
    description: 'Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of ' +
      'modern life, like paying rent, keeping up with the chore wheel, trying to get into nightclubs, ' +
      'and overcoming flatmate conflicts.',
    releaseYear: 2014,
    genres: ['Comedy', 'Horror'],
    rating: 7.6,
    starring: ['Jemaine Clement', 'Taika Waititi', 'Cori Gonzalez-Macuer'],
    poster: 'img/what-we-do-in-the-shadows.jpg',
    directors: ['Jemaine Clement', 'Taika Waititi'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000007',
    name: 'Revenant',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by ' +
      'a bear and left for dead by members of his own hunting team.',
    releaseYear: 2015,
    genres: ['Action', 'Adventure', 'Drama'],
    rating: 8,
    starring: ['Leonardo DiCaprio', 'Tom Hardy', 'Will Poulter'],
    poster: 'img/revenant.jpg',
    directors: ['Alejandro G. Iñárritu'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  },
  {
    id: '00000008',
    name: 'Johnny English',
    description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, ' +
      'yet unintelligent spy, becomes Britain\'s only spy.',
    releaseYear: 2003,
    genres: ['Action', 'Adventure', 'Comedy'],
    rating: 6.2,
    starring: ['Rowan Atkinson', 'John Malkovich', 'Natalie Imbruglia'],
    poster: 'img/johnny-english.jpg',
    directors: ['Peter Howitt'],
    source: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
  }
];

export default films;
