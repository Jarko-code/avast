//simple watcher for watching elements on scroll and change their settings

//store floating CTA
let floatingCta = document.getElementById("floating-cta");

//register observer
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      floatingCta.style.display = "none";
    } else {
      floatingCta.style.display = "block";
    }
  });
});

//store watched element
const cta = document.querySelector(".js-btn-action");

// observe function
io.observe(cta);
