import React from "react";
import '../styles/App.css';
import { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
    const [query, setQuery] = useState("");
    const [showDisplay, setShowDisplay] = useState(false);

    return (
        <div id="app">
            {/* Do not remove the main div */}
            <input className="search" placeholder="Enter a city" value={query} onChange={(e) => {
                setQuery(e.target.value);
                setShowDisplay(false);
            }} onKeyDown={(e) => {
                if (e.key == "Enter" && query.length != 0) {
                    setShowDisplay(true);
                }
            }} />
            {
                showDisplay &&
                (
                    <div className="weather">
                        <WeatherDisplay query={query} setQuery={setQuery} showDisplay={showDisplay} />
                    </div>
                )
            }
        </div>
    )
}

export default App