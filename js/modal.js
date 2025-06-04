// Modal functionality
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('contactModal');
  const contactBtns = document.querySelectorAll('#contactBtn, #heroContactBtn');
  const closeBtn = document.getElementById('closeModal');
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Open modal when contact buttons are clicked
  contactBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  // Close modal when 'x' is clicked
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    formMessage.textContent = '';
    form.reset();
  });

  // Close modal when clicking outside of it
  window.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
      formMessage.textContent = '';
      form.reset();
    }
  });

  // Handle form submission (mock)
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = 'Thank you! We'll be in touch soon.';
    form.reset();
    setTimeout(() => {
      modal.style.display = 'none';
      formMessage.textContent = '';
    }, 2000);
  });
});
