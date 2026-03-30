Selectors are the most powerful part of jQuery.

They allow you to select:

- elements
- classes
- ids
- attributes
- complex patterns

## General syntax:
```bash
$(selector)
```

## Example:
```bash
$("p")
```
This selects all paragraph elements.

1. ID Selector

## Syntax:
```bash
$("#idName")
```
## Example:
```bash
$("#title")
```
## HTML:
```bash
<h1 id="title">Hello</h1>
```

2. Class Selector

## Syntax:
```bash
$(".className")
```
## Example:
```bash
$(".box")
```
## HTML:
```bash
<div class="box"></div>
```

3. Element Selector

Select all elements of a type.

## Example:
```bash
$("p")
```
## HTML:
```bash
<p>One</p>
<p>Two</p>
<p>Three</p>
```
This selects all paragraphs.

4. Multiple Selector

Select multiple elements.

## Example:
```bash
$("h1, p")
```
## Selects:
- all h1
- all p

5. Universal Selector

Select everything.
```bash
$("*")
```

6. Descendant Selector

Select elements inside another element.

## Example:
```bash
$("div p")
```
## Meaning:

Select all p inside div.