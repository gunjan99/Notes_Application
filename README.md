# Notes_Application

##Dependencies to install:
1. bcryptjs : version 2.4.3
2. body-parser : version 1.19.0
3. core-js : version 3.6.
4. express : version 4.17.1
5. express-messages : version 1.0.1
6. express-validator : version 5.3.1
7. fs : version 0.0.1-security
8. jsonwebtoken : version 8.5.1
9. mongoose : version 5.9.7
10. path : version 0.12.7
11. pdf-creator-node : version 1.4.1
12. pdfkit : version 0.11.0
13. pug : version 2.0.4
14. save : version 2.4.0

## How to Run(on Postman):

1. Home page is on the url: localhost:3000/
2. To create a note send POST request on url: localhost:3000/notes with 'title' and 'content' as the required fields.
3. To modify a note send PUT request on url: localhost:3000/notes/<note-id> with 'title' and 'content' as the required fields.
4. To delete a note send DELETE request on url: localhost:3000/notes/<note-id>
5. To print a HTML file for all the notes send GET request on url: localhost:3000/notes and the output will be output.pdf file.
6. To register a user send POST request on url: localhost:3000/user/signup with username, email and password as the required fields
7. To login a user send POST request on url: localhost:3000/user/login with email and password as the required fields 

