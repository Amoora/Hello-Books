import Book from '../models/book';

export const addBook = (req, res) => {
        const book = new Book(req.body);
        book.create();
        return res.status(201).json({ 
            message: `${book.title} book has been added`, book 
        });


export const getAbook = (req, res) => {
        const book = Book.getById(req.params.bookId);
        return res.status(200).json({ book });
    } 
};

export const modifyBook = (req, res) => {
        const book = Book.updateById(req.params.bookId, req.body)
        return res.status(200).json({book})
        
    }

export const getBook = (req, res) => {
    const books = Book.getAll();
    return res.status(200).json({books});
};
