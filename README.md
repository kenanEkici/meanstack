# Setup guide

### Make sure you have mongodb installed and running 

##### Steps:

Go to <b>C:\Program Files\MongoDB\Server\3.6\bin></b>.
Run both mongod.exe and mongo.exe in this directory. 
Don't close the terminal and keep them running!

### Create a database "heroes" in mongodb

##### Steps: 

Navigate to the terminal where are running mongod.exe.
Type in the command <b>use heroes</b> and press enter.
With <b>show dbs</b> you can confirm that you have created the database.

### Run the NodeJS app 

##### Steps:

Navigate to the root directory of the NodeJS project and execute <b>npm install</b>.
This will install packages according to the package.JSON.
Run <b>npm start</b> after to run the NodeJS app and keep it running!

### Run the Angular app

##### Steps: 

Navigate to the root of the Angular project and execute <b>npm install</b>.
Run <b>ng serve -o</b> to run the application.

### Test the CRUD features

##### Steps:

A webpage will open after running the Angular app. The <b>/list</b> route should contain no heroes at first until you add them.
Adding a hero requires you to log in. After adding a hero, click on the name of a Hero to view details or update/remove it.

# Possible issues

If the requests are taking the first time you start the projects, restart the NodeJS app and try again.
###
For CORS issues, create an issue of the exact http status code or error.
###
Most issues will be the result of MongoDB connection error, so check and debug your MongoDB connection and make sure you have created a database and can successfully connect to one. 
