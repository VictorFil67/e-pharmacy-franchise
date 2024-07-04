import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/e-pharmacy-franchise">
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <App />
    <ToastContainer autoClose={1500} />
    {/* </PersistGate>
    </Provider> */}
  </BrowserRouter>
);
