const nextPageBtn = document.getElementById('nextPageBtn');

// Forces her to stay and explore the photos for 12 seconds before allowing her to move on
setTimeout(() => {
    nextPageBtn.classList.add('visible');
}, 12000);

nextPageBtn.addEventListener('click', () => {
    window.parent.postMessage('nextPage', '*');
});