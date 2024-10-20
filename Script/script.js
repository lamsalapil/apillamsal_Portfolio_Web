function openPDFInModal(event) {
    event.preventDefault(); // Prevent default link behavior

    const pdfUrl = './photo/Resume.pdf'; // The PDF file URL
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfIframe');

    // Set the PDF source to the iframe
    iframe.src = pdfUrl + '#toolbar=0'; // Disable toolbar if needed

    // Display the modal
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById('pdfModal');
    const iframe = document.getElementById('pdfIframe');

    // Hide the modal
    modal.style.display = "none";

    // Clear the iframe source when closing (optional)
    iframe.src = "";
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('pdfModal');
    if (event.target == modal) {
        closeModal();
    }
}


const texts = ['ASP.NET Core / MVC','C#', 'Javascript / Knockout.js', 'MS Sql', 'MAUI Mobile Application' ];
let index = 0;

function changeText() {
    const element = document.getElementById('dynamic-text');
    element.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 3000);