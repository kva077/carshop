import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";
import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./app/utils/history";
import ScrollToTop from "./app/components/common/scrollToTop";

const store = createStore;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store()}>
            <Router history={history}>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
