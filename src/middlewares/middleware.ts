import express,{ Request, Response, NextFunction} from 'express';
import { Weather } from '../models/weather';

/*
export const resolveWeatherIndex = async (req:Request, res:Response, next:NextFunction) {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parseId)) return res.send("Input valid Id");

    const findWeather = await Weather.findById(parsedId);

    if (findWeather === -1) return ("Weather not find");

    req.findWeather = findWeather;
    next();
}
*/