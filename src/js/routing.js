/*
All hash-based routes are defined here.
Updates the hash of the page, based on the section using Path.js
*/

Path.root("#/gallery");

Path.map("#/team").to(function() {
  utils.scrollToSection("team");
});

Path.map("#/projects").to(function() {
  utils.scrollToSection("projects");
});

Path.map("#/intro").to(function() {
  utils.scrollToSection("intro");
});

Path.map("#/about").to(function() {
  utils.scrollToSection("about");
});

Path.map("#/functionalteams").to(function() {
  utils.scrollToSection("functionalteams");
});

Path.map("#/contacts").to(function() {
  utils.scrollToSection("contacts");
});
