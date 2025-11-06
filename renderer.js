const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const browserFrame = document.getElementById('browserFrame');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        browserFrame.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Optional: Press Enter to search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});
