document.querySelectorAll('button[data-link]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-link');
    window.location.href = target;
  });
});
