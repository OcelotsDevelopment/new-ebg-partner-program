class AutoSlider {
  constructor() {
    this.sliderTrack = document.getElementById("sliderTrack");
    this.dotsContainer = document.getElementById("dotsContainer");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.pauseBtn = document.getElementById("pauseBtn");

    this.currentSlide = 0;
    this.totalSlides = 4; // Only count original slides
    this.slideWidth = 100 / 3; // Show 3 items at a time
    this.isPlaying = true;
    this.autoSlideInterval = null;

    this.init();
  }

  init() {
    this.updateSliderPosition();
    this.startAutoSlide();
    // this.bindEvents();
    // this.updateDots();
  }

  // bindEvents() {
  //   this.prevBtn.addEventListener("click", () => this.prevSlide());
  //   this.nextBtn.addEventListener("click", () => this.nextSlide());
  //   this.pauseBtn.addEventListener("click", () => this.toggleAutoSlide());

  //   // Dot navigation
  //   const dots = this.dotsContainer.querySelectorAll("button");
  //   dots.forEach((dot, index) => {
  //     dot.addEventListener("click", () => this.goToSlide(index));
  //   });

  //   // Pause on hover
  //   this.sliderTrack.addEventListener("mouseenter", () => {
  //     if (this.isPlaying) {
  //       this.pauseAutoSlide();
  //     }
  //   });

  //   this.sliderTrack.addEventListener("mouseleave", () => {
  //     if (this.isPlaying) {
  //       this.startAutoSlide();
  //     }
  //   });
  // }

  updateSliderPosition() {
    const translateX = -this.currentSlide * this.slideWidth;
    this.sliderTrack.style.transform = `translateX(${translateX}%)`;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSliderPosition();
    // this.updateDots();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateSliderPosition();
    // this.updateDots();
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateSliderPosition();
    // this.updateDots();
  }

  // updateDots() {
  //   const dots = this.dotsContainer.querySelectorAll("button");
  //   dots.forEach((dot, index) => {
  //     if (index === this.currentSlide) {
  //       dot.classList.remove("bg-gray-300");
  //       dot.classList.add("bg-blue-500");
  //     } else {
  //       dot.classList.remove("bg-blue-500");
  //       dot.classList.add("bg-gray-300");
  //     }
  //   });
  // }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  pauseAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    }
  }

  toggleAutoSlide() {
    if (this.isPlaying) {
      this.pauseAutoSlide();
      this.pauseBtn.textContent = "Play";
      this.isPlaying = false;
    } else {
      this.startAutoSlide();
      this.pauseBtn.textContent = "Pause";
      this.isPlaying = true;
    }
  }
}

// Initialize the slider when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new AutoSlider();
});
