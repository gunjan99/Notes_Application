# Notes_Application
## Description:
This is a simple note taking application based on node.js. This application includes APIs to provide you with the following functionalities: -
1. Creating User.
2. Logging in user.
3. Creating a note and saving it in the database.
4. Viewing all the saved notes.
5. Updating a note using the note id.
6. Deleting a note using the note id.
7. Printing all the notes to a pdf file in which all the notes are sorted by date and time.
## Dependencies to install:
You can install all the required dependencies of node.js using the following command: -
> npm install
## How to Run(on Postman):

1. Home page is on the url: localhost:3000/
2. To create a note send POST request on url: localhost:3000/notes with 'title' and 'content' as the required fields.
3. To modify a note send PUT request on url: localhost:3000/notes/<note-id> with 'title' and 'content' as the required fields.
4. To delete a note send DELETE request on url: localhost:3000/notes/<note-id>
5. To print a HTML file for all the notes send GET request on url: localhost:3000/notes and the output will be 'output.pdf' file.
6. To register a user send POST request on url: localhost:3000/user/signup with 'username', 'email' and 'password' as the required fields
7. To login a user send POST request on url: localhost:3000/user/login with 'email' and 'password' as the required fields 

