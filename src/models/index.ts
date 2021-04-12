import mongoose from 'mongoose';

class Database{
    uri: string;
    constructor(){
        this.uri = 'mongodb://localhost/car_management';
    }

    connect(){
        mongoose.connect(this.uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        }).then((db)=>{
            console.log("DB is connected");
        }).catch((error)=>{
            console.error(error);
        })
    }

}
const database = new Database();
export default database;