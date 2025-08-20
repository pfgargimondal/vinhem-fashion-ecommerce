import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes.js";
import { useLocation } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';

function App() {
  const {pathname} = useLocation();
  const hideHeaderRoutes = ["/login", "/register", "/profile", "/change-password", "/order-history", "/cancelled-order", "/wishlist"];
  const hideFullHeaderFooterRoutes = ["/invoice"];

  const shouldHideHeader = hideHeaderRoutes.includes(pathname);
  const shouldHideFullHeaderFooterRoutes = hideFullHeaderFooterRoutes.includes(pathname);

  return (
    <div className="App">
      <Header shouldHideHeader={shouldHideHeader} shouldHideFullHeaderFooterRoutes={shouldHideFullHeaderFooterRoutes} />

      <main className={["/profile", "/change-password", "/cancelled-order", "/order-history", "/wishlist"].includes(pathname) 
        ? "" 
        : "container"}>
        <AllRoutes />
      </main>

      <Footer shouldHideFullHeaderFooterRoutes={shouldHideFullHeaderFooterRoutes} /> 
    </div>
  );
}

export default App;