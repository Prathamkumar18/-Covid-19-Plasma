const express = require('express');
const bodyParser = require('body-parser');
const donorRoutes = require('./routes/donorRoutes');
const db=require('./db');
const ip='0.0.0.0';

const app=express();
const port=process.env.PORT || 8083;

app.use(bodyParser.json());
app.use('/donor', donorRoutes);

app.listen(port,ip, () => {
    console.log(`Server is running on port ${port}`);
});