const express = require('express');
const app = express();

app.use(express.json);
app.listen(process.env.PORT || '3000', () => {

    console.log(`Server is Running on port: ${process.env.PORT || '3000'}`);

});