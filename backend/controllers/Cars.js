import Car from "../models/carModel.js";
 
export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        res.json(cars);
    } catch (error) {
        res.json({ message: "error:" + error.message });
    }  
}
 
export const getCarById = async (req, res) => {
    try {
        const car = await Car.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(car[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getCarsByType = async (req, res) => {
    try {
        const carsByType = await Car.findAll({
            where: {
                tipo: req.params.tipo
            }
        });
        res.json(carsByType);
    } catch (error) {
        res.json({ message: error.message });
    }  
}