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
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll to the section on navigation li click.
$(".navigation li").on("click", function(e) {
  const sectionName = e.target.dataset.sectionName;
  utils.scrollToSection(sectionName);
});

// TODO: Add scroll based url updation (preferably using path.js)
// TODO: Add scroll based element highlight
let index;
window.addEventListener("scroll", function(e) {
  const scrollTop = $(window).scrollTop();
  const sectionHeight = $(".section").height();
  const headerOffset = 40;
  // Find the section the user is currently in while scrolling.
  const activeSectionIndex = Math.floor(
    (scrollTop + headerOffset) / sectionHeight,
  );
  // Update the active section only once and not for every scroll
  // event fired.
  if (index === activeSectionIndex) return;
  index = activeSectionIndex;
  const activeSection = $(".section")[index];
  // Update location hash.
  const sectionName = activeSection.dataset.section;
  if (!sectionName) return;
  history.pushState(null, null, `#/${sectionName}`);
  // Update active nav panel element
  utils.makeLiActive(sectionName);
});

$(".scroll-button").on("click", function(e) {
  e.preventDefault();
  utils.scrollToSection("intro");
});
