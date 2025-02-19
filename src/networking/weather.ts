import { WeatherResponse } from "../model/weatherResponse";
import { response } from '../mock/response';

export const getWeather = async (city: string) :Promise<WeatherResponse> =>  {
    var requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
        
    };
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac6f213887b95d0b8171b342e702e112&units=metric`, requestOptions);
    console.log('1:', response)


if(response.status === 404){
    console.warn('Error 404 - city not found');
    return response.json();
}else{
    const element = <HTMLInputElement> document.getElementById("button-location");
    element.disabled = true;
    console.warn('deshabilita 1', element);
        return response.json(); 
}



    
        

    
} 

