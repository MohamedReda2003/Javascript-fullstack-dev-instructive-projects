$(document).ready(function() {
    $('#addTask').on('click', function() {
        const task = $('#taskInput').val();
        if (task) {
            $.post('/tasks', { task: task }, function() {
                $('#taskList').append(`<li class="list-group-item">${task}</li>`);
                $('#taskInput').val('');
            });
        }
    });

    $.get('/tasks', function(tasks) {
        tasks.forEach(task => {
            $('#taskList').append(`<li class="list-group-item">${task}</li>`);
        });
    });
});
