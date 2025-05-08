import '../css/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Restore preference on load
  if (localStorage.getItem('theme') === 'dark') {
    root.classList.add('dark');
  }

  toggleBtn?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    console.log("changing class, isDark: ", isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

