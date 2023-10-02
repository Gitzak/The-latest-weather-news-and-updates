import React from "react";
import "./WeatherDisplay.css";

export const WeatherDisplay = ({ data }) => {
    if (!data) {
        return null;
    }

    const temperature = data["list"][0]["temp"]["day"];
    const icon = data["list"][0]["weather"][0]["icon"];
    const description = data["list"][0]["weather"][0]["description"];
    const humidity = data["list"][0]["humidity"];

    const days = data["list"];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date().getDay();

    return (
        <section id="main">
            <div id="bgGlass" className="w-section text-shadow pb-3">
                <div className="container">
                    <div className="row text-white w-main py-4">
                        <div className="col-md-12 col-12">
                            <div className="text-center">
                                <img className="mb-4" id="wicon-main" alt={description} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                                <span id="temperature" className="display-4">
                                    {parseInt(temperature)}°C
                                </span>
                            </div>
                            <div className="text-center d-flex justify-content-center gap-5">
                                <h3 id="description" className="text-capitalize">
                                    {description}
                                </h3>
                                <h4>
                                    <span id="humidity">{parseInt(humidity)}%</span> <i className="wi wi-humidity"></i> Humidity
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container card-section">
                    <div className="row d-flex justify-content-center align-content-center ">
                        {days.map((day, index) => (
                            <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                                <div className="card hydrogen-card">
                                    <div className="card-content">
                                        <div className="row head">
                                            <div className="col-6">
                                                <div className="display-5">{parseInt(day["temp"]["day"])}°</div>
                                            </div>
                                            <div className="col-6 text-end">
                                                <div className="reading">{daysOfWeek[today + index]}</div>
                                            </div>
                                        </div>
                                        <div className="row main">
                                            <div className="col-12 weather">
                                                <img className="" id="wicon-main" alt={description} src={`https://openweathermap.org/img/wn/${day["weather"][0]["icon"]}@2x.png`} />
                                                <h4 className="weather-description">{day["weather"][0]["description"]}</h4>
                                            </div>
                                        </div>
                                        <div className="row foot mb-4">
                                            <div className="col-6">
                                                <div className="reading">
                                                    <span className="humidity-value">Humidity {day["humidity"]}% </span>
                                                </div>
                                            </div>
                                            <div className="col-6 text-end">
                                                <div className="time">{day["pressure"]} hPa</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
