# Homework #6 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

### (b)

### (c)

**clubSSG/build/*.html**

### (d)

### (e)

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>{{title}}</title>
        <meta name="author" content="{{author}}">
        <meta name="description" content="{{description}}">
        <link href="club.css" rel="stylesheet">
    </head>

<body>
    <nav>
        {% include "navMenu.html" %}
    </nav>
    <header>
        <h1>{{header}}</h1>
    </header>
    <main>
        {{mainContent | safe}}
    </main>
    <footer>
        &copy; 2021 Adam Boyd
    </footer>
    <script src="{{scriptFile}}"></script>
</body>
</html>
```

### (f)