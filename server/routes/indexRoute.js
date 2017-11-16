
// Api home
router.get('/api/v1', (req, res) => {
  res.status(200).json({ message: 'Welcome to hello books library' });
});


router.route('/books')
  .get(booksController.getBook)
  .post(booksController.addBook);

// Get all returned  books for admin to display
router.get('/books/return', booksController.getreturnedBooks);

router.route('/books/:id')
  .put( booksController.modifyBook)
  .get( booksController.getAbook)

// redirect every other address
router.route('*')
  .post((req, res) => {
    res.send('This is an invalid route');
  })
  .get((req, res) => {
    res.send('This is an invalid route');
  });

export default  router;
