// Exercise 4

// Create this HTML:

// <h1>Students</h1>

// <p>Student 1</p>
// <p>Student 2</p>
// <p>Student 3</p>
// <p>Student 4</p>

// <button>Highlight</button>

// When button clicked:

// • First paragraph → red
// • Last paragraph → green
// • Even paragraphs → blue

// Hint selectors:

// $("p:first")
// $("p:last")
// $("p:even")

<html>
    <head>
        <title>Exercise-4</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1>Students</h1>

        <p>Student 1</p>
        <p>Student 2</p>
        <p>Student 3</p>
        <p>Student 4</p>

        <button>Highlight</button>

        <script>
            $(function(){
                $("button").click(function(){
                    $("p:even").css("color","red");
                    $("p:first").css("color","green");
                    $("p:last").css("color","blue");
                });
            });
        </script>
    </body>
</html>