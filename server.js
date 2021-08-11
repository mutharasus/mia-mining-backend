const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//require('dotenv').config();//uncomment if not using replit secrets

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;//uncomment if not using replit secrets and store secret in .env file in root directory

const uri = process.env['ATLAS_URI'];


mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const blobsRouter = require('./routes/blobs');
const transactionsRouter = require('./routes/transactions');

app.use('/blobs', blobsRouter);
app.use('/transactions', transactionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});