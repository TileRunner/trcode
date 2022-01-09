# trcode
 Tile Runner code
# what
 The plan is React (node, nodejs, whatever) hosted on heroku for all my public stuff
# origins
* I created a local folder (c:\MyCode\TR)
* Using GitHub desktop I created a new repo called trcode selecting C:\Mycode\TR as the local folder
* Using Visual Code I:
** Opened folder C:\MyCode\TR\trcode
** Opened new terminal
** npx create-next-app trapp --use-npm
# commands from terminal
* From trcode folder, npm run start to run the server if you need the websocket stuff
* From trapp folder, npm run dev to run the app
* From trapp folder, npm run build and npm run export to build and export the app for production, then git push, then heroku deploy
* From trapp folder, npm start to run the app in production mode
* Per [heroku devcenter](https://devcenter.heroku.com/articles/logging), to see console.log output from deployed app:
<br>**heroku logs --app tilerunner --source app**
<br>To see the last N entries (20 in this example), add parameter **-n 20**
