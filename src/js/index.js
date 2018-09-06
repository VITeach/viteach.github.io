$(document).ready(function() {
  // Activate path
  Path.listen();
  // Activate Stellar
  $(function() {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,
    });
  });
});

// Scroll to top if the user clicks the header text
$(".header-text").on("click", function(e) {
  history.pushState(null, null, `#/gallery`);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to the section on navigation li click.
$(".navigation li").on("click", function(e) {
  const sectionName = e.target.dataset.sectionName;
  utils.scrollToSection(sectionName);
  history.pushState(null, null, `#/${sectionName}`);
});

// TODO: Add scroll based url updation (preferably using path.js)
// TODO: Add scroll based element highlighting
