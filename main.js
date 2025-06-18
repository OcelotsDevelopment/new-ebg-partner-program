// import './src/slidingAnimation.js';
// import './src/modal.js';
import '@fontsource/poppins';
import './src/mobileMenu.js';

document.addEventListener("DOMContentLoaded", function () {
  // new AnimatedInfoSection();
  const buttons = document.querySelectorAll(".tab-btn");
  const slider = document.querySelector(".slider");
  const container = document.querySelectorAll(".tab-cont");

  // Initialize first tab as active
  updateActiveTab(0);

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabIndex = parseInt(this.getAttribute("data-tab"));
      updateActiveTab(tabIndex);
    });
  });

  function updateActiveTab(index) {
    // Update slider position
    const button = buttons[index];
    const buttonRect = button.getBoundingClientRect();
    const containerRect = button.parentElement.getBoundingClientRect();

    slider.style.width = `${button.offsetWidth - 8}px`;
    slider.style.transform = `translateX(${
      buttonRect.left - containerRect.left + 4
    }px)`;

    // Update active state for tabs
    buttons.forEach((btn, i) => {
      if (i === index) {
        btn.classList.add("text-white");
      } else {
        btn.classList.remove("text-white");
      }
    });

    // Update tab content visibility
    container.forEach((content, i) => {
      if (i === index) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    });
  }
});

// class AnimatedInfoSection {
//     constructor() {
//         this.currentIndex = 0;
//         this.totalItems = 7;
//         this.duration = 2000; // 3 seconds
//         this.isPlaying = true;
//         this.intervalId = null;

//         this.infoItems = document.querySelectorAll('.info-item');
//         this.imageItems = document.querySelectorAll('.image-item');

//         this.init();
//     }

//     init() {
//         // Start the animation after a brief delay to ensure everything is loaded
//         setTimeout(() => {
//             this.play();
//         }, 100);
//     }

//     goToSlide(index) {
//         if (index === this.currentIndex) return;

//         // Remove active class from current items
//         this.infoItems[this.currentIndex].classList.remove('active');
//         this.imageItems[this.currentIndex].classList.remove('active');

//         // Update index
//         this.currentIndex = index;

//         // Add active class to new items
//         this.infoItems[this.currentIndex].classList.add('active');
//         this.imageItems[this.currentIndex].classList.add('active');

//         // Restart the timer if playing
//         if (this.isPlaying) {
//             this.resetTimer();
//         }
//     }

//     nextSlide() {
//         const nextIndex = (this.currentIndex + 1) % this.totalItems;
//         this.goToSlide(nextIndex);
//     }

//     play() {
//         if (!this.isPlaying) {
//             this.isPlaying = true;
//         }
//         this.startTimer();
//     }

//     pause() {
//         this.isPlaying = false;
//         if (this.intervalId) {
//             clearInterval(this.intervalId);
//             this.intervalId = null;
//         }
//     }

//     startTimer() {
//         if (this.intervalId) {
//             clearInterval(this.intervalId);
//         }
//         this.intervalId = setInterval(() => {
//             this.nextSlide();
//         }, this.duration);
//     }

//     resetTimer() {
//         this.startTimer();
//     }
// }

// // Initialize immediately when script loads
// let animationInstance = null;

// function initAnimation() {
//     if (!animationInstance) {
//         animationInstance = new AnimatedInfoSection();
//     }
// }

// // Multiple initialization attempts to ensure it works
// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initAnimation);
// } else {
//     initAnimation();
// }

// // Fallback initialization
// window.addEventListener('load', () => {
//     if (!animationInstance) {
//         initAnimation();
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
  function animateValue(
    id,
    start,
    end,
    duration,
    prefix = "",
    suffix = "",
    decimals = 0
  ) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let value = start + (end - start) * progress;
      value = decimals > 0 ? value.toFixed(decimals) : Math.floor(value);
      obj.textContent = prefix + value + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent =
          prefix + (decimals > 0 ? end.toFixed(decimals) : end) + suffix;
      }
    };
    window.requestAnimationFrame(step);
  }

  // Scroll trigger logic
  let triggered = false;
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  function triggerCountersIfNeeded() {
    if (triggered) return;
    const el = document.getElementById("appliance-partner-count");
    // const el2 = document.getElementById(
    //   "appliance-portfolio-value1"
    // );
    if (isInViewport(el)) {
      triggered = true;
      animateValue("appliance-partner-count", 0, 100, 1200, "", "+");
      animateValue("appliance-portfolio-value", 0, 30, 1200, "₹", "L",);
      animateValue("appliance-satisfaction-rate", 0, 3, 1200, "", "%");
    }

    // if (isInViewport(el2)) {
    //   animateValue(
    //     "appliance-partner-count1",
    //     0,
    //     500,
    //     1200,
    //     "",
    //     "+"
    //   );

    //   animateValue(
    //     "appliance-portfolio-value1",
    //     0,
    //     2.5,
    //     1200,
    //     "$",
    //     "B",
    //     1
    //   );

    //   animateValue(
    //     "appliance-satisfaction-rate1",
    //     0,
    //     95,
    //     1200,
    //     "",
    //     "%"
    //   );
    // }
  }

  window.addEventListener("scroll", triggerCountersIfNeeded, { passive: true });
  // Also trigger on load in case already in view
  triggerCountersIfNeeded();
});
