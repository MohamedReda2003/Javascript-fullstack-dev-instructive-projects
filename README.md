
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


## About the projects containing "React.js"
  While surfing the presented projects, you will find some of them about "react.js" and "express.js". 
Here we will see how to set up the project folder so that you can run it on your machine.
(The following commands are for Windows users, you might find some minor changes in other systems).

### 1.Create a folder for your project:
You can name it whatever you prefer, for example: "Project"
### 2.Create two folders inside "Project":
the first folder is named "client", the second one is named "server"
![created folders](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/7449984f-d388-48a1-af34-8eec0a7063ee)
### 3.Set up the server:
Open your terminal, navigate to the server folder we have created recently, then run the following commands:
```
npm init -y
npm i express
npm i nodemon -D
```
After running these command, you will find a new file created inside the server folder, named "package.json"

![package.json Screenshot before changes](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/250b840f-bb0c-4e08-82a0-8e0cf0c39c43)

then you must apply some changes on this file like below:
![package.json Screenshot after changes](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/707b7def-0bef-48dc-9d24-d8c37e55cfbe)

*Try keeping the same port between the server.js and this package.json proxy
### 4.Set up the client folder:
Now navigate to the client folder, and run the following command:
```
npx create-react-app .
```
after running the command and accessing the folder, you must find a file called "package.json" where you will add a proxy definition line as below:
![package.json Screenshot before changes](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/09ef01fd-fa90-4fde-9cb3-a76ea267373a)

![package.json Screenshot after changes](https://github.com/MohamedReda2003/Javascript-fullstack-dev-instructive-projects/assets/61638355/8f5589b8-7064-49aa-8cef-27cfe03423f0)
### 5.Let's set up all the project!
Now, head to the project in the repository that you want to work on, search for the "server.js" file, then go to the client folder, and open the "public" folder inside the GitHub project, download the file "index.html" and "styles.css" if found to the "public" folder inside the "client" folder in your project, then download all the JavaScript files in the GitHub project to the "src" folder that can be found in the "client" folder.
### 6.Run the server
Navigate in the commad prompt to the server folder and run the following command:
```
npm run dev
```
and here we go!