const changeTheme = type => {
  document.documentElement.style.setProperty('--primary', `var(--${type})`);
  document.documentElement.style.setProperty('--primary-light', `var(--${type}-transparent)`);
};

// for dark theme
document.documentElement.classList.add('theme--dark');

changeTheme('teal');