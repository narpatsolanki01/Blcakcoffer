import  express from 'express';
import connect from './dbconnection/dbconnection.js';
import router from './routes/index.js';
import cors from 'cors';
const App=express();
const port =    5000;
const database ="mongodb://0.0.0.0:27017/block";

connect(database);
App.use(express.json());
App.use(cors());
App.use(router);
App.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
