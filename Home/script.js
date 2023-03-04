"use strict";
const nav = document.querySelector(".mobile-nav"),
  navMenuBtn = document.querySelector(".nav-menu-btn"),
  navCloseBtn = document.querySelector(".nav-close-btn"),
  navToggleFunc = function () {
    nav.classList.toggle("active");
  };
navMenuBtn.addEventListener("click", navToggleFunc),
  navCloseBtn.addEventListener("click", navToggleFunc);
const themeBtn = document.querySelectorAll(".theme-btn");
for (let i = 0; i < themeBtn.length; i++)
  themeBtn[i].addEventListener("click", function () {
    document.body.classList.toggle("dark-theme"),
      document.body.classList.toggle("light-theme");
    for (let i = 0; i < themeBtn.length; i++)
      themeBtn[i].classList.toggle("light"),
        themeBtn[i].classList.toggle("dark");
  });


  // CREATE POST
$(document).ready(function(){
  $('.write').click(function(){
    $.ajax({
      type: "GET",
      url: "/Form/index.html",
      data: {},
      dataType: "html",
      success: function(data){
        // $('body').html(data);
        window.location('/Form/index.html')
      }
    });
  });
});

$('.admin').click(function(){
  $.ajax({
    type: "GET",
    url: "/Admin/index.html",
    data: {},
    success: function(){
      // window.location = '/Admin/index.html'
      console.log("Succesfull")
      $('window').load('/Admin/index.html');
    }
  });
});


// FOR DELETING THE POST
$("document").ready(function () {
  let count = 100;
  $(".post-comments").html(`comment ${count}`);

  $(".delete").click(function () {
    var text = prompt("ENTER THE SECRET KEY", "");
    if (text == "root") {
      console.log("Deleted Successfully");
      $(".post-container").hide();
    } else {
      console.log("INCORRECT!");
    }
  });
});
