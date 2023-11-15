var collapseElements = document.querySelectorAll(".btn-link");

collapseElements.forEach(function (elem) {
  elem.addEventListener("click", function () {
    var icon = this.querySelector(".bi");
    icon.classList.toggle("bi-chevron-down");
    icon.classList.toggle("bi-chevron-up");
  });
});