const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuToggle.textContent =
    navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  const target = Number(counter.dataset.target);
  let count = 0;
  const increment = target / 100;

  function update() {
    count += increment;

    if (count < target) {
      counter.innerText = Math.floor(count) + "+";
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + "+";
    }
  }

  update();
}

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("active");

      if (entry.target.classList.contains("counter")) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    }

  });

}, {
  threshold: 0.3
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});

counters.forEach(counter => {
  observer.observe(counter);
});

document.querySelector(".primary").addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
});