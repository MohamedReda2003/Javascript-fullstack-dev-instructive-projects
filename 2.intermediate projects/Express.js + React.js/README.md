# About the projects containing "Express.js+React.js"

Here we will see how to set up the project folder so that you can run it on your machine.
(The following commands are for Windows users, you might find some minor changes in other systems).

### 1. Set up the project folders:
As you see, I have already organized the files into 2 folders: `server` and `client`

### 2. Set up the server:
Open your terminal, navigate to the server folder we have created recently, and then run the following commands:
```
npm init -y
npm i express
npm i nodemon -D
```


### 3. Set up the client folder:
Now navigate to the client folder, and run the following command in order to install all the dependencies:
```
npm install
```
and inside the `package.json` in the `client` folder add the following:
![package.json Screenshot after changes](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/908024fd-53d7-46cc-a0c0-8dca990f370f)
*Try keeping the same port between the server.js and this package.json proxy

### 4. Run the server
Navigate in the command prompt to the server folder and run the following command:
```
npm run dev
```
then  open a new terminal and access the `client` folder path to run the command:
```
npm start
```
and here we go!