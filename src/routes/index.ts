import {Request, Response, Router} from 'express';
import Car from '../models/Car';

interface CarPatchI{
    id: number
    estimatedate: Date
    person: string
}

class Routes{
    router: Router;    
    constructor(){
        this.router = Router();
        this.getRoutes();
    }

    async getAllCars(req: Request, res: Response){
        const cars = await Car.find();
        res.send(cars);
    }

    async updateCarById(req: Request, res: Response){
        const body: CarPatchI = req.body;
        const { id, estimatedate, person } = body;
        const resp = await Car.findOneAndUpdate({"_id":id}, {
            estimatedate: estimatedate,
            person: person,
        },
        {returnOriginal: false}
        );
        res.send(resp);
    }

    getRoutes() {
        this.router.get('/cars', this.getAllCars);
        this.router.post('/updateCar/', this.updateCarById);
    }
}
const routes = new Routes();

export default routes.router;