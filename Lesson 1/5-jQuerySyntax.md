## jQuery Syntax

### General structure:
```bash
$(selector).action()
```

### Example:
```bash
$("p").hide();
```

### Breakdown:
| Part     | Meaning           |
| -------- | ----------------- |
| `$()`    | jQuery function   |
| selector | element to target |
| action   | what to do        |

## Very Important Concept

You must wait for the page to load before running jQuery.
Otherwise the elements may not exist.

### Correct method:
```bash
$(document).ready(function(){

    // your code here

});
```

### Example:
```bash
$(document).ready(function(){

    $("#text").css("color","blue");

});
```

## Modern Shortcut

### Instead of writing:
```bash
$(document).ready(function(){

});
```

### We can write it as:
```bash
$(function(){

});
```