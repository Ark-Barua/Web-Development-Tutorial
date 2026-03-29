There are 3 ways.

### Method 1 — CDN (Most Common)

Add this inside HTML.
```bash
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```
Example full HTML:
```bash
<!DOCTYPE html>
<html>
<head>
<title>jQuery Test</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
</head>
<body>
<h1 id="title">Hello World</h1>
<script>
$("#title").css("color","red");
</script>
</body>
</html>
```

### Method 2 — Download jQuery

Download from:
https://jquery.com/download/
Then include:
```bash
<script src="jquery.min.js"></script>
```

### Method 3 — npm (Used in modern setups)
```bash
npm install jquery
```
Then import:
```bash
import $ from "jquery";
```