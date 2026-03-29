<html>
    <head>
        <title>Complete Example</title>
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    </head>
    <body>
        <h1 id="title">Welcome to jQuery</h1>
        <button id="btn">Button to change color</button>
    </body>
    <script>
        $(document).ready(function(){
            $("#btn").click(function(){
                $("#title").css("color", "blue");
            });
        });
    </script>
</html>