import React, { useState, useEffect } from "react";

const Weather: React.FC = () => {
    const [input, setInput] = useState<string>("");
    const [latitude, setLatitude] = useState<number | null>(null);
    const [longitude, setLongitude] = useState<number | null>(null);

    useEffect(() => {
        if (!input) return; 

        const getData = setTimeout(() => {
            fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=7e84badf24cbc95f292cf5eb72c895a8`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.length > 0) {
                        setLatitude(data[0].lat);
                        setLongitude(data[0].lon);
                    }
                })
                .catch((error) => console.error("Geolocation fetch error:", error));
        }, 2000);

        return () => clearTimeout(getData);
    }, [input]);

    useEffect(() => {
        if (latitude && longitude) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=7e84badf24cbc95f292cf5eb72c895a8`)
                .then((res) => res.json())
                .then((data) => console.log("Weather data:", data))
                .catch((error) => console.error("Weather fetch error:", error));
        }
    }, [latitude, longitude]);

    return (
        <div>
            <div>
                <input
                    type="text"
                    name="input"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </div>
        </div>
    );
};

export default Weather;
