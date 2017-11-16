import { dummyData } from '../models/dummyData';


const showBook = (req, res, next) => {
    const bookId = req.params.bookId;
    if (dummyData.books.hasOwnProperty(bookId)) {
        next();
    } else {
       return res.status(404).json({message: "book does not exist"})
    }
}

export default showBook;