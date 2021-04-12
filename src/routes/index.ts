import {Request, Response, Router} from 'express';
import Car from '../models/Car';

interface CarPatchI{
    id: number
    fecha: Date
    persona: string
}

class Routes{
    router: Router;    
    constructor(){
        this.router = Router();
        this.getRoutes();
    }

    async getAllCars(req: Request, res: Response){
        const cars = await Car.find();
        console.log(cars);
        res.send(cars);
    }

    async updateCarById(req: Request, res: Response){
        const body: CarPatchI = req.body;
        const { id, fecha, persona } = body;
        console.log(typeof fecha);
        const resp = await Car.findOneAndUpdate({id}, {
            estimatedate: undefined,
            person: undefined
        });
        res.send(resp);
    }

    getRoutes() {
        this.router.get('/cars', this.getAllCars);
        this.router.post('/updateCar/', this.updateCarById);
    }
}
const routes = new Routes();

export default routes.router;