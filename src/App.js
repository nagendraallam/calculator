import Body from "./components/Body";
import Display from "./components/Display";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Redux/Reducer";
import { useEffect, useState } from "react";

function App() {
  const store = createStore(Reducer);
  const [isLandscape, setIsLandscape] = useState();

  useEffect(() => {
    if (window.innerHeight > window.innerWidth) {
      setIsLandscape(false);
    } else {
      setIsLandscape(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "#D3ECA7" }}>
        <Display landscape={isLandscape} />
        <Body height={isLandscape ? 70 : 60} />
      </div>
    </Provider>
  );
}

export default App;
