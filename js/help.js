// Help popup functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const helpPopup = document.getElementById('helpPopup');
    const showHelpButton = document.getElementById('showHelp');
    const closePopupButton = document.getElementById('closePopup');

    function showHelp() {
        helpPopup.style.display = 'block';
    }

    function hideHelp() {
        helpPopup.style.display = 'none';
    }

    // Show the popup on the first page load
    if (!localStorage.getItem('helpPopupShown')) {
        showHelp();
        localStorage.setItem('helpPopupShown', 'true');
    }

    showHelpButton.addEventListener('click', showHelp);
    closePopupButton.addEventListener('click', hideHelp);

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            hideHelp();
        }
    });
});
