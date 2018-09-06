$(function() {
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 40,
  });
});

// Scroll to top if the user clicks the header text
$(".header-text").on("click", function(e) {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to the section on navigation li click.
$(".navigation li").on("click", function(e) {
  const sectionName = e.target.dataset.sectionName;
  const section = $(`.section[data-section=${sectionName}]`)[0];
  window.section = section;
  window.scrollTo({
    top: section.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

// TODO: Add scroll based url updation (preferably using path.js)
// TODO: Add scroll based element highlighting
