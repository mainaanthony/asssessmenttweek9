// const mssql = require('mssql')
// const config = require('../config')
// const bcrypt = require('bcrypt')


// const getAUser = require('../utils/getAUser')

// const {tokenGenerator, tokenVerifier} = require('../utils/tokens')
// const { newUserValidator } = require('../Schema/Validators/newUserValidator')


// //when dealing with databases functions are async


// // async function getSalesPerYear(req, res){

// //     let {page, limit, year} = req.params
    
// //     let sql = await mssql.connect(config)
// //     if(sql.connected){
// //        let results = await sql.request()
// //          .input("_year" , Number(year))
// //          .input("_limit" , Number(limit))
// //          .input("_page" , Number(page))
// //          .execute("sales.pagenated_sales")//provide name of procedure
// //          res.json({

// //                         success: true,
// //                         message: "sales for year 2018" + year,
// //                          results:{
// //              metadata: {

// //               page,
// //               record: results.recordset.length
                 
// // },
// // data: results.recordset

// // }
        
// // }) 

// // }
    
// // }


// async function  getBookById(req, res){
  
//     let { book_id } = req.params
//     let sql =await mssql.connect(config)

//     if(sql.connected){

//         let results = await sql.query(`SELECT * from dbo.Books where BookID = ${Number(book_id)}`)
//         let products = results.recordset[0];
//         res.status(200).json({
//            success: true,
//            message: "fetched products successfully",
//            results: products
          
//      })
//      }else{
     
//            res.status(500).send("Internal server error")
         
//      }
     
   
// }
 

// //we will be using the getAllBooks function to show how we can use the token for protected routes
// // So after we get the token we go to postman and  select Authorization and choose the Bearer token 
// //Paste your token in te token field that appears


// async function getAllBooks(req, res){
//  let token = req.headers('authorization').split(" ")[1]


//  let user = await tokenVerifier(token)

//   let sql =  await mssql.connect(config)
//   //check in the case we use the if(user.roles === admin)//look into a screenshot I have taken
//   if(sql.connected){

//    let results = await sql.query(`SELECT *
//    FROM dbo.Books
//    WHERE Status = 'Available'`)
//    let products = results.recordset;
//    res.json({
//       success: true,
//       message: "fetched products successfully",
//       results: products
     
// })
// }else{

//       res.status(500).send("Internal server error")
    
// }

// }



// async function createNewBook(req, res) {
//     try {
//       const { BookID, Title, Author, PublicationYear, Status } = req.body;
  
//       // Perform validation checks if needed
  
//       // Connect to the database
//       await mssql.connect(config);
  
//       // Insert the new book into the "Books" table
//       await mssql.query`
//         INSERT INTO dbo.Books (BookID, Title, Author, PublicationYear, Status)
//         VALUES (${BookID}, ${Title}, ${Author}, ${PublicationYear}, ${Status})
//       `;
  
//       res.status(201).json({ message: 'Book added successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Internal server error');
//     } finally {
//       // Close the database connection
//       mssql.close();
//     }
//   }




// //some crazy code


// // async function createNewBook(req, res){
// //     let sql =  await mssql.connect(config)
// //     if(sql.connected){

// //     try {
// //         const { title, author, publicationYear } = req.body;
// //         console.log(req.body)
// //         const status = 'Available';
// //         const query = 'INSERT INTO Books (Title, Author, PublicationYear, Status) VALUES (?, ?, ?, ?)';
// //         await sql.query(query, [title, author, publicationYear, status]);
// //         res.status(201).json({ message: 'Book created successfully.' });
// //       } catch (error) {
// //         console.error('Error creating a new book: ', error);
// //         res.status(500).json({ error: 'An error occurred while creating the book.' });
// //       }

// // }

// // }

// async function createNewMember(req, res) {
//       try {
//         const { MemberID, Name, Address, ContactNumber } = req.body;
    
//         // Perform validation checks if needed
    
//         // Connect to the database
//         await mssql.connect(config);
    
//         // Insert the new book into the "Books" table
//         await mssql.query`
//           INSERT INTO dbo.Members (MemberID, Name, Address, ContactNumber)
//           VALUES (${MemberID}, ${Name}, ${Address}, ${ContactNumber})
//         `;
    
//         res.status(201).json({ message: 'Member added successfully' });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal server error');
//       } finally {
//         // Close the database connection
//         mssql.close();
//       }
//     }





// async function getAllMembers(req, res){
//     let sql =  await mssql.connect(config)
//     if(sql.connected){
  
//      let results = await sql.query(`SELECT * from dbo.Members`)
//      let products = results.recordset;
//      res.json({
//         success: true,
//         message: "fetched products successfully",
//         results: products
       
//   })
//   }else{
  
//         res.status(500).send("Internal server error")
      
//   }
  
//   }
  

// //the present function of getting all members
// // 


// //new crazy get all members code
// async function getAllMembers(req, res) {
//   try {
//     let user = await tokenVerifier(token);

//     if (user.roles === 'admin') {
//       let sql = await mssql.connect(config);
//       let results = await sql.query(`SELECT * from dbo.Members`);
//       let products = results.recordset;
//       res.json({
//         success: true,
//         message: "fetched products successfully",
//         results: products
//       });
//     } else {
//       res.status(500).send("Internal server error");
//     }
//   } catch (error) {
//     if (error.message.includes('token') || error.message.includes('invalid')) {
//       res.json({
//         success: false,
//         message: 'Login again'
//       });
//     }
//   }
// }




// // Borrow a book
// // async function borrowBook(req, res) {
// //   try {
// //     const { MemberID, BookID } = req.params;

// //     await mssql.connect(config);

// //     // Check if the book is available
// //     const bookQuery = `SELECT Status FROM dbo.Books WHERE BookID = ${BookID}`;
// //     const bookResult = await mssql.query(bookQuery);
// //     const bookStatus = bookResult.recordset[0].Status;

// //     if (bookStatus === 'Available') {
// //       // Get the count of existing loans
// //       const countQuery = `SELECT COUNT(*) AS LoanCount FROM dbo.Loans`;
// //       const countResult = await mssql.query(countQuery);
// //       const loanCount = countResult.recordset[0].LoanCount;

// //       // Insert a new loan record with LoanID as LoanCount + 1
// //       const loanID = loanCount + 1;
// //       const loanQuery = `
// //         INSERT INTO dbo.Loans (LoanID, BookID, MemberID, LoanDate)
// //         VALUES (${loanID}, ${BookID}, ${MemberID}, GETDATE());
// //       `;
// //       await mssql.query(loanQuery);

// //       // Update the book status to 'Checked out'
// //       const updateQuery = `
// //         UPDATE dbo.Books SET Status = 'Checked Out' WHERE BookID = ${BookID}
// //       `;
// //       await mssql.query(updateQuery);

// //       res.json({ message: 'Book borrowed successfully.' });
// //     } else {
// //       res.status(400).json({ message: 'Book is not available for borrowing.' });
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).send('Internal server error');
// //   } finally {
// //     mssql.close();
// //   }
// // }


// // Return a book
// async function returnBook(req, res) {
//   try {
//     const { MemberID, BookID } = req.body;

//     await mssql.connect(config);

//     // Check if the member has borrowed the book
//     const loanQuery = `
//       SELECT * FROM dbo.Loans WHERE MemberID = ${MemberID} AND BookID = ${BookID}
//     `;
//     const loanResult = await mssql.query(loanQuery);
//     const loanExists = loanResult.recordset.length > 0;

//     if (loanExists) {
//       // Delete the loan record
//       const deleteQuery = `
//         DELETE FROM dbo.Loans WHERE MemberID = ${MemberID} AND BookID = ${BookID}
//       `;
//       await mssql.query(deleteQuery);

//       // Update the book status to 'Available'
//       const updateQuery = `
//         UPDATE dbo.Books SET Status = 'Available' WHERE BookID = ${BookID}
//       `;
//       await mssql.query(updateQuery);

//       res.json({ message: 'Book returned successfully.' });
//     } else {
//       res.status(400).json({ message: 'The member has not borrowed the book.' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   } finally {
//     mssql.close();
//   }
// }
    
//     async function getMembersWithBooksBorrowed(req, res) {
//       try {
//         let sql = await mssql.connect(config);
//         if (sql.connected) {
//           let results = await sql.request()
//             .query(`
//               WITH cte_books_borrowed (MemberID, Name)
//               AS
//               (
//                 SELECT 
//                   Members.MemberID,
//                   Members.Name 
//                 FROM Members
//                 INNER JOIN Loans 
//                   ON Members.MemberID = Loans.MemberID
//                 GROUP BY Members.MemberID, Members.Name
                
//               )
//               SELECT * FROM cte_books_borrowed;
//             `);
    
//           res.status(200).json(results.recordset);
//         } else {
//           console.error('Error getting members with books borrowed: Connection not established.');
//           res.status(500).json({ error: 'An error occurred while retrieving the data.' });
//         }
//       } catch (error) {
//         console.error('Error getting members with books borrowed:', error);
//         // Handle error
//         res.status(500).json({ error: 'An error occurred while retrieving the data.' });
//       } finally {
//         mssql.close();
//       }
//     }
    

//     // BorrowBookProcedure
    
    
//     // Endpoint to return a book
// //     router.post('/return', async (req, res) => {
// //       try {
// //         const { memberId, bookId } = req.body;
    
// //         // Check if the member has borrowed the book
// //         const checkLoanQuery = 'SELECT * FROM Loans WHERE MemberID = ? AND BookID = ?';
// //         const loanResults = await db.query(checkLoanQuery, [memberId, bookId]);
// //         if (loanResults.length === 0) {
// //           res.status(400).json({ error: 'The member has not borrowed the book.' });
// //           return;
// //         }
    
// //         // Delete the loan record
// //         const deleteLoanQuery = 'DELETE FROM Loans WHERE MemberID = ? AND BookID = ?';
// //         await db.query(deleteLoanQuery, [memberId, bookId]);
    
// //         // Update the book status to 'Available'
// //         const updateBookStatusQuery = 'UPDATE Books SET Status = "Available" WHERE BookID = ?';
// //         await db.query(updateBookStatusQuery, [bookId]);
    
// //         res.status(200).json({ message: 'Book returned successfully.' });
// //       } catch (error) {
// //         console.error('Error returning a book: ', error);
// //         res.status(500).json({ error: 'An error occurred while returning the book.' });
// //       }
// //     });



// //crazy borrow
// async function borrowBook(req, res) {
//   try {
//     const { MemberID, BookID } = req.params;

//     await mssql.connect(config);

//     const request = new mssql.Request();

//     // Execute the stored procedure
//     await request.input('MemberID', mssql.Int, MemberID)
//       .input('BookID', mssql.Int, BookID)
//       .execute('BorrowBook');

//     res.json({ message: 'Book borrowed successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   } finally {
//     mssql.close();
//   }
// }


// //Create or alter proc dbo.create_new_member(
// //     @FullName VarChar(50),
// //     @Address  VARCHAR(50),
// //     @ContactNumber INT,
// //     @password VARCHAR(255)

// // )
// // AS 
// //   BEGIN 
// //        INSERT INTO dbo.members VALUES (@FullName, @Address, @ContactNumber,@password )
// //   END 
     
// //   GO
 


// //from here this two will be created in the userControllers folder and userRoute.js 
// postUser: async(req, res)=>{
//    let user = req.body
//   // let salt = await bcrypt.genSalt(8),
//   // let hashed_pwd = await bcrypt.hash(user.Password, salt)


//   // let valid_user = newUserValidator(user) 
//   let {value} = newUserValidator(user)//we can just destructure this to get the value of what we are passing to the database in this case the fullName, contactNumber, address and password//remember we got rid of the if(sql.connected) block since by now we have handled all the errors and have a legit user
//   let hashed_pwd = await bcrypt.hash(user.Password, 8)



//   let sql = await mssql.connect(config)


//   try{


//     if(sql.connected){

//       let results = await sql.request()
//                        .input("FullName", value.FullName)
//                        .input("Address", value.Address)
//                        .input("ContactNumber", value.ContactNumber)
//                        .input("password", hashed_pwd)
//                        .execute("dbo.create_new_member")
   
   
//                        console.log(results)
//                         results.rowsAffected.length? res.send({success:true, message:'Saved User'}) : 
//                         res.send({success:false, message:'An error occurred'})
//                       }
      
   

//   }catch(error){
//      res.send(error.message)//don't ever return an error this way which is the error returned by the ode as this exposes some details

//   }



  




// }

// ///monit 35 t0 45

// loginUser: async(req, res)=>{
//        let { MemberID, Password} = req.body

//        try{
        
//            let user = await getAUser(MemberId)

//           if(user){
//             let passwords_match = await bcrypt.compare(Password, user.password)
            
//             if(passwords_match){
              
//              let token = await tokenGenerator({
//                MemberID:user.MemberID,
//                roles:"admin"

//              })
//               res.json({success: true, message: "logged in successfully"})
//             }else{

//               res.json({success: false, message: "wrong credentials"})
//             }
            
           
            
             
//           }else{
//             res.json({success: false, message: "No user found"})
//           }

          

//        }catch(error){


//        }

// }



// module.exports = {getAllBooks,  getBookById,  getMemberById, getAllMembers, createNewBook, createNewMember, borrowBook, returnBook, getMembersWithBooksBorrowed, postUser, loginUser}


// // , getSalesPerYear