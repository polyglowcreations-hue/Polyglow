/**
 * GALLERY.JS - Controls the image zoom modal functionality.
 * This script is required on all Level 2 and Level 3 HTML pages.
 */

// Get the modal, the image inside it, and the close button
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const span = document.getElementsByClassName("close")[0];

/**
 * Opens the image modal.
 * @param {HTMLElement} element - The image element that was clicked.
 */
function openModal(element) {
    modal.style.display = "block";
    // Get the full resolution source from the data attribute (data-full-src)
    modalImg.src = element.getAttribute('data-full-src');
}

/**
 * Closes the image modal.
 */
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks on the <span> (x) or clicks anywhere outside the image, close the modal
if (span) {
    span.onclick = closeModal;
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}