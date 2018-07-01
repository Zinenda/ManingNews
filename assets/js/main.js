$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.scrollspy').scrollSpy();
    $('.fixed-action-btn').floatingActionButton();
    $('.modal').modal();
    $('.tooltipped').tooltip();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

    window.sr = ScrollReveal({ duration: 2000 });
    sr.reveal('.sequeal-reveal', 50);
});