gsap.from(".nav-bar", {
  duration: 1,
  opacity: 0,
  rotation: "+=100",
});

gsap.from(".nav-icon", {
  duration: 1.5,
  x: -200,
  opacity: 0,
});

gsap.from("h3", {
  duration: 1.5,
  y: 200,
  opacity: 0,
});

gsap.from("#gsap-hero", {
  duration: 1.5,
  x: 200,
  opacity: 0,
});

gsap.from(
  ".glass-box",
  {
    duration: 2,
    opacity: 0,
  },
  "1"
);

const tl = gsap.timeline({ paused: true });
const menuBtn = document.querySelector(".nav-icon");
let alfa = 0;
tl.to(".nav-icon", 0.7, { yPercent: -20, opacity: 0 })

  .to(".nav-bar", 0.5, { xPercent: 20, yPercent: 20 })
  .to(".nav-bar", 0.9, { xPercent: -120 })
  .to(".nav-bar", 0.9, { xPercent: 0, zIndex: -99 })
  .to(".nav-bar", 0.1, { xPercent: 0, yPercent: 0, zIndex: -99 })
  .to(".nav-icon", 0.7, { yPercent: 0, opacity: 1, zIndex: 99 })

  .to("#second-line", 0.7, { xPercent: -100, opacity: 0 }, "<")

  .to("#first-line", 0.7, { rotation: 45, y: 20, width: 40 }, "<")
  .to("#third-line", 0.7, { rotation: -45, y: -20, width: 40 }, "<")
  .fromTo(
    ".list-element",
    0.7,
    { opacity: 0, yPercent: 5 },
    {
      opacity: 1,
      yPercent: 0,
      stagger: {
        each: 0.3,
        from: "from",
        amount: 2,
      },
    }
  );
menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("green");

  if (alfa == 0) {
    tl.play();

    alfa = 1;
  } else {
    tl.reverse();
    alfa = 0;
  }
});
