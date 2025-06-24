<script>
    const footerItems = document.querySelectorAll('.footer-item');
    const mainContent = document.getElementById('main-content');
    const submenu = document.getElementById('submenu-collezioni');
    let submenuVisible = false;

footerItems.forEach(item => {
  const submenuId = item.getAttribute('data-submenu');

  item.addEventListener('mouseenter', () => {
    const bg = item.getAttribute('data-bg');
    if (bg) {
      mainContent.style.backgroundImage = `url('${bg}')`;
    }

    // Mostra submenu sopra l'elemento "COLLEZIONI"
    if (submenuId === 'submenu-collezioni') {
      const rect = item.getBoundingClientRect();
      submenu.style.display = 'block';
      submenu.style.top = (rect.top - submenu.offsetHeight - 10) + 'px';  // 10px sopra
      submenu.style.left = rect.left + 'px';
    } else {
      submenu.style.display = 'none';
    }
  });
});

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.footer-item') && !e.target.closest('.submenu')) {
        submenu.style.display = 'none';
        submenuVisible = false;
      }
    });