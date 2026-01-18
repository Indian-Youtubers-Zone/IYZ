document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const themeCheckbox = document.getElementById('themeCheckbox');
    const burger = document.getElementById('burger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Sidebar Content Logic
    const sideBottom = document.querySelector('.side-bottom');
    if (sideBottom && !document.querySelector('.discord-btn')) {
        const discordBtn = document.createElement('a');
        discordBtn.href = "https://discord.gg/y7j9m5puKr";
        discordBtn.target = "_blank";
        discordBtn.className = "discord-btn";
        discordBtn.innerText = "Join Discord";
        sideBottom.insertBefore(discordBtn, sideBottom.firstChild);
    }

    // Theme Persistence
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

    // Sidebar Toggle
    const toggleSidebar = (e) => {
        if (e) e.stopPropagation();
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
        burger.classList.toggle('active');
    };

    if (burger) burger.onclick = toggleSidebar;
    if (overlay) overlay.onclick = toggleSidebar;
});
