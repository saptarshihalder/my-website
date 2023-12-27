document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('nav a');

  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust the offset as needed
        behavior: 'smooth'
      });
    });
  });
});
