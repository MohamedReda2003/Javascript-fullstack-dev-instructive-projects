//to add an some text inside the empty paragraph in the html file
const time = new Date().getHours();
const greeting_with_ternary_operator = time < 10 ? "Good morning" : (time < 20 ? "Good day" : "Good evening");
document.getElementById("demo").innerHTML = `${greeting_with_ternary_operator} world!`;

// to create a new element to the page, for example, we have this h1 element
const heading = document.createElement("h1");
heading.innerText = "This is a new page title made by the JS script";
document.body.prepend(heading);
// to add an element to the bottom of the document, instead of prepend use append

//to change an already existing element, for example, in the html file we have the link of the Python logo image, but we changed it here to show the JS logo instead, try to comment the following 2 lines to spot the difference:
document.getElementById("coding-img").src = "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500";
document.getElementById("coding-img").alt = "Js logo";
 

// here we will do something a little more advanced, we will create a function to change the 
h1_in_top = true;
function add_a_title_to_the_top_of_the_page(){
    if (h1_in_top===false){
        the_actual_top = document.getElementsByTagName("h1")[0];
        document.body.insertBefore(the_actual_top,document.body.children[0]);
        h1_in_top=true;
        document.getElementsByClassName("btn")[0].innerHTML = "Put the h1 element on the bottom";
    }
    else{
        
        the_actual_top = document.getElementsByTagName("h1")[0];
        document.body.insertBefore(the_actual_top,document.body.children[-1]);
        h1_in_top=false;
        document.getElementsByClassName("btn")[0].innerHTML = "Put the h1 element on the top";
    }
}

// next we will add a new function to the other button to manipulate the styles of an element, let's keep it basic and change only the background color:
changed_colors = false;
function change_colors(){
    if (changed_colors===false){
        document.getElementById("color").innerHTML = "Change backgound color";
        document.getElementById("coding-img").style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)";
        changed_colors=true;
    }
    else{
        document.getElementById("color").innerHTML = "Restore the default backgound";
        document.getElementById("coding-img").style.background = "white"; 
        changed_colors=false;
    }
}

//let's play around and change the style of the paragraph text we have added earlier:
document.getElementById("demo").style.fontFamily= "Lucida Console, Courier New, monospace";
document.getElementById("demo").style.padding = "90px";
document.getElementById("demo").style.backgroundColor="yellow";

// NOw let's see the DOM events:
function mouse_Over(element) {
    element.innerHTML = "Thank you";
}
  
function mouse_Out(element) {
    element.innerHTML = "Mouse cursor is Out of Me";
}
//let's create the button that we will link these functions with:
const btn_with_mouse = document.createElement("button");
btn_with_mouse.innerText = "Mouse cursor is Over Me";
document.body.append(btn_with_mouse);
btn_with_mouse.style.padding="30px";
btn_with_mouse.style.margin="100px";
btn_with_mouse.onmouseover = function() {
    mouse_Over(btn_with_mouse);
};
btn_with_mouse.onmouseout = function() {
    mouse_Out(btn_with_mouse);
};

//now let's see an event listener:
//here the event listener keep waiting for my click event
document.getElementById("mytimeBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("time").innerHTML = Date();
}