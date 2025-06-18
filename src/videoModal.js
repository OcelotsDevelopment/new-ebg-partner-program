document.querySelector("#openModal-btn").addEventListener("click", openModal);
document.querySelector("#closeModal-btn").addEventListener("click", closeModal);
const videoDom = document.querySelector("#video-play");

function openModal() {
    const overlay = document.getElementById('modalOverlay');
    console.log("modal is open");
    
    // Show modal
    overlay.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // const videoDom = document.querySelector("#video-play");
    // Play Video
    if(videoDom.paused) {
        setTimeout(() => videoDom.play(), 300);
    }
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    console.log("vide is pause");
    videoDom.pause();
    // videoDom.currentTime = 0;    
    overlay.classList.remove('active');


    // Restore body scroll
    document.body.style.overflow = '';

}

// Close modal when clicking overlay
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

