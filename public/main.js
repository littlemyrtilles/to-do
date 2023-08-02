$(function () {
  $(".task-checkbox").on("change", function () {
    const taskIndex = $(this).data("task-index");
    const taskText = $(`#task${taskIndex}`);
    const taskCheckbox = $(`#myCheckbox${taskIndex}`);
    taskText.toggleClass("strikethrough");
    taskText.toggleClass("task-fade-out");
    // taskCheckbox.toggleClass("task-fade-out");
  });
});

// Get the button:
let toTopButton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}