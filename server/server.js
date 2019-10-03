const express = require('express');
const apiRouter = require('./routes');

const app = express();

app.use(express.json);
app.use('/api/profil', apiRouter);

app.listen(process.env.PORT || '3000', () => { 
    console.log(`Server is Running on port: ${process.env.PORT || '3000'}`); 
});