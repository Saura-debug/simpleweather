import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import "./searchbox.css"
export default function SearchBox ({updateinfo}) {
    let [city,Setcity] = useState("");
    let [error,seterror] = useState(false);
    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "8f9539957ce0d15e45c6b8cdf324dcc0";
    let onfill = (event) =>{
         Setcity(event.target.value);
        
        

    }
let getweatherinfo = async () =>{
    try {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonrespons =  await response.json();
    console.log(jsonrespons);
    let result = {
        city : city

        ,

        temp : jsonrespons.main.temp,
        tempmin : jsonrespons.main.temp_min,

       tempmax : jsonrespons.main.temp_max,
       humidity : jsonrespons.main.humidity,
       feelslike : jsonrespons.main.feels_like,
       weather : jsonrespons.weather[0].description,
      
      

    }
    console.log(result);
    return result;
}  catch (err) {
   throw err;
   
}

}


    let onclick =async (evt) => {
        try {
        evt.preventDefault();
        

        Setcity("");
       let info =  await getweatherinfo();
       updateinfo(info); }
       catch (err) {
        seterror(true);
       } 

    }
    return <div className='Searchbox'> 

    <form onSubmit={onclick}>
    <TextField id="city" label="city name" variant="outlined" value={city} onChange={onfill} required />
    <br /><br /><br />

    <Button variant="contained" type='submit'>Search</Button>
    {error && <p style = {{color:"red"}}>no such place exist</p>}

    </form>
     
    </div>

}