## DOM Manipulation (Very Important)

This is where jQuery becomes extremely powerful.

### You will learn how to:

- Change HTML
- Add elements
- Remove elements
- Append elements
- Prepend elements
- Modify attributes
- Modify classes

### Examples:
- Change HTML
```bash
$("#title").html("New Title")
```
- Remove elements
```bash
$("p").remove()
```
- Append elements
```bash
$("body").append("<p>New Paragraph</p>")
```

### More DOM Manipulation

#### Now we learn 4 extremely important functions:

| Function  | Purpose                  |
| --------- | ------------------------ |
| append()  | Add element at end       |
| prepend() | Add element at beginning |
| before()  | Add element before       |
| after()   | Add element after        |

### Example:
- append()
```bash
$("#list").append("<li>New Item</li>")
```

### Result:
```bash
Item 1
Item 2
New Item
```

- prepend()
```bash
$("#list").prepend("<li>New Item</li>")
```

### Result:
```bash
New Item
Item 1
Item 2
```

- before()
```bash
$("h1").before("<p>Hello</p>")
```
Adds before the element.

- after()
```bash
$("h1").after("<p>Hello</p>")
```
Adds after the element.