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
  });



