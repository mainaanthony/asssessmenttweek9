// const {getAllBooks, getBookById, getAllMembers, getMemberById, createNewBook, createNewMember, borrowBook,returnBook, getMembersWithBooksBorrowed, postUser, loginUser} = require ('../controllers/booksController.js')
// // , getSalesPerYear

const express = require('express')

const router = express.Router()


const sendMail = require("../utils/sendMail")
// router.post('/users', postUser)
// router.post('/users/login', login)
// router.get('/books', getAllBooks)
// router.get('/books/:book_id', getBookById)
// router.post('/books', createNewBook)
// router.post('/borrow/:MemberID/:BookID', borrowBook)
// router.get('/members/books-borrowed', getMembersWithBooksBorrowed);
// router.post('/return/:MemberID/:BookID', returnBook);
// router.get('/members', getAllMembers)
// router.get('/members/:member_id', getMemberById)
// router.post('/members', createNewMember)
// router.get('products/sales/:page/:limit/:year', getSalesPerYear)

router.post('/sendmail', (req, res)=>{
    sendMail()
    res.send("I tried to send the email go to the console and take a peek")
})







module.exports =router
