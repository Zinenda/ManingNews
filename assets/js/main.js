$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.scrollspy').scrollSpy();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.collapsible').collapsible();
    $('.carousel').carousel();
    $('.materialboxed').materialbox();
    $('.datepicker').datepicker();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});