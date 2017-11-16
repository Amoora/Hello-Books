import { getObjectId, dummyData } from '../models/dummyData ';

const addReviewToBook = (book) => {
  book.reviews = [];
  const allReviews = dummyData.reviews;
  for (let reviewId in allReviews) {
    if (allReviews[reviewId].bookId === book.id) {
      book.reviews.push(allReviews[reviewId]);
    }
  }
};

export default class Book {
  constructor(args) {
    const fields = ['title', 'description', 'author', 'publisher', 'Year', 'borrowed'];
    const errors = [];
    const dataType = {title:'string', description:'string', author: 'string', publisher: 'string',Year:'number',orrowed:'number'};
    
    
}
}
