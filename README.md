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
  
## API Description:

1. `/notes`
  - Method: `POST`
  - Description: You can create a new note using this.
  - Params: You have to add the following parameters to create a new note
    - `title` : If you do not add this then new note with title 'Untitled note' will be created.
    - `content` : This is required parameter. If you do not add this error will arise and new note will not be created.
  - Result: New note will be added to the database.
  
2. `/notes/<note-id>`
  - Method: `PUT`
  - Description: You can update the note with id equal to `note-id` using this.
  - Params: You have to add the following parameters to create a new note
    - `title` : You can update the title for the note using this parameter.
    - `content` : You can update the content of the note using this parameter.
  - Result: The note with id equal to `note-id` will be updated in the database.
  
3. `/notes/<note-id>`
  - Method: `DELETE`
  - Description: You can delete the note with id equal to `note-id` using this.
  - Params: None
  - Result: The note with id equal to `note-id` will be deleted from the database.

4. `/notes`
  - Method: `GET`
  - Description: You can get the JSON object and PDF file containing all the notes using this.
  - Params: None
  - Result: JSON object containing all the notes along with `output.pdf` file containg all the notes will be saved in the local folder.
  
5. `/user/signup`
  - Method: `POST`
  - Description: You can create a new user using this.
  - Params: You have to add the following parameters to create a new user. All the parameters are required and if not provided error will arise while creating a new user.
    - `username` : Specify username for the new user.
    - `email` : Specify a valid email id. For example :- `*****@****.com`
    - `password` : Specify a password for the new user to login.
  - Result: New user will be added to the database.

6. `/user/login`
  - Method: `POST`
  - Description: You can login into your account using this.
  - Params: You have to add the following parameters to create a new note. All the parameters are required and if not provided error will arise while logging in.
    - `email` : Specify the email id of your account.
    - `password` : Specify the password for the user to login.
  - Result: If the credentials are correct user will be logged into their account.
