import "./App.css";

import { Navbar } from "./Components/Navbar";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <AllRoutes />
      <br />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
