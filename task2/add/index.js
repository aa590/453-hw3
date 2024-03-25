import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());

const addIntegers = (req, res) => {
    const { X, Y } = req.body;
    const Result = X + Y;
    res.json({ X, Y, Result});
};

app.route('/add')
    .get(addIntegers)
    .post(addIntegers);

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`add: listening on port ${port}`);
});
