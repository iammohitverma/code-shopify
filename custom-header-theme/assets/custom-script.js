let header = document.querySelector(".tm-custom-header");
let headerNavWrap = document.querySelector(".tm-custom-header .nav-wrap");
let headerToggleBtn = document.querySelector(".tm-custom-header .menu-toggle");

jQuery(document).ready(function () {
  // menu main toggle
  jQuery(".tm-custom-header .menu-toggle").click(function (e) {
    jQuery(this).toggleClass("active");
    jQuery(".tm-custom-header .nav-wrap").slideToggle();
  });
  // submenu main toggle
  jQuery(".tm-custom-header .toggleSubmenu").click(function (e) {
    jQuery(this).parent().next().slideToggle();
  });
});
