import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from("#a-head", {
  scale: 0,
  delay: 0,
  duration: 2,
  rotate: 360,
  yoyo: true,
  scrollTrigger: {
    trigger: "#a-head",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

// Array of words to cycle through
const words = ["lanet", "eople", "urpose"];
let currentIndex = 0;

// Get the element to animate
const flipText = document.getElementById("flip-text");

// Create GSAP timeline
const tl = gsap.timeline({ repeat: -1 });

// Function to animate text change
function animateTextChange() {
  // Animate out (scale down and fade)
  tl.to(flipText, {
    duration: 0.3,
    scaleY: 0,
    opacity: 0,
    ease: "power2.in",
    onComplete: function () {
      // Change text while invisible
      currentIndex = (currentIndex + 1) % words.length;
      flipText.textContent = words[currentIndex];
    },
  })
    // Animate in (scale up and fade in)
    .to(flipText, {
      duration: 0.3,
      scaleY: 1,
      opacity: 1,
      ease: "power2.out",
    })
    // Hold for 2 seconds before next change
    .to({}, { duration: 2 });
}

// Start the animation loop
function startAnimation() {
  // Initial delay
  tl.to({}, { duration: 2 });

  // Create animation for each word change
  for (let i = 0; i < words.length * 3; i++) {
    // Multiply by 3 for more cycles
    animateTextChange();
  }
}

// Start the animation
startAnimation();
