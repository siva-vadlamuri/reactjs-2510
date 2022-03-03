import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Store } from "./redux/store/Store";

// 1 what component has to load in index.html
// 2 where it has to render
ReactDOM.render(
  <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
