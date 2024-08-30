# MERN Weather App


## Description
This is a simple weather application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to enter a city name and retrieve the current temperature, humidity, and wind speed for that location.



## Features
  - Enter a city name to fetch and display weather details.
  - View temperature, humidity, and wind speed.
  - Data is fetched from the OpenWeatherMap API and stored in a MongoDB database.



## Technologies Used
 
  - **Express.js**: Backend framework
  - **React.js**: Frontend library
  - **Node.js**: Backend runtime environment
  - **MongoDB**: Database to store URLs
  - **ThirdParty**: OpenWeatherMap API key


## Installation

1. Clone this repository:

   ```
    https://github.com/Maruf-ult/weather_app.git
   
     ```

3. Open the terminal in the repository folder:
 
   ```
    cd weather_app
    ```

5. Install backend dependencies:

   ```
   cd server
   npm install
    ```

7. Install frontend dependencies:
   
   ```
   cd client
   npm install
     ```

9. Configure MongoDB:
- Create an account on MongoDB Compass.
- Create a database and obtain your MongoDB URI.
- Create a `.env` file in the root directory and add your MongoDB URI and OpenWeatherMap API key:

  ```  MONGO_URI=your_mongodb_uri  ```
  ```  WEATHER_API_KEY=your_openweathermap_api_key ```



6. Run the backend application:
   
   ```
   cd server
   npm start
   ```

6. Run the frontend application:
   
   ```
   cd client
   npm run dev
   ```   

   

Feel free to adapt this template to your project's specific requirements. Happy coding! 🚀

: GitHub - Maruf-ult/weather_app

