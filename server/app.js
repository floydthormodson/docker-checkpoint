const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')['development']);
const cors = require('cors')
const morgan = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'));


app.get('/', function (req, res) {
    knex('greeting_table')
        .select('greeting')
        .then(data => res.status(200).json(data))
        .catch(err => {
            res.status(404).json({
                message:
                    'The data you are looking for could not be found. Please try again'
            })
        }

        );
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
});
