import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <h1>React redux</h1>
        <hr />
      </Provider>
    </div>
  );
}

export default App;
