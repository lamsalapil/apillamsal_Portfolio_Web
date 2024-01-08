function openPDFInNewTab() {
    const pdfUrl = './photo/APIL LAMSAL Resume.pdf';
    const newTab = window.open(pdfUrl, '_blank');

    // Check if the new tab is blocked by the browser's popup blocker
    if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
        alert('The PDF viewer was blocked. Please check your browser settings.');
    }
}
function trackClick() {
    // Simulate tracking (replace with actual tracking logic)
    const clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    localStorage.setItem('clickCount', clickCount + 1);
    console.log(`Button clicked ${clickCount + 1} times.`);
}