import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

const divideIntegers = (req, res) => {
    const { X, Y } = req.body;
    if (Y === 0) {
        res.status(400).json({ error: "division by zero." });
    } else {
        const Result = X / Y;
        res.json({ X, Y, Result });
    }
};

app.route('/div')
    .get(divideIntegers)
    .post(divideIntegers);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`div: listening on port ${port}`);
});
