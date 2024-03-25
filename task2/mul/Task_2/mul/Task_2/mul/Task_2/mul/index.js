import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

const multiplyIntegers = (req, res) => {
    const { X, Y } = req.body;
    const Result = X * Y;
    res.json({ X, Y, Result});
};

app.route('/mul')
    .get(multiplyIntegers)
    .post(multiplyIntegers);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`mul: listening on port ${port}`);
});
