document.querySelector('.submit-button').addEventListener('click', function() {
    var button = this;
    if (!button.classList.contains('loading')) {
        button.classList.add('loading');
        button.disabled = true;
        setTimeout(function() {
            button.classList.remove('loading');
            button.style.backgroundColor = '#F5F5F5'; 
            button.style.color = '#D9D9D9'; 
            button.disabled = true; 
        }, 2000);
    }
});
