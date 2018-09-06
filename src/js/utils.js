const utils = {};

/**
 * Smooth scrolls to the section given it's name.
 * @param {string} sectionName Name of the section to scroll to.
 */
utils.scrollToSection = function(sectionName) {
  const section = $(`.section[data-section=${sectionName}]`)[0];

  // Actual scroll function
  const doScroll = function() {
    const top = $(window).scrollTop() + section.getBoundingClientRect().top;
    window.scrollTo({
      top: top,
      behavior: "smooth",
    });
  };

  // Run doScroll only if the page has loaded completely,
  // or wait for page to load and then execute.
  // Used for path routing at page load.
  if (document.readyState === "complete") {
    doScroll();
  } else {
    document.addEventListener("readystatechange", function() {
      if (document.readyState === "complete") {
        doScroll();
      }
    });
  }
};
