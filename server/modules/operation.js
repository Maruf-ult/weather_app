import axios from "axios";
import userData from "../usermodel/userSchema.js";

export const postCity = async (req, res) => {
    const { city } = req.body;
    const apiKey = "601443e618538ede44aaaa1cb558d0a8";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await axios.get(api);
        const { weather, main: { temp, humidity }, wind: { speed: windspeed } } = response.data;
        
    
        const newCity = new userData({
            city,
            weather: weather[0].main,
            temp:temp,
            humidity,
            windspeed
        });

        await newCity.save();
        return res.status(201).json({ success: true, msg: "City posted successfully",newCity });
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
};

export const getWeather = async (req, res) => {
    const { city } = req.query;

    try {
        const data = await userData.findOne({ city });
        if (!data) {
            return res.status(404).json({ success: false, msg: "Can't find data" });
        }
        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
};
