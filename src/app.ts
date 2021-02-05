import dotenv from 'dotenv'
import mongoose from 'mongoose'
import express from 'express';
import routes from './routes';

dotenv.config()

mongoose.connect(
  `mongodb://${process.env.MONGO_HOST}`,
  <any>{
    auth: { "authSource": "admin" },
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const app = express();
const port: number = 3000;

app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use('/', routes)
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});