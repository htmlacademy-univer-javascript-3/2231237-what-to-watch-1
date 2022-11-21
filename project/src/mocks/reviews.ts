import {Review} from '../types/review';

const reviews: Review[] = [
  {
    id: 1,
    text: "Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed films in years.",
    date: 'Sun Nov 15 2022 23:59:59 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.9,
    user: {
      id: 1,
      name: 'Kate Muir'
    }
  },
  {
    id: 2,
    text: "Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. \"The Grand Budapest Hotel\" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.",
    date: 'Sun Nov 15 2022 23:59:58 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.0,
    user: {
      id: 2,
      name: 'Bill Goodykoontz'
    }
  },
  {
    id: 3,
    text: "I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.",
    date: 'Sun Nov 15 2022 23:59:57 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 8.0,
    user: {
      id: 3,
      name: 'Amanda Greever'
    }
  },
  {
    id: 4,
    text: "The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.",
    date: 'Sun Nov 15 2022 23:59:56 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 7.2,
    user: {
      id: 4,
      name: 'Matthew Lickona'
    }
  },
  {
    id: 5,
    text: "It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.",
    date: 'Sun Nov 15 2022 23:59:55 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 7.6,
    user: {
      id: 5,
      name: 'Paula Fleri-Soler'
    }
  },
  {
    id: 6,
    text: "It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.",
    date: 'Sun Nov 15 2022 23:59:53 GMT+0500 (Екатеринбург, стандартное время)',
    rating: 7.2,
    user: {
      id: 5,
      name: 'Paula Fleri-Soler'
    }
  }
];

export default reviews;
