import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom"

// 1 what component has to load in index.html
// 2 where it has to render
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
