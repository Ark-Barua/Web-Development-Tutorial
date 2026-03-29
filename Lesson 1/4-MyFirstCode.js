<html>
    <head>
        <title>My First jQuery Code</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>

    <body>
        <p id="text"></p>
        <button id="btn">Click Me</button>
    </body>

    <script>
        $(document).ready(function(){
            $("#btn").click(function(){  // Select button with id named "btn"
                $("#text").text("Button Clicked"); // Wait for the click and then change the text to "Button Clicked"
            });
        });
    </script>

</html>