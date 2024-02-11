
import Page from "./Page";
import { FavoriteProvider, LocationProvider, WeatherProvider } from "./provider";

const App = () => {

  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};
export default App;
