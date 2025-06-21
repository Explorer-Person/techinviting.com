// page navigator


document.querySelectorAll('.page-navigator').forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('aria-label');
        const detail = button.getAttribute('aria-details');

        if (target === 'landing') {
            // Go up one directory to reach the main landing.html
            let landingUrl = `https://www.techinviting.com/${target}`;
            if (detail) {
                landingUrl += `?detail=${detail}`;
            }
            window.location.href = landingUrl;
        } else {
            // Default: go to topic HTMLs inside /topics/
            window.location.href = `topics/${target}`;
        }
    });
});
