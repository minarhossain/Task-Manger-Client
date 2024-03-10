import React from 'react'
import ReactDOM from 'react-dom/client';
import './assets/css/animate.min.css';
import './assets/css/bootstrap.css';
import './assets/css/dropdownmenu.css';
import './assets/css/progress.css';
import './assets/css/sidebar.css';
import './assets/css/style.css';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import store from './redux/store/store.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
