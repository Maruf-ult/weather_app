import { Router } from 'express'
import { postCity,getWeather } from '../modules/operation.js';

const router = Router();

router.post('/api/city',postCity);
router.get('/api/weather',getWeather);

export default router;