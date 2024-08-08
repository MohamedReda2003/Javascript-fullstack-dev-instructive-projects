
# Instructive projects about Javascript fullstack development
This repository contains a collection of twelve beginner and intermediate-level web development projects. These projects are designed to help developers practice and enhance their skills in various web development technologies and concepts, including:

#### -Flexbox:
  Learn how to create flexible and responsive layouts.

#### -CSS Grid:
  Explore advanced layout techniques for building complex grid-based designs.

#### -Media Queries:
  Implement responsive design principles to ensure your projects look great on all devices.

#### -jQuery:
  Enhance interactivity and DOM manipulation with this popular JavaScript library.

#### -Bootstrap:
  Utilize this powerful CSS framework for responsive and visually appealing designs.

#### -React.js:
  Develop dynamic and modern web applications using this powerful JavaScript library.

#### -Express.js:
  Build robust backend services with this minimalist web framework for Node.js.


## About the projects containing "Express.js+React.js"
  While surfing the presented projects, you will find some of them about "react.js" and "express.js". 
Here we will see how to set up the project folder so that you can run it on your machine.
(The following commands are for Windows users, you might find some minor changes in other systems).

### 1. Set up the project folders:
I advice you to rename the client folder to `client.0` and create a new folder named `client`

### 2. Set up the server:
Open your terminal, navigate to the server folder we have created recently, and then run the following commands:
```
npm init -y
npm i express
npm i nodemon -D
```


### 3. Set up the client folder:
Now navigate to the client folder, and run the following command:
```
npx create-react-app .
```
after running the command and accessing the folder, go back to the folder you downloaded `client.0` and copy all the files and folders in it, then paste them inside the `client` folder.

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
