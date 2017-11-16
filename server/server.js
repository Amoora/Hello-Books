

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import router from './routes/indexRoute';


const app = express();
// rejects anything not properly formatted
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

routes(app);



// Setup Routing
app.use('/api/v1/', router);// mount the user route at the /api/v1/user path
app.use('/books', router);

app.listen(3000, () =>{
    console.log("first Api running on port 3000"); 
});


