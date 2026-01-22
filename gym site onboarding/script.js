// small JS for demo interactivity (mobile menu + landing form)
document.addEventListener('DOMContentLoaded', function() {
  // year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = y;
  const yearEl2 = document.getElementById('year2');
  if (yearEl2) yearEl2.textContent = y;

  // mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      if (navList) navList.style.display = expanded ? 'flex' : 'block';
    });
  }

  // Landing: open form
  const openFormBtn = document.getElementById('openForm');
  const bookingSection = document.getElementById('booking');
  const cancelBtn = document.getElementById('cancelForm');
  if (openFormBtn && bookingSection) {
    openFormBtn.addEventListener('click', function() {
      bookingSection.classList.remove('hidden');
      bookingSection.setAttribute('aria-hidden', 'false');
      bookingSection.scrollIntoView({behavior: 'smooth', block: 'center'});
      // focus first field for accessibility
      const first = bookingSection.querySelector('input, textarea, select');
      if (first) first.focus();
    });
  }
  if (cancelBtn && bookingSection) {
    cancelBtn.addEventListener('click', function(){
      bookingSection.classList.add('hidden');
      bookingSection.setAttribute('aria-hidden', 'true');
      // return to top of landing hero
      const heading = document.querySelector('.landing-hero');
      if (heading) heading.scrollIntoView({behavior:'smooth'});
    });
  }

  // Form submit (client side only) - simulate success and clear the form
  const leadForm = document.getElementById('leadForm');
  const formMessage = document.getElementById('formMessage');
  if (leadForm) {
    leadForm.addEventListener('submit', function(e){
      e.preventDefault();
      // very light validation
      const fullname = leadForm.fullname.value.trim();
      const phone = leadForm.phone.value.trim();
      if (!fullname || !phone) {
        formMessage.style.color = 'crimson';
        formMessage.textContent = 'Please fill in your name and phone.';
        return;
      }
      // simulate submission
      formMessage.style.color = 'green';
      formMessage.textContent = 'Thanks! Your free week booking request was received. We will contact you soon.';
      leadForm.reset();
      // here you would call your backend or zapier/email provider
    });
  }

});
