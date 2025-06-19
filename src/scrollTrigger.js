import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animation timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#mainSection",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    // markers: true,
    onUpdate: (self) => {
      const progress = self.progress;
      updateTopicTitle(progress);
      //  updateIndicator(progress);
    },
  },
});

// Animate the divs sliding up
// tl.to("#planetDiv", {
//   y: -500,
//   duration: 1,
// })
//   .to(
//     "#peopleDiv",
//     {
//       y: -500,
//       duration: 1,
//     },
//     "<0.5"
//   )
//   .to(
//     "#profitDiv",
//     {
//       y: -500,
//       duration: 1,
//     },
//     "<0.5"
//   );

// Function to update topic title
function updateTopicTitle(progress) {
  const topicTitle = document.getElementById("topicTitle");

  if (progress < 0.33) {
    topicTitle.textContent = "lanet";
    // topicTitle.style.color = "#90EE90";
  } else if (progress < 0.66) {
    topicTitle.textContent = "eople";
    // topicTitle.style.color = "#FFE66D";
  } else {
    topicTitle.textContent = "rofit";
    // topicTitle.style.color = "#4ECDC4";
  }
}

// Function to update indicator dots
// function updateIndicator(progress) {
//   const dots = document.querySelectorAll(".dot");
//   dots.forEach((dot) => dot.classList.remove("active"));

//   if (progress < 0.33) {
//     dots[0].classList.add("active");
//   } else if (progress < 0.66) {
//     dots[1].classList.add("active");
//   } else {
//     dots[2].classList.add("active");
//   }
// }

// Add subtle parallax effect to content text
gsap.to(".content-text", {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: "#mainSection",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

// Animate header on scroll
gsap.to(".header", {
  // backgroundColor: "rgba(0, 0, 0, 0.95)",
  scrollTrigger: {
    trigger: "#mainSection",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
