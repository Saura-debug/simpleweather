import Card from '@mui/material/Card';
import "./info.css"
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { indigo } from '@mui/material/colors';
export default function Infobox({info}) {
   
    let rain = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaW58ZW58MHx8MHx8fDA%3D";
    let cold = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let hot = "https://media.istockphoto.com/id/1203734762/photo/global-warming-is-an-important-problem-of-21-th-century.jpg?s=612x612&w=0&k=20&c=vPXgSKGHspBwfGgn3yIQzP7ezEw6o4i3P2yeDmwabQI=";

   
    return <div className="infobox">
        
        <div className='cardcontainer'>

        
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 70 ? rain : info.temp > 20 ? hot : cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        {info.humidity > 70 ? <BeachAccessIcon/> : info.temp > 20 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
      <div>feelslike = {info.feelslike}&deg;</div>
      <div>temp = {info.temp}&deg;</div>
      <div>mintemp = {info.tempmin}&deg;</div>
      <div>maxtemp = {info.tempmax}&deg;</div>
      <div>humidity = {info.humidity}</div>
      <div>weather = {info.weather}</div>
      <p><i>the weather can be described as {info.weather} and feels like {info.feelslike}</i></p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>

}