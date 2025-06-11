class AnimatedInfoSection {
    constructor() {
        this.currentIndex = 0;
        this.totalItems = 7;
        this.duration = 3000; // 3 seconds
        this.isPlaying = true;
        this.intervalId = null;

        this.infoItems = document.querySelectorAll('.info-item');
        this.imageItems = document.querySelectorAll('.image-item');

        // Get navigation buttons
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.pauseBtn = document.getElementById('pauseBtn');

        this.init();
        this.setupEventListeners();
    }

    init() {
        // Start the animation after a brief delay to ensure everything is loaded
        setTimeout(() => {
            this.play();
        }, 100);
    }

    setupEventListeners() {
        // Add click handlers for navigation buttons
        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
        });

        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
        });

        this.pauseBtn.addEventListener('click', () => {
            if (this.isPlaying) {
                this.pause();
                this.pauseBtn.textContent = 'Play';
            } else {
                this.play();
                this.pauseBtn.textContent = 'Pause';
            }
        });
    }

    goToSlide(index) {
        if (index === this.currentIndex) return;

        // Remove active class from current items
        this.infoItems[this.currentIndex].classList.remove('active');
        this.imageItems[this.currentIndex].classList.remove('active');

        // Update index
        this.currentIndex = index;

        // Add active class to new items
        this.infoItems[this.currentIndex].classList.add('active');
        this.imageItems[this.currentIndex].classList.add('active');

        // Restart the timer if playing
        if (this.isPlaying) {
            this.resetTimer();
        }
    }

    prevSlide() {
        const prevIndex = (this.currentIndex - 1 + this.totalItems) % this.totalItems;
        this.goToSlide(prevIndex);
    }

    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % this.totalItems;
        this.goToSlide(nextIndex);
    }

    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
        }
        this.startTimer();
    }

    pause() {
        this.isPlaying = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    startTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        this.intervalId = setInterval(() => {
            this.nextSlide();
        }, this.duration);
    }

    resetTimer() {
        this.startTimer();
    }
}

// Initialize immediately when script loads
let animationInstance = null;

function initAnimation() {
    if (!animationInstance) {
        animationInstance = new AnimatedInfoSection();
    }
}

// Multiple initialization attempts to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimation);
} else {
    initAnimation();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!animationInstance) {
        initAnimation();
    }
});