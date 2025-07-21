import favicon from './assets/favicon.ico.png';

const setFavicon = () => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = favicon;
  document.head.appendChild(link);
};

setFavicon();

if (typeof global === 'undefined') {
    window.global = window;
}



import { createRoot } from "react-dom/client";
import "./index.css"; // Global styles
import { RouterProvider } from "react-router-dom"; // Correct import for RouterProvider
import router from "./routes/routes.jsx"; // Import your routes
import { Provider } from 'react-redux';
import {store} from './store/store.jsx'
createRoot(document.getElementById("root")).render(
  
<Provider store={store}>
<RouterProvider router={router} /> {/* Provides the router configuration */} 
</Provider>
 
);
