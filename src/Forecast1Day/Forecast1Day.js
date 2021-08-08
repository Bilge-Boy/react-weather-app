import 'bootstrap/dist/css/bootstrap.css';

function Forecast1Day(prop){
    const dayOfWeek= {
        0:"Sunday",
        1:"Monday",
        2:"Tuesday",
        3:"Wednesday",
        4:"Thursday",
        5:"Friday",
        6:"Saturday"
    }
    return(
        <div className="card col-2 m-1 text-center bg-info">
            <div className="card-header">
                {dayOfWeek[prop.day]}
            </div>
            <div className="card-body ">
                <img src={ require(`../icons/${prop.icon}.png`).default } alt="icon" className="img-fluid" />
            </div> 
            <div className="card-footer ">
                {` ${prop.description}, ${prop.temp}°C`}
            </div>
        </div>
    )
}

export default Forecast1Day;