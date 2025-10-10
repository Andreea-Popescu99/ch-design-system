//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
})

window.MOJFrontend.initAll();

function reload() {
  location.reload();
}



 document.addEventListener('DOMContentLoaded', function () {
  // Copy button logic
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', async () => {
      const targetId = button.getAttribute('data-copy-target');
      const codeElement = document.getElementById(targetId);

      if (codeElement) {
        try {
          const text = codeElement.textContent.trim();
          await navigator.clipboard.writeText(text);
          button.textContent = 'Copied!';
          setTimeout(() => button.textContent = 'Copy code', 2000);
        } catch (err) {
          console.error('Copy failed', err);
          button.textContent = 'Copy failed';
        }
      }
    });
  });

  // Language toggle logic
  const urlParams = new URLSearchParams(window.location.search);
  const lang = urlParams.get('lang') || 'en';

  const engItem = document.querySelector('.language-toggle__item a[href*="lang=en"]')?.parentElement;
  const cymItem = document.querySelector('.language-toggle__item a[href*="lang=cy"]')?.parentElement;

  if (engItem && cymItem) {
    if (lang === 'cy') {
      engItem.classList.remove('language-toggle__item--active');
      engItem.classList.add('language-toggle__item--inactive');
      cymItem.classList.remove('language-toggle__item--inactive');
      cymItem.classList.add('language-toggle__item--active');
    } else {
      cymItem.classList.remove('language-toggle__item--active');
      cymItem.classList.add('language-toggle__item--inactive');
      engItem.classList.remove('language-toggle__item--inactive');
      engItem.classList.add('language-toggle__item--active');
    }
  }
});



