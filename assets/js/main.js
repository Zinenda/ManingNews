$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.fixed-action-btn').floatingActionButton();

    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });

    window.sr = ScrollReveal({ duration: 2000 });
    sr.reveal('.sequeal-reveal', 50);
});