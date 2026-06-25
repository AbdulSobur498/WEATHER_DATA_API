import { Request, Response } from 'express';
import axios from 'axios';
import { cityValidationSchema,forecastValidationSchema } from '../utils/validationSchema';
import { validationResult, checkSchema } from 'express-validator';
import { Weather } from '../models/weather';
require('dotenv').config();


const apiKey = process.env.OPENWEATHER_API_KEY;


// -- To get current weather --
export const currentWeather = [checkSchema(cityValidationSchema), async(req:Request, res:Response) => {
        try {
            const {q} = req.query;
            const result = validationResult(req);
            if (!result.isEmpty()) return res.status(400).send({ error: result.array() });
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}`);
            const weather = await Weather.create({ city: `${q}`, requestType: "currentWeather", Data: response.data })
            return res.send(response.data);
        } catch(err) {
            console.error(err);
        }
   
}];

// -- To  forecast a weather --
export const forecastWeather = [checkSchema(forecastValidationSchema), async(req:Request, res:Response) => {
    try {
        const {lat, lon} = req.query;
        const result = validationResult(req);
        if (!result.isEmpty()) return res.status(400).send({ error: result.array() });
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const weather = await Weather.create({ city: `${response.data.city}`, requestType: "forecastWeather", Data: [response.data.city, response.data.list[2].weather, response.data.list[2].dt_txt]
    });
    
        return res.send({Data: [response.data.city, response.data.list[2].weather, response.data.list[2].dt_txt] });
    } catch(err) {
        console.error(err);
    }
}];

// -- To get a single weather history
export const getWeatherHistory = async(req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const weatherHistory = await Weather.findById(id);
        return res.send(weatherHistory);
    } catch(err) {
        return res.send(err);
    }
}

//  -- To get all weather history --
export const getAllWeatherHistory = async(req:Request, res:Response) => {
    try {
        const weatherHistory = await Weather.find();
    return res.send(weatherHistory);
    } catch(err) {
        return res.send(err);
    }
}

// -- Delete weather History  --
export const deleteWeatherHistory = async(req:Request, res:Response) => {
    try {
        const { id } = req.params;
        const weatherHistory = await Weather.findByIdAndDelete(id);
        return res.status(200);
    } catch(err) {
        return res.send(err);
    }
}

//  ---  Delete all weather History ---
export const deleteAllWeatherHistory = async(req:Request, res:Response) => {
    try {
        const weatherHistory = await Weather.deleteMany();
    return res.status(200);
    } catch(err) {
        return res.send(err);
    }
}

// -- multiple cities endpoint --
export const multipleCurrentWeather = async(req:Request, res:Response) => {
    const { q } = req.query;
    const weatherData = [];

    for (const city of q) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            weatherData.push(response.data);
    }
    return res.json(weatherData);
}