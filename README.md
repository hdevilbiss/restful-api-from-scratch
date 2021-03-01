# Build a Simple API from Scratch

Thanks to [Fireship](https://www.youtube.com/watch?v=-MTSQjw5DrM&t=252s)

## Run the server

From the project root, run `node .` to run the `index.js` file.

### No endpoints

An Express server started up without any endpoints will say "Cannot GET /".

```
GET http://localhost:8080/
Status 404 Not Found
Version HTTP/1.1
Transferred 388 B (139 B size)
```

### Debugging Options

1. Browser.
1. `curl http://localhost:8080/`
1. VSCode extension such as REST Client.
1. REST client such as [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/).

### 500 Error Response on POST

Properties cannot be destructured from the POST request body: Express does not parse JSON in the body by default, but we can use Middleware to tell Express to parse JSON before the data hits the callback function.

Middleware runs before every endpoint callback. Common middleware is already built into Express.

Initializing **index.js**

Before (not using Middleware)

```javascript
const app = require('express')();
const PORT = 8080;
```

After (using Middleware)

```javascript
const express = require('express');
const app = express();
```

### OpenAPI

Jeff gave homework by telling us about OpenAPI: Describe an API using YAML.

#### **[Swagger](https://swagger.io/specification/)**