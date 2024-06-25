$(document).ready(function() {
    $('.summary').on('click', function() {
        $(this).next('.details').slideToggle();
    });
});
