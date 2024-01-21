window.addEventListener('load', function() {
    var popupOverlay = document.getElementById('popupt-overlay');
    var closeButton = document.getElementById('close-popupt');

    closeButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });

    // Set a timer to automatically close the popup after 5 seconds (5000 milliseconds)
    setTimeout(function() {
        popupOverlay.style.display = 'none';
    }, 10000); // 5000 milliseconds = 5 seconds
});