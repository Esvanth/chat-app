
toggleBtn = document.getElementById('toggleBtn');
SideMenu = document.getElementById('SideMenu');

toggleBtn.addEventListener('click', () => {
    SideMenu.classList.toggle('active');
});