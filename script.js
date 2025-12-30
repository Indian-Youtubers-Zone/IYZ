document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const themeCheckbox = document.getElementById('themeCheckbox');
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Theme Logic
    const savedTheme = localStorage.getItem('iyz-theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    if(themeCheckbox) themeCheckbox.checked = (savedTheme === 'light');

    if (themeCheckbox) {
        themeCheckbox.onchange = () => {
            const next = themeCheckbox.checked ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', next);
            localStorage.setItem('iyz-theme', next);
        };
    }

    // Sidebar Toggle Function
    const toggleSidebar = (e) => {
        if (e) e.stopPropagation();
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
        burger.classList.toggle('active'); // This is critical for the X animation
    };

    if (burger) {
        burger.onclick = toggleSidebar;
    }

    if (overlay) {
        overlay.onclick = toggleSidebar;
    }

    // Close when clicking a link
    document.querySelectorAll('.side-link').forEach(link => {
        link.onclick = () => {
            if (sidebar.classList.contains('open')) toggleSidebar();
        };
    });
});
