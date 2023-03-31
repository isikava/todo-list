(() => {
  const themeSwitch = document.querySelector('#theme');
  const icon = themeSwitch.querySelector('sl-icon');
  const root = document.documentElement;

  function setDark() {
    root.classList.add('sl-theme-dark');
    icon.name = 'moon-fill';
    icon.style.color = '#818cf8';
  }

  function setLight() {
    root.classList.remove('sl-theme-dark');
    icon.name = 'sun';
    icon.style.color = '#eab308';
  }

  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    themeSwitch.checked = true;
    setDark();
  }

  themeSwitch.addEventListener('sl-change', (e) => {
    const { checked } = e.target;
    let theme = 'light';

    if (checked) {
      // Add Dark theme
      theme = 'dark';
      setDark();
    } else {
      // Light theme
      setLight();
    }

    localStorage.setItem('theme', theme);
  });
})();
