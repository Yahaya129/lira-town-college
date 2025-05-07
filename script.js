// 1. FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle visibility of the answer
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

// 2. Contact Form Validation
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', function(event) {
  let isValid = true;
  
  // Check if all required fields are filled
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  
  if (!name.value.trim()) {
    alert("Please enter your name.");
    isValid = false;
  } else if (!email.value.trim() || !validateEmail(email.value.trim())) {
    alert("Please enter a valid email address.");
    isValid = false;
  } else if (!message.value.trim()) {
    alert("Please enter a message.");
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});

// Simple email validation function
function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailPattern.test(email);
}

// 3. Gallery Lightbox (optional)
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    openLightbox(img.src, img.alt);
  });
});

function openLightbox(imageSrc, imageAlt) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');

  // Create an image element for the lightbox
  const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = imageAlt;
  
  // Create a close button
  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    document.body.removeChild(lightbox);
  });

  // Append elements to the lightbox container
  lightbox.appendChild(img);
  lightbox.appendChild(closeButton);

  // Append lightbox to the body
  document.body.appendChild(lightbox);
}
