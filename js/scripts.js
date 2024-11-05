document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Handle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.dropdown-menu');

        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Adjust menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropdown-menu').style.display = '';
            });
        }
    });
});
// Simple event listener for the dropdown menu
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseover', () => {
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.style.display = 'block';
      });

      dropdown.addEventListener('mouseout', () => {
          const menu = dropdown.querySelector('.dropdown-menu');
          menu.style.display = 'none';
      });
  });
});

// <!------------ popular places and Testimonial section------------>

let testimonialIndex = 0;
let slideIndex = 0;
showTestimonials();
showSlides();

// Testimonials auto-scroll
function showTestimonials() {
let testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach((testimonial, index) => {
    testimonial.style.display = "none";
});
testimonialIndex++;
if (testimonialIndex > testimonials.length) {testimonialIndex = 1}
testimonials[testimonialIndex - 1].style.display = "block";
setTimeout(showTestimonials, 10000); // Switch every 3 seconds
}

// Functionality for clicking the dots
function currentSlide(n) {
testimonialIndex = n - 1;
showTestimonials();
}

// Popular Places auto-scroll
function showSlides() {
let slides = document.querySelectorAll('.place-card');
slides.forEach((slide, index) => {
    slide.style.display = "none";
});
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}
slides[slideIndex - 1].style.display = "block";
setTimeout(showSlides, 10000); // Switch every 3 seconds
}

// Manual controls for Popular Places
function prevPlace() {
slideIndex -= 2;
if (slideIndex < 0) slideIndex = document.querySelectorAll('.place-card').length - 1;
showSlides();
}

function nextPlace() {
showSlides();
}

// counter secti0n 

       // Select all elements with the class "number"
       const counters = document.querySelectorAll('.number');

       counters.forEach(counter => {
           counter.innerText = '0';
       
           const updateCounter = () => {
               const target = +counter.getAttribute('data-target');
               const current = +counter.innerText;
       
               // Adjust the increment based on the target
               const increment = target / 200;
       
               if (current < target) {
                   counter.innerText = `${Math.ceil(current + increment)}`;
                   setTimeout(updateCounter, 10);
               } else {
                   counter.innerText = target; // Ensure the final number is exactly the target
               }
           };
       
           updateCounter();
       });
       

// view room 

function changeImage(imageSrc) {
    const image = document.getElementById('mainImage');
    if (image) {
      image.src = imageSrc;
    } else {
      console.error('Element with id "mainImage" not found');
    }
  }

// View room end 

//  Animation

window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.section');
    elements.forEach(function(el) {
      let position = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      
      if (position < windowHeight - 50) {
        el.classList.add('slide-left');
        // or use slide-right class for some elements
      }
    });
  });
  






