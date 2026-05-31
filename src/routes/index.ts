import { Router } from 'express';
import { currentWeather, forecastWeather, getWeatherHistory, getAllWeatherHistory, deleteWeatherHistory, deleteAllWeatherHistory, multipleCurrentWeather } from '../controllers/weather';

const router = Router();


router.route('/api/current-weather').get(currentWeather);
router.route('/api/forecast').get(forecastWeather);
router.route('/api/weather-history/:id').get(getWeatherHistory).delete(deleteWeatherHistory);
router.route('/api/weather-history').get(getAllWeatherHistory).delete(deleteAllWeatherHistory);
router.route('/api/multiple-weather').get(multipleCurrentWeather);



export default router;