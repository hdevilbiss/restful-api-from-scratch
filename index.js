/**
 * Initialize express and save it to app
 */
const express = require('express');
const app = express();
const PORT = 8080;

/**
 * Apply middleware for Express JSON
 */
app.use(express.json());

/**
 * Listen on a port then let us know the app is ready
 */
app.listen(
    PORT,
    () => console.log(`it's alive! on http://localhost:${PORT}`)
);

/**
 * Add a GET endpoint to handle /animal URI
 * Restart the server after adding new endpoints
 */
app.get('/animal', (request, response) => {
    response.status(200).send({
        animal: '🐈',
        breed: 'korat'
    });
});

/**
 * Add a POST endpoint with URL param, id
 */
app.post('/animal/:id', (request, response) => {
    const { id } = request.params;
    const { animal } = request.body;

    if (!animal) {
        response.status(418).send({ message: "An animal is required" });
    }

    response.send({
        animal: `${animal} with an id of ${id}`,
    })
});