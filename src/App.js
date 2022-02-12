import Body from "./components/Body";
import Display from "./components/Display";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./Redux/Reducer";

function App() {
  const store = createStore(Reducer);
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "black" }}>
        <Display />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
