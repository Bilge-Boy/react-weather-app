import './App.css';
import Forecast1Day from './Forecast1Day/Forecast1Day';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect,useState } from 'react';

function App() {
  const [dayCard, setDayCard] = useState([]);
  useEffect(()=>{
    fetch("https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json")
      .then(data => data.json())
      .then(days => {
      setDayCard(days);
  })
  },[]);
  return (
    <div className="App row">
     {
        dayCard.map((card, i)=>{
          return <Forecast1Day key={i} day={card.day} description={card.description} icon={card.icon} temp={card.temperature}/>      
        })
     }
      
    </div>
  );
}

export default App;
