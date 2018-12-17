$( document ).ready(function() {

$( ".burger-menu-close" ).hide();
$( ".burger-menu" ).hide();
  
$( ".burger-menu-open" ).click(function() {
$( ".burger-menu" ).slideToggle( "slow", function() {
$( ".burger-menu-open" ).hide();
$( ".burger-menu-close" ).show();
});
});

$( ".burger-menu-close" ).click(function() {
$( ".burger-menu" ).slideToggle( "slow", function() {
$( ".burger-menu-close" ).hide();
$( ".burger-menu-open" ).show();
});
});

});
