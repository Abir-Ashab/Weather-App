export async function fetchWeatherData(city: string): Promise<any> {
    const config = await fetch('../../../config/config.json').then(response => response.json());
    const apiKey = config.apiKey;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    return response.json();
}