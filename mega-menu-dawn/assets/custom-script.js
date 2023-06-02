jQuery(document).ready(function () {
  jQuery(".tm-custom-header .top .inner .menu-toggle").click(function (e) {
    jQuery(this).toggleClass("active");
    jQuery(".mega-menu").slideToggle();
  });
  jQuery(".tm-custom-header .toggleSubmenu").click(function (e) {
    jQuery(this).toggleClass("active");
    jQuery(this).parent().next().slideToggle();
  });
});
