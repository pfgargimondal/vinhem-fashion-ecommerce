import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes.js";
import { useLocation } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';

function App() {

  const {pathname} = useLocation();
  const hideHeaderRoutes = ["/login", "/register"];

  const shouldHideHeader = hideHeaderRoutes.includes(pathname);

  return (
    <div className="App">
      <Header shouldHideHeader={shouldHideHeader} />      

      <main className="container">
        <AllRoutes />
      </main>

      <Footer /> 
    </div>
  );
}

export default App;