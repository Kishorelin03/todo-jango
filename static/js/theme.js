// static/js/theme-toggle.js

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById('themeToggle');
    const html = document.documentElement;

    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark-mode');
        if (toggleButton) {
            toggleButton.innerHTML = '<i class="fa fa-sun-o"></i> Light Mode';
        }
    }

    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            html.classList.toggle('dark-mode');
            if (html.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                toggleButton.innerHTML = '<i class="fa fa-sun-o"></i> Light Mode';
            } else {
                localStorage.setItem('theme', 'light');
                toggleButton.innerHTML = '<i class="fa fa-moon-o"></i> Dark Mode';
            }
        });
    }
});
