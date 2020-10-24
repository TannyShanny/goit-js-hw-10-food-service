const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switchInput: document.querySelector('.theme-switch__toggle'),
};
const getItemKeyTheme = localStorage.getItem('keyTheme');

document.addEventListener('DOMContentLoaded', () => {
  if (getItemKeyTheme === null) {
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.add(getItemKeyTheme);
  }

  refs.switchInput.addEventListener('change', () => {
    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      localStorage.setItem('keyTheme', Theme.DARK);
    } else {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
      localStorage.setItem('keyTheme', Theme.LIGHT);
    }
  });
});

if (getItemKeyTheme === Theme.DARK) {
  refs.switchInput.checked = true;
}
