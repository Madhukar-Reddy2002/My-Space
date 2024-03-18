// Select the nav-icon element
const navIcon = document.getElementById('ham');
function setTheme(theme) {document.body.className = theme;}

function toggleNav() {
  document.body.classList.toggle('nav-open');
}
navlink.addEventListener('click', toggleNav);
  
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
  const body = document.body;
  const currentTheme = body.classList[0];

  body.classList.remove(currentTheme);

  if (currentTheme === 'theme-summer') {
    body.classList.add('theme-winter');
  } else if (currentTheme === 'theme-winter') {
    body.classList.add('theme-autumn');
  } else {
    body.classList.add('theme-summer');
  }
});

function filterProjects(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (cardCategory === category || category === 'all') {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

function showAllProjects() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
      card.style.display = 'block';
  });
}

function toggleThemeSwitchers() {
  const themeSwitchers = document.getElementById('themeSwitchers');
  themeSwitchers.classList.toggle('hidden');
}

function setTheme(theme) {
  document.body.className = theme;
  // Close the theme switchers after selecting a theme
  toggleThemeSwitchers();
}


// GSAP Animation using ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for the hero section