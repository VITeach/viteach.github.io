/*
All hash-based routes are defined here.
Updates the hash of the page, based on the section using Path.js
*/

Path.root("");

Path.map("#/intro").to(function() {
  utils.scrollToSection("intro");
});

Path.map("#/adwprimary").to(function() {
  utils.scrollToSection("adwprimary");
});

Path.map("#/angilam").to(function() {
  utils.scrollToSection("angilam");
});

Path.map("#/naik").to(function() {
  utils.scrollToSection("naik");
});

Path.map("#/wishtree").to(function() {
  utils.scrollToSection("wishtree");
});

Path.map("#/carnival").to(function() {
  utils.scrollToSection("carnival");
});

Path.map("#/kumizhi").to(function() {
  utils.scrollToSection("kumizhi");
});

Path.map("#/contacts").to(function() {
  utils.scrollToSection("contacts");
});
