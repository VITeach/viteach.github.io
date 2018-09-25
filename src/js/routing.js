/*
All hash-based routes are defined here.
Updates the hash of the page, based on the section using Path.js
*/

Path.root("");

Path.map("#/about").to(function() {
  utils.scrollToSection("about");
});

Path.map("#/projects").to(function() {
  utils.scrollToSection("projects");
});

Path.map("#/events").to(function() {
  utils.scrollToSection("events");
});

Path.map("#/contactus").to(function() {
  utils.scrollToSection("contacts");
});
