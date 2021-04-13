import express from 'express';
import router from './routes';
import database from './models';
import cors from 'cors';

class Server {
    app: express.Application;
    constructor(){
        this.app = express();
        this.config();
        this.routes();
        database.connect();
    }

    config(){
        this.app.use(express.json());
        this.app.set('port', process.env.PORT || 80);
        this.app.use(cors());
    }

    routes(){
        this.app.use(router);
    }

    start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on 80');
        });
    }
}

const server = new Server();
server.start();