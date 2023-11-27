// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

document.getElementById('downloadButton').addEventListener('click', function() {
  // Define the file URL (replace 'your_cv.pdf' with the actual CV file path)
  var cvFileUrl = 'Resume.pdf';

  // Create an invisible anchor element
  var a = document.createElement('a');
  a.style.display = 'none';

  // Set the anchor's 'href' attribute to the CV file URL
  a.href = cvFileUrl;

  // Set the 'download' attribute to specify the file name for the user
  a.download = 'Resume.pdf';

  // Append the anchor element to the document body
  document.body.appendChild(a);

  // Trigger a click event on the anchor element to initiate the download
  a.click();

  // Remove the anchor element from the document body
  document.body.removeChild(a);
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // You can add your JavaScript code here to handle form submission, e.g., sending data to a server.
  // For this example, we'll just show an alert.
  alert("Form submitted! You will be contacted shortly.");
});
