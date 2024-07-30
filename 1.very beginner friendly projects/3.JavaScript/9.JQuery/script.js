// JQuery is an advanced method used to simplify HTML DOM Manipulation, Event Handling, Animations, and Ajax.

$(document).ready(function(){
  // Add some text inside the empty paragraph in the html file (a simple greeting sentence)
  const time = new Date().getHours();
  const greeting_with_ternary_operator = time < 10 ? "Good morning" : (time < 20 ? "Good day" : "Good evening");
  $("#demo").html(`${greeting_with_ternary_operator} world!`);

  // Create a new heading to the page
  const heading = $("<h1>This is a new page title made by the JS script</h1>");
  $("body").prepend(heading);
  // To add an element to the bottom of the document, instead of prepend use append

  // Change an already existing element, we have in the a Python logo in the img tag in our HTML code, we will change it with JS logo instead:
  $("#coding-img").attr("src", "https://i1.wp.com/www.keesmel.com/wp-content/uploads/2020/09/js-logo.png?fit=500%2C500");
  $("#coding-img").attr("alt", "Js logo");

  // to change the position of the h1 element:
  let h1_in_top = true;
  window.add_a_title_to_the_top_of_the_page = function(){
      if (h1_in_top) {
          $("body").append($("h1"));
          h1_in_top = false;
          $(".btn").text("Put the h1 element on the top");
      } else {
          $("body").prepend($("h1"));
          h1_in_top = true;
          $(".btn").text("Put the h1 element on the bottom");
      }
  };

  // to change the background color:
  let changed_colors = false;
  $("#color").click(function(){
      if (changed_colors) {
          $("#coding-img").css("background", "white");
          $("#color").text("Change background color");
          changed_colors = false;
      } else {
          $("#coding-img").css("background", "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)");
          $("#color").text("Restore the default background");
          changed_colors = true;
      }
  });

  // to change the style of the paragraph text we added earlier:
  $("#demo").css({
      "font-family": "Lucida Console, Courier New, monospace",
      "padding": "90px",
      "background-color": "yellow"
  });

  // DOM events: mouse over and mouse out
  const btn_with_mouse = $("<button>Mouse cursor is Over Me</button>");
  $("body").append(btn_with_mouse);
  btn_with_mouse.css({
      "padding": "30px",
      "margin": "100px"
  });
  btn_with_mouse.on("mouseover", function() {
      $(this).text("Thank you");
  });
  btn_with_mouse.on("mouseout", function() {
      $(this).text("Mouse cursor is Over Me");
  });

  // Event listener for the time button
  $("#mytimeBtn").on("click",function(){
      $("#time").text(Date());
      const new_btn = $("<button>Hide time</button>");
      $("#time").append(new_btn)
      new_btn.css({
        "padding":"25px",
        "background":"red",
        "margin": "50px"
      })
      // This button will erase the time element:
      new_btn.click(function(){
        $("#time").empty();
    });
  });
});

/* a small reminder:
  # is used to identify the id attribute of an element;
  . is used to identify the class attribute of an element
*/