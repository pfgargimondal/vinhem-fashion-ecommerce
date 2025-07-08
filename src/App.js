import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes.js";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <AllRoutes />

      <Footer />
    </div>
  );
}

export default App;