document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".dropdown-item > a");
  navItems.forEach((item) => {
    item.addEventListener("hover", function (e) {
      const submenu = this.nextElementSibling;
      if (submenu) {
        e.preventDefault(); // Prevent the default link behavior
        submenu.style.display =
          submenu.style.display === "block" ? "none" : "block";
      }
    });
  });

  // Close the submenu if clicked outside
  window.onclick = function (e) {
    if (!e.target.matches(".dropdown-item > a")) {
      const submenus = document.querySelectorAll(".submenu");
      submenus.forEach((submenu) => {
        submenu.style.display = "none";
      });
    }
  };
});

// Get modal element
const modal = document.getElementById("counsellingModal");
// Get open modal button
const openModalBtn = document.getElementById("openModalBtn");
// Get close button
const closeModalBtn = document.getElementById("closeModalBtn");

// Event listener for opening modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Event listener for closing modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicked outside of content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
