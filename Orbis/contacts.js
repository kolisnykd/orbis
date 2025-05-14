 const copyElements = document.querySelectorAll('.copy-text');

  copyElements.forEach(el => {
    el.style.cursor = 'pointer';

    el.addEventListener('click', () => {
      const originalText = el.textContent;

      navigator.clipboard.writeText(originalText).then(() => {
        el.textContent = 'Скопійовано!';
        el.style.color = '#DDEBCC';

        setTimeout(() => {
          el.textContent = originalText;
          el.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Помилка копіювання: ', err);
      });
    });
  });
document.querySelector('.scroll-to').addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});

