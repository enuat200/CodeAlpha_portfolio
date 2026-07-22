document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.page-section');

  function setActiveLink() {
    let currentId = sections[0].id;
    const scrollPos = window.scrollY + 120; // offset for sticky navbar

    sections.forEach(section => {
      if (section.offsetTop <= scrollPos) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${currentId}`
      );
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink(); // run once on load
});