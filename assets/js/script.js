// let scrollPercentage = () => {
//     let scrollProgress = document.getElementById("progress");
//     let progressValue = document.getElementById("progress-value");
//     let pos = document.documentElement.scrollTop;
//     let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrollValue = Math.round( pos * 100 / calcHeight);

//     scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, rgba(255, 255, 255, 0.2) ${scrollValue}%)`;
//     progressValue.textContent = `${scrollValue}%`;
// }

// window.onscroll = scrollPercentage;
// window.onload = scrollPercentage;

// contactBtn.addEventListener('click',()=>{
//     window.scrollTo(0,document.body.scrollHeight);
// })
// Navbar ScrollSpy
let sections= document.querySelectorAll('.page-scroll');
let navLinks= document.querySelectorAll('header ul li a');
let temp = sections[sections.length-1];

sections.forEach(section=>{
    section.addEventListener('click',()=>{
        let id= section.getAttribute('id');
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
    })
})

window.onscroll=()=>{

    sections.forEach(section=>{

        let top= window.scrollY;
        let offset = section.offsetTop;
        let height = section.offsetHeight;
        let id= section.getAttribute('id');
        let viewportHeight= window.innerHeight;
        let viewportWidth= window.innerWidth;
        let scrollheight= document.body.scrollHeight;
        if(top+ viewportHeight/2>=offset && top<offset+ height){
            flg=1;
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
        }
        if(top<100){
            let id="top";
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
        }

        if(viewportWidth<900){
        if((top+viewportHeight-scrollheight<=viewportWidth/10&&top+viewportHeight-scrollheight>0)||(scrollheight-top-viewportHeight<=viewportWidth/10&& scrollheight-top-viewportHeight>0)){
                let id="contact";
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.page[href*=' + id + ']').classList.add('active');
            })
            
        }
    }





    })
    
}
// Scroller fixed
var scrolBtn = document.querySelector("#myDIV");
window.addEventListener("scroll", function () {
  let offset;
  offset = window.pageYOffset;
  if (offset > 300) {
    scrolBtn.style.display = "block";
  }
  if (offset < 300) {
    scrolBtn.style.display = "none";
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const skillsSection = document.getElementById("skills");
    const skillBars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          skillBars.forEach((bar) => {
            const skillValue = bar.getAttribute("data-skill");
            bar.classList.add("multi-color"); // Add multi-color class for gradient
            bar.style.width = skillValue + "%"; // Set the width to the skill value
          });
          observer.unobserve(entry.target); // Stop observing after the animation starts
        }
      });
    });

    observer.observe(skillsSection);
  });
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get form input values
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validation patterns
    const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces allowed
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Basic email pattern

    // Validate name: no numbers or special characters
    if (!namePattern.test(name)) {
      alert("Please enter a valid name (letters and spaces only, no numbers).");
      return;
    }

    // Validate email: standard email format
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Ensure message is not empty
    if (message === "") {
      alert("Please enter a message.");
      return;
    }

    // If all validations pass, display success message
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.style.display = "block";
    responseMessage.textContent = "Message sent successfully!";

    // Clear the form inputs after successful submission
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";

    // Hide the success message after 5 seconds
    setTimeout(() => {
      responseMessage.style.display = "none";
    }, 5000);
  });

