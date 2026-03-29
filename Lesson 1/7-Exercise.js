// Exercise (Very Important)

// Create a page with:

// A heading
// A button
// When button clicked:
// Change heading text
// Change heading color

// Example expected behavior:

// Before click:
// Hello World

// After click:
// Welcome to jQuery

<html>
    <head>
        <title>Exercise-1</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1 id="text">Hello World</h1>
        <button id="btn">Click Here</button>

        <script>
            $(document).ready(function(){
                $("#btn").click(function () {
                    $("#text").text("Welcome to jQuery").css("color", "green");
                });
        });
        </script>
    </body>
</html>