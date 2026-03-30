// Next Exercise (Exercise 5)

// Create this HTML:

// <h1>My Tasks</h1>

// <ul id="tasks">
// <li>Task 1</li>
// <li>Task 2</li>
// </ul>

// <button id="add">Add Task</button>

// When button clicked:

// Add a new task:
// Task 3

// Hint:
// append()

<html>
    <head>
        <title>Exercise-5</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1>My Tasks</h1>

        <ul id="tasks">
            <li>Task 1</li>
            <li>Task 2</li>
        </ul>

        <button id="add">Add Task</button>

        <script>
            $(function(){
                $("#add").click(function(){
                    $("#tasks").append("<li>Task 3</li>");
                });
            });
        </script>
    </body>
</html>