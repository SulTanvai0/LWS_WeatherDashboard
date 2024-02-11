import HeartSvg from "../.././assets/heart.svg";
import RedHeartSvg from '../../assets/heart-red.svg';

const Favorite = ({ onShow, showFavModal }) => {
    return (
        <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
        >
            <img src={showFavModal ? RedHeartSvg : HeartSvg} alt="" />
            <span onClick={onShow}>Favourite Locations</span>
        </div>
    );
};

export default Favorite;