import express,{Request, Response} from 'express';
import axios from 'axios';
import routes from './src/routes/index';
import { connectDB } from './src/config/database';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());
app.use(routes);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello world')
});

    const start = async() => {
        try {
            await connectDB(process.env.MONGO_URI)
            app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
            });
        } catch(err) {
            console.error(err);
        }
    }

    start();

