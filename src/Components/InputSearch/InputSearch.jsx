import React, { useState } from "react";
import "./InputSearch.css";
import { WeatherDisplay } from "../WeatherDisplay/WeatherDisplay";

export const InputSearch = () => {
    const api_key = "7ef40590ee5ecd608a01b37d24c1f856";

    const lang = "ar";

    const [isLoading, setIsLoading] = useState(false); // State to manage loading state
    const [weatherData, setWeatherData] = useState(null);

    const search = async () => {
        const inputData = document.getElementsByName("inputData")[0];

        const inputValue = inputData.value.trim();

        console.log(inputValue);

        if (inputValue.length === 0) {
            return false;
        }

        setIsLoading(true);

        const api_url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${inputValue}&appid=${api_key}&units=metric&lang=${lang}&cnt=4`;

        try {
            const response = await fetch(api_url);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } else {
                console.error("API request failed");
            }
        } catch (error) {
            console.error("API request failed with an error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="row d-flex justify-content-center mb-5">
                <div className="col-md-6 col-12">
                    <input
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                search();
                            }
                        }}
                        className="form-control form-control-lg fs-6"
                        id="inputData"
                        name="inputData"
                        type="text"
                        placeholder="Search the regions of the Arab world and the world"
                    />
                </div>
            </div>
            {isLoading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                weatherData && <WeatherDisplay data={weatherData} />
            )}
        </div>
    );
};
