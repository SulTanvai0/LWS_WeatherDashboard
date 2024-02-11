import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/Date-Utils";

import CloudSvg from "../../assets/cloud.svg";
import hazeSvg from "../../assets/haze.svg";
import SnowSvg from "../../assets/icons/snow.svg";
import SunnySvg from "../../assets/icons/sunny.svg";
import RainSvg from "../../assets/rainy.svg";
import ThunderSvg from "../../assets/thunder.svg";

import PinSvg from "../../assets/pin.svg";

const WeatherHeadline = () => {
    const { weatherData } = useContext(WeatherContext);
    const { location, climate, temperature, time } = weatherData;

    function getWeatherIcon() {
        switch (climate) {
            case "Rain":
                return RainSvg;

            case "Clouds":
                return CloudSvg;

            case "Snow":
                return SnowSvg;

            case "Clear":
                return SunnySvg;

            case "Thunder":
                return ThunderSvg;

            case "Fog":
                return hazeSvg;
            case "Haze":
                return hazeSvg;
            case "Mist":
                return hazeSvg;

        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt={climate} />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinSvg} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time, "time", false)}{getFormattedDate(time, "date", false)}</p>
        </div>
    );
};

export default WeatherHeadline;