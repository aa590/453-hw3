import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

const subIntegers = (req, res) => {
    const { X, Y } = req.body;
    const Result = X - Y;
    res.json({ X, Y, Result});
};

app.route('/sub')
    .get(subIntegers)
    .post(subIntegers);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`sub: listening on port ${port}`);
});
