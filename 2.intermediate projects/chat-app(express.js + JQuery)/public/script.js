$(document).ready(function() {
    $('#sendMessage').on('click', function() {
        const message = $('#messageInput').val();
        if (message) {
            $.post('/messages', { message: message }, function() {
                $('#messages').append(`<div class="alert alert-primary" role="alert">${message}</div>`);
                $('#messageInput').val('');
            });
        }
    });

    $.get('/messages', function(messages) {
        messages.forEach(message => {
            $('#messages').append(`<div class="alert alert-primary" role="alert">${message}</div>`);
        });
    });
});
