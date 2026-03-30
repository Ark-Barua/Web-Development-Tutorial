// Exercise 6

// Create this HTML:

// <h1>Shopping List</h1>

// <ul id="list">
// <li>Milk</li>
// <li>Bread</li>
// </ul>

// <button id="addStart">Add at Start</button>
// <button id="addEnd">Add at End</button>

// When buttons clicked:

// Add at Start → "Eggs" using prepend()

// Add at End → "Butter" using append()

<!DOCTYPE html>
<html>
    <head>
        <title>Exercise-6</title>
        <meta charset="UTF-8"></meta>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1>Shopping List</h1>

        <ul id="list">
            <li>Milk</li>
            <li>Bread</li>
        </ul>

        <button id="addStart">Add at Start</button>
        <button id="addEnd">Add at End</button>

        <script>
            $(function(){
                $("#addStart").click(function(){
                    $("#list").prepend("<li>Eggs</li>");
                });
                $("#addEnd").click(function(){
                    $("#list").append("<li>Butter</li>");
                });
            });
        </script>
    </body>
</html>