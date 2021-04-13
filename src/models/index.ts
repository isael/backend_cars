import mongoose from 'mongoose';

class Database{
    uri: string;
    constructor(){
        this.uri = 'mongodb+srv://user-test:password-test@cluster0.5bwhu.mongodb.net/car_management?retryWrites=true&w=majority';
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