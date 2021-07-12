import { getWeather } from './networking/weather';
import './styles/main.scss';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';
import { buttonLimpiarClick} from './dom-manipulation/domManipulation';
    export const displayWeather = async () => {
        const city = getCity();
        try{ 
            if(city.trim() === '' ) {  

            alert('Ingrese una ciudad')
            
            } else{

                const weather = await getWeather(city);

                console.log('2:', weather)
    
                updateInteface(weather);

                console.log('3:', weather)
                const limpiar = <HTMLInputElement> document.getElementById("button-limpiar");
                limpiar.disabled = false;
               if(buttonLimpiarClick) buttonLimpiarClick.addEventListener('click', Limpiar);
            }

        }catch(error){
            const texto = <HTMLInputElement> document.getElementById("weather-location-input");
            texto.value = '';

            console.warn('Hubo problemas para obtener el parametro de City')
            alert('La Ciudad ingresada no existe')
    
        }
    
    }     
 if (buttonClick) buttonClick.addEventListener('click', displayWeather) ;

 function Limpiar(){
    console.log('Limpiar')
    
    const texto = <HTMLInputElement> document.getElementById("weather-location-input");
     const limpiar = <HTMLInputElement> document.getElementById("button-limpiar");
     const element = <HTMLInputElement> document.getElementById("button-location");

     if(texto.value !== ''){
        texto.value ='';
        element.disabled = false;
        limpiar.disabled = true;
     }

 }







