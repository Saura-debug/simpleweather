import {useState} from "react";
import SearchBox from "./searchbox";
import Infobox from "./infobox";
import "./wheatherapp.css";


export default function Weatherapp () {
    const [weatherinfo,setweatherinfo] = useState({
        city : "sudhansu pal land",
        feelslike : 24.84,
        temp : 25.5,
        tempmin : 25.5,
        tempmax : 25.4,
        humidity : 47,
        weather : "haze"

    });

    let updateinfo = (result) => {
        setweatherinfo(result);

    }
    return (
        <div className="Wheatherapp" style={{textAlign:"center"}}>
            <h1>Wheatherapp by sudhanshu </h1>
            <SearchBox updateinfo = {updateinfo}/>
            <Infobox info = {weatherinfo}/>
           
        </div>
    )
}