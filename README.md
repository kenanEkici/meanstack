1. Make sure you have mongodb installed and running 

Steps:

Go to C:\Program Files\MongoDB\Server\3.6\bin> 
run both mongod.exe and mongo.exe in this directory 
Don't close the terminal and keep them running!

2. Create a database "heroes" in mongodb

Steps: 

Navigate to the terminal where are running mongod.exe
Type in the command "use heroes" and press enter
With "show dbs" you can confirm that you have created the database

3. Run the NodeJS app 

Steps: 

Navigate to the root directory of the NodeJS project and execute "npm install"
This will install packages according to the package.JSON
Run "npm start" after to run the NodeJS app and keep it running!

4. Run the Angular app

Steps: 

Navigate to the root of the Angular project and execute "npm install" 
Run "ng serve -o" to run the application

5. Test the CRUD features

Steps:

A webpage will open after running the Angular app.
The /list route should contain no heroes at first until you add them
Adding a hero requires you to log in
After adding a hero, click on the name of a Hero to update/remove it
If the requests are taking too long then restart the NodeJS app!!
For CORS issues, Google is your best friend.