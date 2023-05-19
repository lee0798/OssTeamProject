const ottLinks = document.querySelectorAll('.ottLink');
ottLinks.forEach(link => {
  link.addEventListener('click', () => {
    window.open(link.href, '_blank');
  });
});







