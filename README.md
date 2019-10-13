# nodeJs-express-mongodb-API
NodeJs (using express) API which retrieves data from mongodb and send the json file back



How to use this file:

1- Install Visual Studio Code
2- Install Mongodb
3- Add "Rest Client" plugin to Visual Studio Code.
4- Run this command to install packages "npm install"
5- Run "dbsesd.js" file using this command "node dbseed.js" to make and insert some data into database.
6- Run the server using this command "node app.js"
7- Use "http.http" file to send request to API & see the results.
8- For using "nearme" API you should run this command to create index for location "db.universities.createIndex({location:"2d"})"




About RestClient:
This is a http client, which allows you to send get and post request to API. You can send Json body to the API (like Postman) & receive json.
