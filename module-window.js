document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.lightbox-overlay');
    const closeButton = document.querySelector('.lightbox-close');
    
    function showModal() {
      overlay.classList.add('active');
    }
    
    function hideModal() {
      overlay.classList.remove('active');
    }
    
    setTimeout(showModal, 1000);
    
    closeButton.addEventListener('click', hideModal);
    
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        hideModal();
      }
    });
    
    window.Modal = {
      show: showModal,
      hide: hideModal
    };
  });