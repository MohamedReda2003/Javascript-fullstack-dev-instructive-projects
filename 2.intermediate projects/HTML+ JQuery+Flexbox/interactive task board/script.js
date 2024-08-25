$(document).ready(function() {
    let taskId = 0;

    // Add new task
    $("#addTask").click(function() {
        const taskText = $("#taskInput").val().trim();
        if (taskText) {
            addTaskToColumn("todo", taskText);
            $("#taskInput").val("");
        }
    });

    // Add task to column
    function addTaskToColumn(columnId, taskText) {
        taskId++;
        const taskHtml = `
            <div class="task" data-id="${taskId}">
                <p>${taskText}</p>
                <div class="task-controls">
                    <button class="edit-task">Edit</button>
                    <button class="delete-task">Delete</button>
                </div>
            </div>
        `;
        $(`#${columnId}`).append(taskHtml);
    }

    // Make tasks draggable
    $(".board").on("mouseenter", ".task", function() {
        $(this).draggable({
            connectToSortable: ".column",
            revert: "invalid",
            start: function(event, ui) {
                $(this).addClass("task-dragging");
            },
            stop: function(event, ui) {
                $(this).removeClass("task-dragging");
            }
        });
    });

    // Make columns sortable
    $(".column").sortable({
        connectWith: ".column",
        placeholder: "task-placeholder"
    });

    // Edit task
    $(".board").on("click", ".edit-task", function() {
        const taskElement = $(this).closest(".task");
        const taskText = taskElement.find("p").text();
        const newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
            taskElement.find("p").text(newText.trim());
        }
    });

    // Delete task
    $(".board").on("click", ".delete-task", function() {
        $(this).closest(".task").remove();
    });

    // Filter tasks
    $("#filterTasks").change(function() {
        const filter = $(this).val();
        if (filter === "all") {
            $(".column").show();
        } else {
            $(".column").hide();
            $(`#${filter}`).show();
        }
    });

    // Double-click to move task to next column
    $(".board").on("dblclick", ".task", function() {
        const task = $(this);
        const currentColumn = task.closest(".column");
        const nextColumn = currentColumn.next(".column");
        
        if (nextColumn.length) {
            task.appendTo(nextColumn);
        } else {
            task.appendTo($(".column").first());
        }
    });
});