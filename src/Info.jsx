import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function Info({ info }) {
    let SUMMER_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let WINTER_URL = "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAINY_URL = "https://images.unsplash.com/photo-1629671914953-fcda7163989c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
       <div className="infoBox">
       <h3>Weather Info: {info.weather}</h3>
       <div className="card-container">
       <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={info.humidity > 80 ? RAINY_URL : info.temp < 20 ? WINTER_URL : SUMMER_URL}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} &nbsp;
                {info.humidity > 80 ? <ThunderstormIcon /> : info.temp < 20 ? <AcUnitIcon /> : <SunnyIcon />}
              </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Temperature: {info.temp}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Feels Like: {info.feels_like}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Humidity: {info.humidity}%
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Min Temp: {info.temp_min}°C
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Max Temp: {info.temp_max}°C
                </Typography>
            </CardContent>
        </Card>
        </div>
        </div>
    );
}