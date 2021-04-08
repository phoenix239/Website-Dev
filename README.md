# Homework #8 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

*What HTTP Method is used in the request?*  **Method: Get**

*What is the response code and what does it mean?*  **Status: 200**

*What version of HTTP is being used?*  **Protocol: http/1.1**

### (b)

GET / HTTP/1.1

Host: bb.csueastbay.edu

Connection: keep-alive

Upgrade-Insecure-Requests: 1

DNT: 1

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

Sec-Fetch-Site: same-origin

Sec-Fetch-Mode: navigate

Sec-Fetch-User: ?1

Sec-Fetch-Dest: document

sec-ch-ua: "Google Chrome";v="89", "Chromium";v="89", ";Not A Brand";v="99"

sec-ch-ua-mobile: ?0

Referer: https://bb.csueastbay.edu/ultra/course

Accept-Encoding: gzip, deflate, br

Accept-Language: en-US,en;q=0.9

Cookie: CID=AgAAAC6ZnAzP4UJK5I6JJVB4M54=;AWSELB=D3570BC914533D9ACC5FBEA2A258730F699E691A0ABC1ED62EDAD5455CC53097809BAEF2785564A9BC1CBD75664AA49B92F6D22377D8ED04EB05777EC4EF6F24191B012DD8; AWSELBCORS=D3570BC914533D9ACC5FBEA2A258730F699E691A0ABC1ED62EDAD5455CC53097809BAEF2785564A9BC1CBD75664AA49B92F6D22377D8ED04EB05777EC4EF6F24191B012DD8

### (c)

HTTP/1.1 200

Cache-Control: private

Cache-Control: max-age=0

Cache-Control: no-store

Cache-Control: must-revalidate

Content-Encoding: gzip

Content-Language: en-US

Content-Security-Policy: frame-ancestors 'self'

Content-Type: text/html;charset=UTF-8

Date: Tue, 06 Apr 2021 00:50:20 GMT

Expires: Mon, 06 Apr 2020 00:50:20 GMT

Last-Modified: Fri, 06 Apr 2001 00:50:20 GMT

P3P: CP="CAO PSA OUR"

Pragma: private

Server: openresty/1.15.8.3

Set-Cookie: JSESSIONID=F1FE9E942CD7C3200598D13BCB7CE45B; Path=/; Secure

Set-Cookie: BbRouter=expires:1617681020,id:94A9FA264EDE557B170BFF1CD08D68F0,signature:112177b6d06534fb18ab6eb5de0c0606704acc8f337a26f4925296c783fa2cbd,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:4608a30f-46b7-41c1-86f2-53b115a012ac; Path=/; Secure; HttpOnly

vary: accept-encoding

X-Blackboard-appserver: ip-10-145-58-199.ec2.internal

X-Blackboard-product: Blackboard Learn &#8482; 3900.8.0-rel.37+0b5fb53

X-Frame-Options: SAMEORIGIN

Content-Length: 19089

Connection: keep-alive

### (d)

What server is BlackBoard based on?  **OpenResty**

Are any cookies set? If so what are they.  **Yes, some:**

**Set-Cookie: JSESSIONID=F1FE9E942CD7C3200598D13BCB7CE45B; Path=/; Secure**

**Set-Cookie: BbRouter=expires:1617681020,id:94A9FA264EDE557B170BFF1CD08D68F0,signature:112177b6d06534fb18ab6eb5de0c0606704acc8f337a26f4925296c783fa2cbd,site:aefdf5db-8c6a-4e8e-8bf7-fb9f1f4dcdf0,v:2,xsrf:4608a30f-46b7-41c1-86f2-53b115a012ac; Path=/; Secure; HttpOnly**

### (e)

Describe how the second line of code works from a programming perspective.

**myDate** - Mon Apr 05 2021 18:17:48 GMT-0700 (Pacific Daylight Time)

**.toISOString()** - changes the myDate to a simplified extended ISO format: **2021-04-06T01:17:48.766Z**

**.toLowerCase()** - Ensures all letters are lower case: **2021-04-06t01:17:48.766z**

**.split("t")** - Splits the string at the lower case t and creates an array: **["2021-04-06", "01:17:48.766z"]**

**[1]** - returns the element of the array at position 1 (the time): **01:17:48.766z**

### (f)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Comments:

Protocol: **http/2 or h2**

Domain: **developer.mozilla.org**

Port:  **443**

Path:  **/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types**

Query: **none**

Fragment: **Comments**

https://www.google.com/search?q=gaia+mission&rlz=1CYPO_enUS751:

Protocol: **http/3 or h3-29**

Domain: **google.com**

Port: **443**

Path:  **/search**

Query: **q=gaia+mission&rlz=1CYPO_enUS751**

Fragment: **none**

http://127.0.0.2:8282/static/index.html: **This site  can't be reached**

Protocol: **http**

Domain:  **127.0.0.2**

Port:  **8282**

Path:  **/static/index.html**

Query:  **none**

Fragment:  **none**

## Question 2

### (a)

**Output:**

![Image for question 2a](/images/hw82a.JPG)

**Why:**

To start, the first line is sent to the log, then the second line creates a timeout (with a default millisecond of 0) and a promise for the cs651 function. After that timeout is set (but not yet returned), the second line logs. Next the second timeout/promise is set (to 0 as specified), and the third log ('Is this the end?') is sent to the console. once these lines are done, then the promises are handled as they come back, so cs651, then cs351.

### (b)

**Output:**

![Image for question 2b](/images/hw82b.JPG)

This code creates 3 promises with random timeouts, then sets them to return as a .race, which returns as soon as the first to fullfill comes back (ignoring the other two).

In this case, to determine who won the race you simply look at the value of PromiseResult, which returned P1 twice and then P2 (in my case).

### (c)

![Image for question 2c](/images/hw82c.JPG)

### (d)

![Image for question 2d](/images/hw82d.JPG)

## Question 3

### (a)

![Image for question 3a](/images/hw83a.JPG)

### (b)

![Image for question 3b](/images/hw83b.JPG)

### (c)

![Image for question 3c1](/images/hw83c1.JPG)

![Image for question 3c2](/images/hw83c2.JPG)

```javascript
var express = require('express');
var app = express();

app.get('/date', function(req, res) {
    let myDate = new Date().toLocaleDateString("en-US");
    let myTime = new Date().toLocaleTimeString("en-US");
    let myName = 'Adam Boyd';
    res.send(`Hello ${myName}, Date and Time: ${myDate} ${myTime}`);
});

let visits = 0;

app.get('/netID', function(req, res) {
    visits++;
    let myName = 'Adam Boyd';
    let myID = 'xv3543';
    res.send(`Name: ${myName}, NetID: ${myID}, Number of visits: ${visits}`);
});

port = 5555;
host = '127.0.0.2';
app.listen(port, host, function() {
    console.log(`Example app listening on IPv4: ${host}:${port}`);
});
```

## Question 4

### (a)

### (b)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {% block metaStuff %}
        {% endblock %}
        <link href="css/club.css" rel="stylesheet">
    </head>
    <body>
    <main>
        {% block main %}{% endblock %}
    </main>
    <footer>
        <p>&copy; 2021 Adam Boyd</p>
    </footer>
    </body>
</html>
```

### (c)

### (d)

### (e)

![Image for question 4e](/images/hw84e.JPG)

```javascript
app.get('/', function(req, res) {
    count++;
    let data = { name: yourName, id: netId, visits: count };
    res.render('index.njk', data);
});

app.get('/uptime', function(req, res) {
    let curDate = new Date();
    let data = { startDate: serverStart, currentDate: curDate };
    res.render('uptime.njk', data);
})
```

### (f)

![Image for question 4e](/images/hw84f.JPG)