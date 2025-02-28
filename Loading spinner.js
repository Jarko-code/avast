const spinner = document.querySelector(".sp-loader");
const content = document.querySelectorAll(".cp-purchase-screen");

window.addEventListener("load", () => {
  setTimeout(() => {
    spinner.style.display = "none";
    content.forEach((item) => (item.style.display = "block"));
  }, 1000);
});
