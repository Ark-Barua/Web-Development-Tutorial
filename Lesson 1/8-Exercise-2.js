// Mini Challenge (Before Lesson 2)

// Modify your program to:

// When button clicked:

// 1. Change text
// 2. Change color
// 3. Increase font size
// 4. Add background color

// Expected:

// Text: Welcome to jQuery
// Color: white
// Background: black
// Font size: 40px

<html>
    <head>
        <title>Exercise-2</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1 id="text">Hello World</h1>
        <button id="btn">Click Here</button>

        <script>
            $(document).ready(function(){
                $("#btn").click(function () {
                    $("#text").text("Welcome to jQuery").css({"color":"white", "background-color":"black", "font-size":"40px"});
                });
        });
        </script>
    </body>
</html>