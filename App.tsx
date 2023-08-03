import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Router } from "./src/routes/index.routes";
import { store } from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
