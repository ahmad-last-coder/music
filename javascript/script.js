// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  let clientName = document.getElementById("name");
  let clientEmail = document.getElementById("email");
  let clientMsg = document.getElementById("message");
  let msgAlert = document.querySelector(".msg-alert");
  let toggleMenu = document.querySelector(".toggle-menu");
  let mobileLinks = document.querySelector(".mobile-links");

  toggleMenu.addEventListener("click", ()=>{
    if (mobileLinks.style.display === "none"){
      mobileLinks.style.display = "flex"
    }else{
      mobileLinks.style.display = "none"
    }
  })
  

  // Function to check if an element is in the viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && 
      rect.bottom >= 0
    );
  };

  const navLinks = document.querySelectorAll('a[href^="#"]');

  // Add click event listeners to each link
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default anchor behavior

      // Get the target section ID from the href attribute
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // Align the top of the section with the top of the viewport
        });
      }
    });
  });

  // Function to add the 'animate' class to elements in the viewport
  const handleScroll = () => {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('animate'); // Add 'animate' class only when in viewport
      }
    });
  };

  // Run handleScroll on page load and on scroll
  handleScroll();
  window.addEventListener('scroll', handleScroll);

  // Form submission handling
  document.getElementById("submitButton").addEventListener("click", (event) => {
    event.preventDefault();
    verifyForm();
  });

  function verifyForm() {
    if (clientName.value === "" || clientEmail.value === "" || clientMsg.value === "") {
      msgAlert.style.opacity = 1;
      msgAlert.innerText = "Please enter all fields";
      msgAlert.style.color = "red";
      setTimeout(() => {
        msgAlert.style.opacity = 0;
        defaultMsgAlert();
      }, 2000);
    } else {
      clientName.value = ""
      clientEmail.value = ""
      clientMsg.value = ""
      setTimeout(()=>{
        msgAlert.style.opacity = 1;
        setTimeout(()=>{
          msgAlert.style.opacity = 0;
        },3000)
      },1000)
      
    }
  }

  function defaultMsgAlert() {
    setTimeout(() => {
      msgAlert.style.opacity = 0;
      msgAlert.style.color = "green";
      msgAlert.innerText = "Message sent successfully!";
    }, 1000);
  }
});