// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const ham = document.querySelector('.ham');
    const cross = document.querySelector('.cross');
    const nav = document.querySelector('.angel-nav-bar');
  
    ham.addEventListener('click', function() {
      nav.classList.toggle('angel-nav-bar-go');
      ham.style.display = 'none';
      cross.style.display = 'block';
    });
  
    cross.addEventListener('click', function() {
      nav.classList.toggle('angel-nav-bar-go');
      cross.style.display = 'none';
      ham.style.display = 'block';
    });
  });
  