function toggleVisibility(visible, element) {
    if (visible && !element.classList.contains('visible')) {
        element.classList.add('visible');
        element.classList.remove('not-visible');
    } else if (!visible && !element.classList.contains('not-visible')) {
        element.classList.remove('visible');
        element.classList.add('not-visible');
    }
}

function isElementInViewportFromBottom(el) {
    const rect = el.getBoundingClientRect();
    return rect.top - window.innerHeight <= 0;
}

// Smooth scroll handler for multiple elements
let ticking = false;
const elements = document.querySelectorAll('.interactive-container');

document.addEventListener("scroll", () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            elements.forEach(el => {
                const visible = isElementInViewportFromBottom(el);
                toggleVisibility(visible, el);
            });
            ticking = false;
        });
        ticking = true;
    }
});

