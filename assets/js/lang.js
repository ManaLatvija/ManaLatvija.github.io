(function () {
    const languageSwitchers = document.querySelectorAll('.language-switcher');
    languageSwitchers.forEach((switcher) => {
        switcher.addEventListener('click', (e) => {
            e.preventDefault();
            switcher.dataset.state = switcher.dataset.state === 'open' ? 'closed' : 'open';
            const optionsElement = switcher.nextElementSibling;
            optionsElement.classList.toggle('hx-hidden');
  
            // Calculate position of language options element
            const switcherRect = switcher.getBoundingClientRect();
            const translateY = switcherRect.height + 5;  // Open downwards with small offset
            optionsElement.style.left = `${switcherRect.left}px`;
            optionsElement.style.top = `${switcherRect.top + translateY}px`;
            optionsElement.style.minWidth = `${Math.max(switcherRect.width, 50)}px`;
        });
    });
  
    // Dismiss language switcher when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.closest('.language-switcher') === null) {
            languageSwitchers.forEach((switcher) => {
                switcher.dataset.state = 'closed';
                const optionsElement = switcher.nextElementSibling;
                optionsElement.classList.add('hx-hidden');
            });
        }
    });
})();
