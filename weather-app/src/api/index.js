const apiKey = "daa0f7dfcff54e2c94590142251207";
const baseUrl = "https://api.weatherapi.com/v1/current.json";


export const getWeatherData = async (city) => {
    const res = await fetch(`${baseUrl}?key=${apiKey}&q=${city}&aqi=yes`);
    return await res.json();
};