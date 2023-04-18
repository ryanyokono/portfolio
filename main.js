document.addEventListener("DOMContentLoaded", function () {
    const arrow = document.querySelector(".arrow");
    const distanceThreshold = 100; // Adjust this value to control when the arrow should disappear
  
    function handleScroll() {
      if (window.scrollY > distanceThreshold) {
        arrow.classList.remove("show");
      } else {
        arrow.classList.add("show");
      }
    }
  
    arrow.addEventListener("click", function () {
      window.scrollTo({ top: distanceThreshold + 700, behavior: "smooth" });
    });
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call the function initially to set the arrow's visibility correctly.
  });
  