import { useContext, useEffect, useState } from 'react';
import RedHeartSvg from '../../assets/heart-red.svg';
import HeartSvg from '../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../context';

const AddToFavorite = () => {

    const { addToFavorites, removeFromFavorites, favorites } = useContext(FavoriteContext);

    const { weatherData } = useContext(WeatherContext);


    const [isFavorite, toggleFavorite] = useState(false);

    const { latitude, longitude, location } = weatherData;

    const found = favorites.find((fav) => fav.location === location);

    useEffect(() => {
        toggleFavorite(found);
    }, [found])


    const handelFavorites = () => {
        if (!found) {
            addToFavorites(latitude, longitude, location);
        }
        else {
            removeFromFavorites(location);
        }

        toggleFavorite(!isFavorite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                    onClick={handelFavorites}
                >
                    <span>Add to Favourite</span>
                    <img src={isFavorite ? RedHeartSvg : HeartSvg} alt="" />
                </button>

            </div>
        </div>
    );
};

export default AddToFavorite;