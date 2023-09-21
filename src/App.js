import { BrowserRouter } from "react-router-dom";
import Gallery from "./components/Gallery";
import "./index.css";
import ClerkProviderWithRoutes from "./components/ClerkProviderWithRoutes";

function App() {
  return (
    // <div className="App">

    // </div>
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
