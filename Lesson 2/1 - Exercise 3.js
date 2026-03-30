// Create this HTML:

// <h1>Main Title</h1>

// <p class="info">Paragraph 1</p>
// <p class="info">Paragraph 2</p>

// <button>Click</button>

// When button clicked:

// Change h1 color to red
// Change all paragraphs to blue

// Expected jQuery logic:

// $("h1")
// $(".info")

<html>
    <head>
        <title>Exercise-3</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1>Main Title</h1>

        <p class="info">Paragraph 1</p>
        <p class="info">Paragraph 2</p>

        <button>Click</button>

        <script>
            $(document).ready(function(){ // $(function(){  <- Can use this insteaad as its clean professional shorthand for $(document).ready() 
                $("button").click(function(){
                    $("h1").css("color","red");
                    $(".info").css("color","blue");
                });
            });
        </script>
    </body>
</html>